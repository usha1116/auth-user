import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/auth";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Both fields are required!");
            return;
        }
        try {
            const res = await axios.post("https://dummyjson.com/auth/login", {
                username: email,
                password,
            });
            loginUser(res.data.token, res.data);
            navigate("/");
        } catch (err) {
            setError("Invalid credentials!");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <input
                    type="text"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                    Login
                </button>
                <h4 className=" text-gray-900 flex justify-center mb-3 mt-2">Demo credentials</h4>
                <span className="text-sm font-bold">
                    <p className="">User name:  alexanderj </p>

                </span>
                <span className="text-sm font-bold">
                    password: alexanderjpass
                </span>

            </form>
        </div>
    );
}