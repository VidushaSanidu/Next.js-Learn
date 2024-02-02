import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // validate email and password
    // TO-DO use zod or like library
  } catch (error) {
    console.log(error);
  }

  return NextResponse;
}
