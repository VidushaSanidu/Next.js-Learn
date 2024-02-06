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
        <div className="">
          <h1 className="text-center m-5 text-lg">Registration</h1>
          <div className="flex gap-y-2 flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="px-4 py-2 rounded text-black"
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
            />
            <label htmlFor="password">Password</label>
            <input
              className="px-4 py-2 rounded text-black"
              type="password"
              name="password"
              id="password"
            />
            <label htmlFor="c-password">Confirm Password</label>
            <input
              className="px-4 py-2 rounded text-black"
              type="password"
              name="c-password"
              id="c-password"
            />
          </div>
          <button
            className="p-2 mt-3 bg-blue-200 rounded text-sky-800"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </section>
  );
}
