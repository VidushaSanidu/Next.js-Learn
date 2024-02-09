import prisma from "@lib/prisma/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";

export default async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;
    const hashedPassword = await hash(password, 10);

    // checking email is already exists
    const existUser = await prisma.user.findUnique({
      where: { email: email },
    });
    if (existUser) {
      return NextResponse.json(
        {
          user: null,
          message: "user already exists",
        },
        { status: 409 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(body);
  } catch (error) {}
}
