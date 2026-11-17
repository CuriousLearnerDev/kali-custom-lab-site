import type { APIRoute } from "astro";
import { getSearchIndex } from "@/lib/docs";

export const GET: APIRoute = async () => {
  const index = await getSearchIndex();
  return new Response(JSON.stringify(index), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
