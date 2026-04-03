import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const page = searchParams.get("page") || "0";
  const numberOfEntries = searchParams.get("numberOfEntries") || "9";

  try {
    const backendUrl = `https://mw-cms-api.hefanex.com/api/public/blogs/all?page=${page}&numberOfEntries=${numberOfEntries}&domain=axalingroup.com`;
    const backendRes = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": process.env.CMS_API_KEY || "",
      },
      cache: "no-store",
    });

    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (err) {
    return NextResponse.json({ error: "Proxy failed" }, { status: 500 });
  }
}
