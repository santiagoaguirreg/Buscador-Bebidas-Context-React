import { Container } from "react-bootstrap"
import Formulario from "./components/Formulario"
import { CategoriasProvider } from "./context/CategoriasProvider"
import { BebidasProvider } from "./context/Bebidasprovider"
import ListadoBebidas from "./components/listadoBebidas"
import ModalBebida from "./components/ModalBebida"

function App() {

  return (
  <CategoriasProvider>
      <BebidasProvider>
          <header className="py-5">
            <h1>Buscador de bebidas</h1>
          </header>

          <Container className="mt-5">
            <Formulario />
            
            <ListadoBebidas />

            <ModalBebida />
          </Container>
      </BebidasProvider>
   </CategoriasProvider>
  )
}

export default App
