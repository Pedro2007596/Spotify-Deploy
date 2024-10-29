import { useEffect, useState } from "react";
import Card from "./components/Card"
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Container from "./components/Container";
import SliderCards from "./components/SliderCards";
import ConteudoPrincipal from "./pages/ConteudoPrincipal";
function App() {
 const [artistas, setArtistas] = useState([]);
 //Consumo da api criada no servidor e após os dados serem trazidos,
 //são guardados no estado artistas
 useEffect(() => {
 fetch('http://localhost:3000/artistas').then(res => res.json())
 .then(data => setArtistas(data))
 .catch(err => console.log(err))
 },[])
 return (
 <>
 <Header/>
 <Container>
 <Sidebar/>
 <ConteudoPrincipal>
 <SliderCards titulo="Rock">
 {/*Os dados guardados estão sendo filtrados, ordenados em ordem
 alfabética, cortados somente com os 5 primeiros e mapeados*/}
 {artistas
 .filter( genero => genero.genres.includes("Rock"))
 .sort((a, b) => a.name.localeCompare(b.name))
 .slice(0,5)
 .map(artista => (
 <Card key={artista._id} {...artista}/>
 ))}
 </SliderCards>
 <SliderCards titulo="Pop">
 {artistas
 .filter( genero => genero.genres.includes("Pop" || "Rap"))
 .sort((a, b) => a.name.localeCompare(b.name))
 .slice(0,5)
 .map(artista => (
 <Card key={artista._id} {...artista}/>
 ))}
 </SliderCards>
 </ConteudoPrincipal>
 </Container>
 </>
 )
}
export default App