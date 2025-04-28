"use client"

import Link from "next/link";

export default function Home() {
    return (
      <div className="flex flex-col items-start">
        <nav>
            <Link href={"/auth/sign-in"}>Login</Link>
        </nav>
      </div>
    );
}
