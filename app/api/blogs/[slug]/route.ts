import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: any) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `https://mw-cms-api.hefanex.com/api/public/blogs/${slug}?domain=axalingroup.com`,
      {
        method: "GET",
        headers: {
          "X-API-KEY": process.env.CMS_API_KEY || "",
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch blog post" },
      { status: 500 },
    );
  }
}
