import { useScans } from "@/hooks/useScans";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { House, Camera } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { scans } = useScans();
  const nav = useNavigate()

  return (
    <div className="relative">
      {scans.length > 0 && 
      <div className="m-3">
      <h2 className="text-4xl my-4 font-semibold">Your snaps,</h2>
      <div className="my-4 grid grid-cols-1 gap-4 items-start sm:grid-cols-2 lg:grid-cols-3">
        {scans.map((scan) => (
          <Card key={scan.id} className="p-0 overflow-hidden">
            <CardContent className="p-0">
              <img
                src={scan.imageURL}
                alt="Room scan"
                className="block w-full h-auto"
              />
            </CardContent>
          </Card>
        ))}
      </div>
        <ButtonGroup className="fixed left-6/12 bottom-6 -translate-x-1/2 z-50">
            <Button size={"icon"} variant={"outline"} className="h-14 w-14" onClick={() => nav('/')}>
                <House />
            </Button>
            <Button size="icon" variant={"outline"} className="h-14 w-14" onClick={() => nav('/scanner')}>
                <Camera />
            </Button>
        </ButtonGroup>
      </div>
      }
      {scans.length === 0 && 
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-semibold">Oops! Looks like you don't have any snaps saved.</h1>
      </div>
      }
    </div>
  );
}
