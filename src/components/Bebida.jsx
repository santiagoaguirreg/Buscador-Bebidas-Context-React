import {Col, Card, Button } from 'react-bootstrap'
import useBebidas from '../hooks/useBebida'

const Bebida = ({bebida}) => {

const {ModalShow, handleBebidaIdClick} = useBebidas()

  return (
    <Col md={6} lg={3}>
       <Card className='mb-2 mt-5'>
          <Card.Img 
          variant='top'
          src={bebida.strDrinkThumb}
          />
       </Card>
       
       <Card.Body>
        <Card.Title>{bebida.strDrink}</Card.Title>

        <Button onClick={() =>  {
            
            ModalShow()
            handleBebidaIdClick(bebida.idDrink)
        }} variant={'warning'} className='w-100 text-uppercase mt-2'>
            Ver Receta
        </Button>
       </Card.Body>

    </Col>
  )
}

export default Bebida