"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { TRegisterSchema, registerSchema } from "@lib/zod/types";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<TRegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: TRegisterSchema) => {
    const router = useRouter();
    const response = await fetch("api/user", {
      method: "POST",
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    });

    if (response.ok) {
      router.push("/login");
    } else {
      console.log("registration failed");
    }
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center py-5">
          <div>
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
              className="p-2 mt-3 bg-blue-200 rounded text-sky-800 disabled:bg-gray-500"
              disabled={isSubmitting}
              type="submit"
            >
              Register
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
