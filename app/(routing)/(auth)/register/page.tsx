"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "@lib/zod/types";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.currentTarget);
  //   const response = await fetch("api/auth/register", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       email: formData.get("email"),
  //       password: formData.get("password"),
  //     }),
  //   });
  //   console.log(response);
  // };

  const onSubmit = async (data: TRegisterSchema) => {};

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="">
          <h1 className="text-center m-5 text-lg">Registration</h1>
          <div className="flex gap-y-2 flex-col">
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              className="px-4 py-2 rounded text-black"
              type="email"
              name="email"
              id="email"
              placeholder="abc@gmail.com"
            />
            {errors.email && (
              <p className="text-red-500">{`${errors.email.message}`}</p>
            )}
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              className="px-4 py-2 rounded text-black"
              type="password"
              name="password"
              id="password"
            />
            {errors.password && (
              <p className="text-red-500">{`${errors.password.message}`}</p>
            )}
            <label htmlFor="c-password">Confirm Password</label>
            <input
              {...register("confirmPassword")}
              className="px-4 py-2 rounded text-black"
              type="password"
              name="c-password"
              id="c-password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{`${errors.confirmPassword.message}`}</p>
            )}
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
