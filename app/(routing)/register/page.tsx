"use client";

import { FormEvent } from "react";

export default function RegisterPage() {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch("api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    console.log(response);
  };

  return (
    <section>
      <form
        onSubmit={() => {
          handleSubmit;
        }}
      >
        <div>
          <h1 className="text-center m-5">Registration</h1>
          <div className="flex justify-center flex-col mx-8">
            <label htmlFor="email">Email</label>
            <input
              className="my-3 text-black"
              type="email"
              name="email"
              id="email"
            />
            <label htmlFor="password">Password</label>
            <input
              className="my-3 text-black"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className="ml-8" type="submit">
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
