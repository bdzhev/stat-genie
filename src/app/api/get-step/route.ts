import { NextResponse } from "next/server";
import { supabase } from "@/lib/client";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("user_data")
    .select("curStep")
    .eq("id", id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: error?.message || "User not found" }, { status: 404 });
  }

  return NextResponse.json({ curStep: data.curStep }, { status: 200 });
}
