"use client";
import Link from "next/link";

export default function Home() {
    return (
        <div className="flex flex-col justify-center items-center min-h-screen bg-softBlue text-center p-6">
            <h1 className="text-4xl font-bold text-sandyBeach mb-4">Welcome to Equilibrium</h1>
            <p className="text-lg text-gray-200 max-w-md">
                Your personal AI-powered companion for fitness and mental well-being. 
                Track your progress, get mindful insights, and stay motivated.
            </p>

            <div className="mt-8 flex gap-4">
                <Link href="/auth/login">
                    <button className="bg-warmBeige text-sandyBeach px-6 py-2 rounded-xl shadow-md hover:bg-coastWave transition">
                        Login
                    </button>
                </Link>
                <Link href="/auth/register">
                    <button className="bg-warmBeige text-sandyBeach px-6 py-2 rounded-xl shadow-md hover:bg-coastWave transition">
                        Register
                    </button>
                </Link>
            </div>
        </div>
    );
}
