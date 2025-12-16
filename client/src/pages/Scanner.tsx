import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";
import { useScans } from "@/hooks/useScans";
import type { Scan } from "@/types/Scan";

export default function ScannerPage() {
  const [flash, setFlash] = useState(false)  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { saveScan } = useScans();

  // Start camera
  useEffect(() => {
    if (!navigator.mediaDevices?.getUserMedia) return;

    let stream: MediaStream;

    async function startCamera() {
      try {
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: "environment" } },
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Camera error:", err);
      }
    }

    startCamera();

    return () => {
      stream?.getTracks().forEach((t) => t.stop());
    };
  }, []);

  const captureScan = () => {
    const video = videoRef.current;
    if (!video) return;

    setFlash(true)
    setTimeout(() => setFlash(false), 150)

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageURL = canvas.toDataURL("image/png");

    const scan: Scan = {
      id: crypto.randomUUID(),
      imageURL,
      suggestions: [], // filled later by AI
      createdAt: new Date().toISOString(),
    };

    saveScan(scan);
  };

  return (
    <main className="mx-auto max-w-md p-4">g
        {flash && (
          <div className="fixed inset-0 z-50 bg-white animate-flash pointer-events-none" />
        )}
      <Card className="overflow-hidden p-0">
        <CardContent className="p-0">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="block w-full h-[70vh] object-cover bg-black"
          />
        </CardContent>
      </Card>

      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <Button
          size="lg"
          onClick={captureScan}
          className="h-14 w-14 rounded-full shadow-lg active:scale-95 transition"
        >
          <Camera className="h-6 w-6" />
        </Button>
      </div>
    </main>
  );
}
