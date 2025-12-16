import { useState } from "react";
import type { Scan } from "@/types/Scan";
import testData from "@/data/testData";

export function useScans() {
  const [scans, setScans] = useState<Scan[]>(() => {
    const stored = localStorage.getItem("scans");
    console.log(JSON.parse(localStorage.getItem('scans') || "[]"))
    if (stored) return JSON.parse(stored);


    localStorage.setItem("scans", JSON.stringify(testData));
    return testData;
  });

  return { scans, setScans };
}
