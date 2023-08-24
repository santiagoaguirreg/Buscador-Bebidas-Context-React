import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hooks/useBebida'

const ModalBebida = () => {

    const {modal, ModalShow, receta, setReceta } = useBebidas()



  const mostrarIngredientes = () => {

    let ingredientes = []
    for (var i = 1; i < 16; i++) {
        if( receta[`strIngredient${i}`]) {
          ingredientes.push(
            <li>{receta[`strIngredient${i}`]} {receta[`strMeasure${i}`]}</li>
          )  
        }
      }
     
       return ingredientes
      
  }

  return (
     <Modal show={modal} onHide={() => {
        ModalShow()
        
     }}>
      <Image 
      src={receta.strDrinkThumb}
      />

      <Modal.Header>
        <Modal.Title>{receta.strDrink}</Modal.Title>
      </Modal.Header>


        <Modal.Body>
            <div className='p-3'>
                <h2>Instrucciones</h2>
                <p>{receta.strInstructions}</p>
                <h2>Ingredientes y Cantidad</h2>
                {mostrarIngredientes()}
            </div>
        </Modal.Body>

     </Modal>
  )
}

export default ModalBebida