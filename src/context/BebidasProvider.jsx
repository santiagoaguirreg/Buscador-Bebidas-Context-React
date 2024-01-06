import { useState, useEffect, createContext } from 'react'
import axios from 'axios'

const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    const [bebidas, setBebidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta ] = useState({})

    useEffect(()=> {
        const obtenerReceta = async () => {
           if(!bebidaId) return

           try {
             const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

             const {data} = await axios(url)

             setReceta(data.drinks[0])
           } catch (error) {
             console.log(error)
           }
        }
        obtenerReceta()
    }, [bebidaId])


    const consultarBebida = async datos => {
      try {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`

        const data = await fetch(url);
        const resultado = await data.json()

         setBebidas(resultado.drinks)
      } catch (error) {
        console.log(error)
      }
    }

    const ModalShow = () => {
      setModal(!modal)
    }

    const handleBebidaIdClick = id => {
      setBebidaId(id)
    }

    return (
        <BebidasContext.Provider
          value={{
            consultarBebida,
            bebidas,
            ModalShow,
            modal,
            handleBebidaIdClick,
            receta,
            setReceta
          }}
        >
          {children}
        </BebidasContext.Provider>
    )
}

export {
    BebidasProvider
}

export default BebidasContext