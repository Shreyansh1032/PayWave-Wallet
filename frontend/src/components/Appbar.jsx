import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Appbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await axios.post('http://localhost:3000/api/v1/user/logout', {}, {
                withCredentials: true
            });
        } catch (error) {
            console.error('Logout error:', error);
        }
        localStorage.removeItem('token');
        navigate("/signin");
    };

    return (
        <div className="shadow h-14 flex justify-between">
            <div className="flex flex-col justify-center h-full ml-4">
                PayTM App
            </div>
            <div className="flex items-center gap-2 mr-2">
                <div className="flex flex-col justify-center h-full mr-2">
                    Hello
                </div>
                <button
                    onClick={handleLogout}
                    className="px-3 py-1 bg-red-500 text-white text-sm rounded-md hover:bg-red-600 transition-colors"
                >
                    Logout
                </button>
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1">
                    <div className="flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                </div>
            </div>
        </div>
    );
};