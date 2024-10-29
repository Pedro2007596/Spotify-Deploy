import { useContext } from "react";
import { UserContext } from "../context/ContextoLogin";

export default function Sidebar() {
    const { isLogged } = useContext(UserContext);

    return (
        <aside className="bg-gray-900 rounded-lg w-3/12 flex justify-center items-center">
            {isLogged ? (
                <button className="bg-green-500 py-2 px-4 rounded-full text-white font-medium hover:scale-105 transition duration-200">
                    Criar Playlist
                </button>
            ) : (
                <p className="font-semibold text-center text-green-500">
                    Faça Login para criar playlists personalizadas!
                </p>
            )}
        </aside>
    );
}
