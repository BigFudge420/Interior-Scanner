import { Button } from "../components/ui/button"
import { Checkbox } from "../components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff, Github, Mail } from "lucide-react"
import { useState } from "react"

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)

    return (
        <div className="bg-background min-h-screen flex justify-center items-center min-w-screen">
            <div className="bg-background rounded-2xl shadow-lg shadow-muted-foreground p-8 space-y-6 w-full max-w-md">
                <div className="text-center space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter">Welcome Back!</h2>
                    <p className="text-muted-foreground">Enter your credentials to access your account</p>
                </div>
                <form className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="hello@example.com"
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <div className="flex gap-2">
                            <Input
                            id="password"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <button 
                            id="eye"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className=" text-muted-foreground hover:text-foreground"
                            >
                                {showPassword ? <EyeOff size={20}/> : <Eye size={20}/>}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Checkbox id="remember"/>
                            <Label htmlFor="remember">Remember me</Label>
                        </div>
                        <a href="#" className="text-sm text-primary hover:text-black">
                            Forgot password?
                        </a>
                    </div>
                    <Button className="w-full p-2">
                        Sign In
                    </Button>
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t"/>
                        </div>
                        <div className="relative flex justify-center items-center text-sm uppercase">
                            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Button variant='outline' className="w-full">
                            <Github className="mr-2 h-4 w-4"/>
                            Github
                        </Button>
                        <Button variant='outline' className="w-full">
                            <Mail className="mr-2 h-4 w-4"/>
                            Google
                        </Button>
                    </div>
                    <div className="text-center text-sm">
                        Don't have an account?{" "}
                        <a
                        href="#" 
                        className="text-primary hover:text-black font-medium">
                            Sign Up!
                        </a>
                    </div>
                </form>
            </div>
        </div>
    )
}