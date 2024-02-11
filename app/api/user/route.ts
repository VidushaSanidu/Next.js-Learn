import prisma from "@lib/prisma/prisma";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { loginSchema } from "@lib/zod/types";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, password } = loginSchema.parse(body);
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
        emailVerified: false,
      },
    });

    const sendData = {
      email: newUser.email,
      name: newUser.name,
    };

    return NextResponse.json(
      {
        user: sendData,
        message: "user created successfuly",
      },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        user: null,
        message: "something went wrong",
        type: error,
      },
      { status: 405 }
    );
  }
}
