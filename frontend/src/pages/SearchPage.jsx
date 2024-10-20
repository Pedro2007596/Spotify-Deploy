import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SliderCards from "../components/SliderCards"
import Card from "../components/Card"

export default function SearchPage() {

    const { search } = useParams()
    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        fetch(`https://spotify-deploy-api.vercel.app/search/${search}`)
        .then(response => response.json())
        .then(data => setSearchResults(data))
        .catch(error => console.log(error))
    }, [search])

    return (
         <div className="bg-gray-900 rounded-lg w-8/12 p-8">
            <SliderCards titulo="Resultados da busca">
            {
                searchResults.map( resultado => (
                    <Card key={resultado._id} {...resultado}/>
                ))
            }
            </SliderCards>
        </div>
    )
}