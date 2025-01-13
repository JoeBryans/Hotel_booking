import db from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const hotel = await db.Hotel.create({
      data: {
        name: body.name,
        location: body.location,
      },
    });
    console.log(hotel);
    return NextResponse.json(hotel);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
