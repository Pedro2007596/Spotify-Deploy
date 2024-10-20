import { useContext } from "react";
import { UserContext } from "../context/ContextoLogin"

export default function Sidebar() {

    const { isLogged } = useContext(UserContext);

    return(
        <aside className="bg-gray-900 rounded-lg w-3/12 flex flex-col justify-around items-center">
          {isLogged && <button className="bg-white py-2 px-4 rounded-full text-gray-900 font-medium hover:scale-105 transition duration-200">Criar Playlist</button> }
        </aside>
    )
}