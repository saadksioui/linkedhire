export async function GET(req: Request) {
  try {
    const res = await fetch("https://www.arbeitnow.com/api/job-board-api");

    if (!res.ok) {
      throw new Error(`Failed to fetch jobs: ${res.status}`);
    }

    const data = await res.json();
    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: (error as Error).message }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
