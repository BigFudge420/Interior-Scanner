import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

export default function Home() {
    const nav = useNavigate()

    const handleStart = () => {
        const isLoggedIn = true
        nav(isLoggedIn ? '/dashboard' : '/login')
    }       

    return (
        <div className="min-h-screen w-screen bg-background text-foreground flex flex-col">
            <header className="flex items-center justify-between  px-6 py-6 mx-auto w-full relative">
                <h1 className="text-3xl font-semibold tracking-tight">
                    AuraNest
                </h1>
                <Button onClick={() => nav('/login')} className="text-md text-background hover:text-foreground transition">
                    Login
                </Button>
            </header>
            <main className="flex-1 flex items-center justify-center px-6">
                <div className="max-w-3xl text-center space-y-6">
                    <h2 className="text-5xl text-bold leading-tight">
                        Design your space,
                        <br />
                        <span>visually & effortlessly</span>
                    </h2>
                     <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
                        AuraNest lets you create, customize, and preview interior designs
                        in 3D — from room layout to furniture, lighting, and décor.
                    </p>
                    <Button onClick={handleStart} className="inline-flex items-center justify-center px-4 py-6 font-medium hover:opacity-90 transition shadow-lg" >
                        Start Designing
                    </Button>
                </div>
            </main>
             <footer className="py-4 text-center text-md text-muted-foreground">
              © {new Date().getFullYear()} AuraNest. All rights reserved.
            </footer>
        </div>
    )
}