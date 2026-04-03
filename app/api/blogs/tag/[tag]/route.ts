import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const { tag } = await params;
  const { searchParams } = req.nextUrl;
  const page = searchParams.get("page") || "0";
  const numberOfEntries = searchParams.get("numberOfEntries") || "9";

  const backendUrl = `https://mw-cms-api.hefanex.com/api/public/blogs/tag/${tag}?page=${page}&numberOfEntries=${numberOfEntries}&domain=axalingroup.com`;

  try {
    const backendRes = await fetch(backendUrl, {
      method: "GET",
      headers: {
        "X-API-KEY": process.env.CMS_API_KEY || "",
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    const data = await backendRes.json();
    return NextResponse.json(data, { status: backendRes.status });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch blog posts" },
      { status: 500 },
    );
  }
}
