// This is the  funciaonal component of the [card] , which is repersent the meal item :  

import React from 'react'
import {Col ,Row , Card  } from 'react-bootstrap'

const ItemsList = () => {
  return (
    <Row > 
        <Col sm="12" className="mb-3">
            <Card className='d-flex flex-row' style={{ backgorundColor: '#f8f8f8'}}  >
                <Card.Img className="img-item" style={{  width:'252px'}}  Variant='top' src='p1.jpg'  />
                
                <Card.Body>
                
                    <Card.Title className="d-flex  justify-content-between " >
                        <div className="item-title" > وجبة الافطار   </div> 
                        <div className="item-price">  50 جنيه  </div> 
                    </Card.Title>  
                
                    <Card.Text className='py-2'>
                        <div className="item-description">   وجبة الافطار وجبة الافطار وجبة الافطار وجبة الافطار وجبة الافطار    وجبة الافطار وجبة الافطار وجبة الافطار وجبة الافطار وجبة الافطار </div>
                    </Card.Text>
                 
                </Card.Body>
                 
            </Card>    
         
        </Col>    
    </Row>
  )
}



export default ItemsList ; 