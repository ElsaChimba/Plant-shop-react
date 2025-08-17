import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://perenual.com/api/v2/species-list?key=sk-7Kzw68a20821b7dce11880&q=flower"
  );
  const data = await res.json();
  return NextResponse.json(Array.isArray(data?.data) ? data.data : []);
}

export async function fetchPlantas() {
  const res = await fetch(
    "https://perenual.com/api/v2/species-list?key=sk-7Kzw68a20821b7dce11880&q=plant"
  );
  const data = await res.json();
  return NextResponse.json(Array.isArray(data?.data) ? data.data : []);
}

