import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const backendRes = await fetch(
      "https://mw-crm-api.hefanex.com/api/public/contact/create?domain=axalingroup.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": process.env.CRM_API_KEY as string,
        },
        body: JSON.stringify(body),
      }
    );

    const data = await backendRes.json();

    return new NextResponse(JSON.stringify(data), {
      status: backendRes.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ message: "Error sending message" }),
      {
        status: 500,
      }
    );
  }
}
