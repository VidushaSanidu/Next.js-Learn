import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <form className="w-full my-5">
        <div className="space-y-2 flex justify-center items-center flex-col">
          <input
            className="px-4 py-2 rounded text-black w-1/2"
            type="email"
            name="email"
            id="email"
            placeholder="email"
          />
          <input
            className="px-4 py-2 rounded text-black w-1/2"
            type="password"
            name="password"
            id="password"
            placeholder="password"
          />
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
