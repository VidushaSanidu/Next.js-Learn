import Link from "next/link";

export default function Home() {
  return (
    <section className="h-dvh text-center mt-10 text-lg">
      <h1>Demo Application built using Next.js App Router</h1>
      <div>
        <ul className="gap-5 mt-10 flex flex-col">
          <li>
            <Link href="/counter">Counter</Link>
            <p className="text-sm">(redux store demonstration)</p>
          </li>
          <li>
            <Link href="/login">Login </Link>/
            <Link href="/register"> Register</Link>
            <p className="text-sm">(using nextAuth and zod)</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
