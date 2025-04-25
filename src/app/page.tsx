"use client"

import { sum_number } from "@packages/shared";
import { useState } from "react";


export default function Home() {
    const [number, setNumber] = useState<number>(0);

    const onSumNumber = () => {
        setNumber(sum_number(number, 20))
    }

    return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1>{number}</h1>
        <button onClick={() => setNumber(prev => prev + 1)}>Increment</button>
        <button onClick={onSumNumber}>Sum</button>
      </div>
    );
}
