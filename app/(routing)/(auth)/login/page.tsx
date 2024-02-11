import LoginButton from "@app/components/LoginPage";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="h-full">
      <h1 className="mt-6 text-center font-cal text-3xl dark:text-white">
        Welcome back! please login here
      </h1>
      <LoginButton />
      <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
        or
      </div>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don&apos;t have an account, please&nbsp;
        <Link className="text-blue-500 hover:underline" href="/register">
          Sign up
        </Link>
      </p>
    </div>
  );
}
