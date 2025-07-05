
import { NextResponse } from "next/server";


import { connectDB } from "@/app/lib/db";
import Email from "@/app/models/Email";

export async function POST(req) {
  const { email } = await req.json();

  if (!email || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    await connectDB(); // Make sure DB is connected
    const existing = await Email.findOne({ email });

    if (existing) {
      return NextResponse.json({ message: "Already subscribed" }, { status: 200 });
    }

    await Email.create({ email });
    return NextResponse.json({ message: "Subscribed successfully" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
