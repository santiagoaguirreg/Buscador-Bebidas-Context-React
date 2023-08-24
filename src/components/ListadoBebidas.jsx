import {Row} from 'react-bootstrap'
import useBebidas from "../hooks/useBebida"
import Bebida from './Bebida'

const ListadoBebidas = () => {

    const {bebidas} = useBebidas()
  return (
    <Row className='mt-5 mb-4'>
        {bebidas.map(bebida => (
            <Bebida 
               key={bebida.idDrink}
               bebida={bebida}
            />
        ))}
    </Row>
  )
}

export default ListadoBebidas