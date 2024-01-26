import Link from "next/link";

export default function Home() {
  return (
    <section className="h-dvh text-center mt-10 text-lg">
      <h1>Welcome to Demo Application built using Nextjs App Router</h1>
      <div>
        <ul className="gap-5 mt-10 flex flex-col">
          <li>
            <Link href="/counter">Counter</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href="#">To-Do</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
