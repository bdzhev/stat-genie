import { NextResponse } from "next/server";
import { supabase } from "@/lib/client";

export async function POST() {
  const { data, error } = await supabase
    .from("user_data")
    .insert([{ source: 1 }])
    .select("id")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ id: data.id }, { status: 201 });
}
