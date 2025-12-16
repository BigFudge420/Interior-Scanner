import { useState } from "react";
import type { Scan } from "@/types/Scan";
import testData from "@/data/testData";

export function useScans() {
  const [scans, setScans] = useState<Scan[]>(() => {
    try {
      const stored = localStorage.getItem("scans");
      if (stored) {
        return JSON.parse(stored) as Scan[];
      }

      localStorage.setItem("scans", JSON.stringify(testData));
      return testData;
    } catch (err) {
      console.error("Failed to read scans from localStorage", err);
      return [];
    }
  });

  const saveScan = (scan: Scan) => {
    setScans((prev) => {
      const updated = [scan, ...prev];
      localStorage.setItem("scans", JSON.stringify(updated));
      return updated;
    });
  };

  return { scans, saveScan };
}
