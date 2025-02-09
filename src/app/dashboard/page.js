"use client";
import { useState } from "react";

export default function Dashboard() {
    const [foodLog, setFoodLog] = useState({ breakfast: "", lunch: "", dinner: "", snack: "", water: "" });
    const [selectedMood, setSelectedMood] = useState(null);

    const moods = ["😀 Happy", "😐 Neutral", "😞 Sad", "😤 Stressed", "😴 Tired"];

    const handleFoodLogChange = (meal, value) => {
        setFoodLog({ ...foodLog, [meal]: value });
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-softBlue text-center p-6">
            <h1 className="text-3xl font-bold text-sandyBeach mb-6">Dashboard</h1>

            <div className="bg-warmBeige p-6 rounded-xl shadow-lg w-full max-w-md">
                <h2 className="text-xl font-semibold text-sandyBeach mb-4">Log Your Food & Water</h2>
                {["breakfast", "lunch", "dinner", "snack", "water"].map((meal) => (
                    <div key={meal} className="mb-3">
                        <label className="block text-gray-700 capitalize">{meal}</label>
                        <input
                            type="text"
                            placeholder={`Enter your ${meal}`}
                            value={foodLog[meal]}
                            onChange={(e) => handleFoodLogChange(meal, e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded-lg outline-none"
                        />
                    </div>
                ))}
            </div>

            <div className="bg-warmBeige p-6 rounded-xl shadow-lg w-full max-w-md mt-6">
                <h2 className="text-xl font-semibold text-sandyBeach mb-4">How Are You Feeling?</h2>
                <div className="flex flex-wrap justify-center gap-3">
                    {moods.map((mood) => (
                        <button
                            key={mood}
                            className={`px-4 py-2 rounded-lg shadow-md text-softBlue ${selectedMood === mood ? "bg-coastWave" : "bg-sandyBeach hover:bg-turquoise"} transition`}
                            onClick={() => setSelectedMood(mood)}
                        >
                            {mood}
                        </button>
                    ))}
                </div>
            </div>

            <button className="mt-6 bg-red-500 text-white px-6 py-2 rounded-xl shadow-md hover:bg-red-600 transition">
                Logout
            </button>
        </div>
    );
}
