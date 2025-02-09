"use client";
import { useState } from "react";
import { supabase } from "../../lib/client";
import { useRouter } from "next/navigation";
import { UserIcon, LockClosedIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const router = useRouter();
    
    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        if (!termsAccepted) {
            setError("You must accept the Terms & Conditions.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) {
            setError(error.message);
        } else {
            alert("Account created! Please check your email to verify.");
            router.push("/login");
        }
        setLoading(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-softBlue">
            <form 
                onSubmit={handleRegister} 
                className="bg-warmBeige p-6 rounded-2xl shadow-lg w-80 flex flex-col gap-4"
            >
                <h1 className="text-2xl font-semibold text-sandyBeach text-center">Register</h1>

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

                <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
                    <LockClosedIcon className="h-5 w-5 text-gray-500" />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        required
                        className="ml-2 w-full outline-none bg-transparent text-gray-700"
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>

                {error && <p className="text-red-500 text-sm">{error}</p>}

                <div className="flex items-center text-sm text-gray-600">
                    <input 
                        type="checkbox" 
                        className="mr-2" 
                        checked={termsAccepted}
                        onChange={() => setTermsAccepted(!termsAccepted)}
                    />
                    <p>I agree to the <a href="#" className="text-sandyBeach hover:text-turquoise">Terms & Conditions</a></p>
                </div>

                <button 
                    type="submit"
                    className="bg-softBlue text-sandyBeach rounded-lg shadow-md hover:bg-coastWave transition py-2"
                    disabled={loading}
                >
                    {loading ? "Registering..." : "Register"}
                </button>

                <p className="text-sm text-center text-gray-700">
                    Already have an account? <a href="/auth/login" className="text-sandyBeach hover:text-turquoise">Login</a>
                </p>
            </form>
        </div>
    );
}
