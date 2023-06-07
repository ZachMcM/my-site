import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")
  const res = await fetch(`https://my-site-cms-production-bc2e.up.railway.app/api/projects/${id}?populate=*`)
  const projects = await res.json()
  return NextResponse.json({projects})
}