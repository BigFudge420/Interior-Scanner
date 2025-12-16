import { useState } from "react";
import type { Scan } from "@/types/Scan";

export function useScans() {
  const [scans, setScans] = useState<Scan[]>(() => {
    try {
      const stored = localStorage.getItem("scans");
      if (stored) {
        return JSON.parse(stored) as Scan[];
      }
      else {
        return []
      }
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
