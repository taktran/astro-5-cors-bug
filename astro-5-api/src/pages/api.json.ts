export async function GET({ params, request }) {
  return new Response(
    JSON.stringify({
      version: "astro 5",
      environment: import.meta.env.MODE
    })
  );
}
