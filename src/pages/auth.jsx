import { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importar useDispatch para manejar las acciones
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Github } from "lucide-react";
import { register, login } from '@/redux/auth/Action'; 


export default function Auth() {
    const [isLogin, setIsLogin] = useState(true);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
  

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isLogin) {
            dispatch(login({ username, password }));
            console.log('Login attempt with:', { username, password });
        } else {
            if (password === confirmPassword) {
                dispatch(register({ username, email, password }));
                console.log('Register attempt with:', { username, email, password, confirmPassword });
     
            } else {
                console.log('Passwords do not match');
            }
        }
    };

    const toggleAuth = () => {
        setIsLogin(!isLogin);
        setUsername('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#FFF5EE] font-['Oswald',sans-serif] p-4">
            <Card className="w-full max-w-4xl bg-white border-[#FFE4E1] shadow-lg">
                <CardHeader>
                    <CardTitle className="text-3xl font-bold text-center text-[#8B4513]">
                        {isLogin ? 'Login' : 'Register'}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="flex-1">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <label htmlFor="username" className="text-sm font-medium text-[#A0522D]">
                                        Username
                                    </label>
                                    <Input
                                        id="username"
                                        type="text"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="bg-[#FFF0F5] border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C]"
                                        required
                                    />
                                </div>
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-medium text-[#A0522D]">
                                            Email
                                        </label>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="bg-[#FFF0F5] border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C]"
                                            required
                                        />
                                    </div>
                                )}
                                <div className="space-y-2">
                                    <label htmlFor="password" className="text-sm font-medium text-[#A0522D]">
                                        Password
                                    </label>
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="bg-[#FFF0F5] border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C]"
                                        required
                                    />
                                </div>
                                {!isLogin && (
                                    <div className="space-y-2">
                                        <label htmlFor="confirmPassword" className="text-sm font-medium text-[#A0522D]">
                                            Confirm Password
                                        </label>
                                        <Input
                                            id="confirmPassword"
                                            type="password"
                                            placeholder="Confirm your password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            className="bg-[#FFF0F5] border-[#FFE4E1] text-[#8B4513] placeholder-[#D2B48C]"
                                            required
                                        />
                                    </div>
                                )}
                                <Button
                                    type="submit"
                                    className="w-full bg-[#FFB6C1] text-[#8B4513] hover:bg-[#FFC0CB]"
                                >
                                    {isLogin ? 'Log In' : 'Register'}
                                </Button>
                            </form>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="text-center mb-4">
                                <span className="text-[#A0522D]">Or {isLogin ? 'login' : 'register'} with</span>
                            </div>
                            <Button
                                variant="outline"
                                className="w-full bg-white border-[#FFE4E1] text-[#8B4513] hover:bg-[#FFF0F5]"
                            >
                                <Github className="w-5 h-5 mr-2" />
                                GitHub
                            </Button>
                            <div className="mt-6 text-center">
                                <p className="text-[#A0522D]">
                                    {isLogin ? "Don't have an account?" : "Already have an account?"}
                                    {' '}
                                    <Button
                                        variant="link"
                                        className="p-0 text-[#8B4513] hover:text-[#A0522D]"
                                        onClick={toggleAuth}
                                    >
                                        {isLogin ? 'Register here' : 'Login here'}
                                    </Button>
                                </p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
