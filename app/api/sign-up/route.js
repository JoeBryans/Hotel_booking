import db from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
export async function POST(req, res) {
  try {
    const body = await req.json();
    const { name, password, email, phone } = body;
    const existEmail = await db.User.findUnique({
      where: {
        email: email,
      },
    });
    if (existEmail) {
      return NextResponse.json(
        { message: "Email already exist" },
        { status: 400 }
      );
    }
    const hash = await bcrypt.hash(password, 10);
    const user = await db.User.create({
      data: {
        name,
        email,
        password: hash,
        phone,
        // image: image,
        // accounts: {
        //   create: {
        //     provider: "google",
        //     providerAccountId: googleId,
        //     refresh_token: refreshToken,
        //     access_token: accessToken,
        //     expires_at: expiresAt,
        //     token_type: tokenType,
        //     scope: scope,
        //     id_token: idToken,
        //     session_state: sessionState,
        //     // user: {
        //     //   connect: {
        //     //     id: userId
        //     //   }
        //     // }
        //   },
        // },
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json(error);
  }
}
