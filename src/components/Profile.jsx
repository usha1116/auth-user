    import { useEffect, useState } from "react";
    import { getUser } from "../utils/auth";

    export default function Profile() {
    const [profile, setProfile] = useState(null);
    const user = getUser(); // from localStorage (we get the id)

    useEffect(() => {
        if (user?.id) {
        fetch(`https://dummyjson.com/users/${user.id}`)
            .then((res) => res.json())
            .then((data) => setProfile(data));
        }
    }, [user]);

    if (!profile) return <div className="p-6">Loading profile...</div>;

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">
            <img
            src={profile.image || "https://i.pravatar.cc/150"}
            alt="profile"
            className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-md mx-auto"
            />
            <h1 className="text-2xl font-bold text-gray-800 mt-4">
            {profile.firstName} {profile.lastName}
            </h1>
            <p className="text-gray-500">@{profile.username}</p>
            <p className="text-sm text-gray-600 mt-2">{profile.email}</p>
            <p className="text-sm text-gray-600 mt-2">
            {profile.address?.address}, {profile.address?.city}
            </p>
        </div>
        </div>
    );
    }
