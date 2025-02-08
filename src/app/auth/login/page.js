"use client";
import { useState } from "react";
import { supabase } from "../../lib/client";
import { useRouter } from "next/navigation";
import { LockClosedIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        const { error } = await supabase.auth.signInWithPassword({ email, password });

        if (error) {
            setError(error.message);
        } else {
            router.push("/dashboard");
        }

        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-softBlue">
            <form 
                onSubmit={handleLogin} 
                className="bg-warmBeige p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
            >
                <h1 className="text-2xl font-semibold text-sandyBeach text-center">Login</h1>

                <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
                    <EnvelopeIcon className="h-5 w-5 text-gray-500" />
                    <input
                        type="email"
                        placeholder="Email"
                        required
                        className="ml-2 w-full outline-none bg-transparent text-gray-700"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
                    <LockClosedIcon className="h-5 w-5 text-gray-500" />
                    <input
                        type="password"
                        placeholder="Password"
                        required
                        className="ml-2 w-full outline-none bg-transparent text-gray-700"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex justify-between text-sm text-gray-600">
                    <label className="text-sandyBeach flex items-center gap-1">
                        <input type="checkbox" className="mr-1" /> Remember me
                    </label>
                    <a href="#" className="text-sandyBeach hover:text-turquoise">Forgot Password?</a>
                </div>

                <button 
                    type="submit"
                    className="bg-softBlue text-sandyBeach rounded-lg shadow-md hover:bg-coastWave transition py-2"
                    disabled={loading}
                >
                    {loading ? "Logging in..." : "Login"}
                </button>

                <p className="text-sm text-center text-gray-700">
                    Don't have an account? <a href="/auth/register" className="text-sandyBeach hover:text-turquoise">Register</a>
                </p>
            </form>
        </div>
    );
}
