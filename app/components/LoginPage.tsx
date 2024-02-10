"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchema, loginSchema } from "@lib/zod/types";
import OneLogin from "next-auth/providers/onelogin";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: TLoginSchema) => {
    console.log(data);

    reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full my-5">
        <div className="space-y-2 flex justify-center items-center flex-col">
          <input
            {...register("email")}
            className="px-4 py-2 rounded text-black w-1/2"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          {errors.email && (
            <p className="text-red-500">{`${errors.email.message}`}</p>
          )}
          <input
            {...register("password")}
            className="px-4 py-2 rounded text-black w-1/2"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">{`${errors.password.message}`}</p>
          )}
        </div>
        <div className="flex justify-center">
          <button
            className="align-center mt-6 border p-0.5 rounded-md"
            type="submit"
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
}
