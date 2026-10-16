import { useState } from "react"
import "./search.css"
export function Search(){
    const [bloque,setBloque] = useState(1)
    const [esclera,setEscalera] = useState(1)
    const [piso,setPiso] = useState(1)
    const [letra,setLetra] = useState("A")
    const [user,setUser] = useState([])
    const [isSearch,setIsSearch] = useState(false)

    const handleBloque = (event) => {
        console.log("Bloque cambiado",event.target.value);
        setBloque(event.target.value);
    }
    const handleEscalera = (event) =>{
        console.log("Escalera cambiado",event.target.value);
        setEscalera(event.target.value);
    }
    const handlePiso = (event) =>{
        console.log("Piso cambiado",event.target.value);
        setPiso(event.target.value);
    }
    const handleLetra = (event) =>{
        console.log("Escalera cambiado",event.target.value);
        setLetra(event.target.value);
    }

    const searchPropetary = (bloque,escalera,piso,letra) =>{
        console.log("Boton Pulsado")
        console.log()
        fetch("./data.json")
        .then(response => response.json())
        .then(data => {
            const propertySearch = data.filter(property => 
                property.bloque == bloque && 
                property.escalera == escalera &&
                property.piso == piso && 
                property.letra == letra.toUpperCase()
            )
            console.log(propertySearch)
            if(!propertySearch.length){
                setIsSearch(false)
                console.log("No se encontro a nadie")
            }else{
                console.log("Se encontro user")
                setIsSearch(true)
                setUser(propertySearch)
            }
        }
                        
        )
        
    }
            

    return(
        <main className="search-page">
            <section className="search-card">
                <div className="search-form">
                    <h1>Busqueda de Piso</h1>

                    <label htmlFor="bloque">Bloque</label>
                    <input id="bloque" type="text" value={bloque} onChange={handleBloque} className="bloque" />

                    <label htmlFor="escalera">Escalera</label>
                    <input id="escalera" type="text" value={esclera} onChange={handleEscalera} className="escalera" />

                    <label htmlFor="piso">Piso</label>
                    <input id="piso" type="text" value={piso} onChange={handlePiso} className="piso" />

                    <label htmlFor="letra">Letra</label>
                    <input id="letra" type="text" value={letra} onChange={handleLetra} className="word" />

                    <button onClick={() => searchPropetary(bloque,esclera,piso,letra)} className="button-search">Buscar</button>
                </div>

                <div className="content">
                    {!isSearch && <h2>No se encontro ese piso</h2>}
                    {isSearch && <div>
                        
                        <ul>
                            {user.map(usuario =>(
                                <li key={usuario.id}>
                                    <p>{usuario.nombre}-{usuario.apellido}</p>
                                    <img src={usuario.foto} alt="" />
                                </li>
                            ))}
                        </ul>
                    </div>}
                </div>
            </section>
        </main>
    )
}