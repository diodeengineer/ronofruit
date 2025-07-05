

import { NextResponse } from "next/server";
import { Client } from "@gradio/client";

export async function POST(req) {
  const { message } = await req.json();

  const client = await Client.connect("siliconengineer/fruitbot");
  const result = await client.predict("/chat", {
    message,
  });

  return NextResponse.json({ reply: result.data });
}
