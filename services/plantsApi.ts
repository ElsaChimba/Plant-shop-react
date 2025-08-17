import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://trefle.io/api/v1/flower?token=n6ndIJXVarXHcn0RuTIigwI_Z5xTY1d2iiyML5cKoR8"
  );
  const data = await res.json();
  return NextResponse.json(Array.isArray(data?.data) ? data.data : []);
}

export async function fetchPlantas() {
  const res = await fetch(
    "https://trefle.io/api/v1/plants?token=n6ndIJXVarXHcn0RuTIigwI_Z5xTY1d2iiyML5cKoR8=plant"
  );
  const data = await res.json();
  return NextResponse.json(Array.isArray(data?.data) ? data.data : []);
}

