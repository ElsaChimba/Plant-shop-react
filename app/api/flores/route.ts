import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://perenual.com/api/v2/species-list?key=Ysk-7Kzw68a20821b7dce11880&q=flower",
    {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept": "application/json"
      }
    }
  );
  const data = await res.json();
  return NextResponse.json(Array.isArray(data?.data) ? data.data : []);
}
