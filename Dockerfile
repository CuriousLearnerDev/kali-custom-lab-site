# ---------- 构建阶段 ----------
FROM node:24-alpine AS builder

WORKDIR /app

# 只需要装依赖 + 构建，地址与 GitHub token 都在这一步用
ARG SITE_URL=https://kali-lab.example.com
ENV SITE_URL=${SITE_URL}

COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .

# prebuild 会跑字体子集化 + 内容校验；字体重排需要 python3 + fonttools
RUN apk add --no-cache python3 py3-pip \
  && python3 -m venv /venv \
  && /venv/bin/pip install --no-cache-dir fonttools brotli \
  && PATH=/venv/bin:$PATH npm run build

# ---------- 运行阶段 ----------
FROM nginx:1.27-alpine AS runner

# 静态站点：只有 nginx，没有 Node 进程
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
