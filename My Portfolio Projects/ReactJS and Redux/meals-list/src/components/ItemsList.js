// This is the  funciaonal component of the [card] , which is repersent the meal item :  

import React from 'react'
import {Col ,Row , Card} from 'react-bootstrap'

const ItemsList = ({stateData}) => {
  return (
    <Row > 
     
        { 
            stateData.length >= 1 ? ( stateData.map((item) => {
            return (
                <Col key={item.id} sm="12" className="mb-3">
                    <Card className='d-flex flex-row' style={{ backgorundColor: '#f8f8f8'}}  >
                        <Card.Img className="img-item" style={{  width:'252px'}}  Variant='top' src={item.img}  />
                        
                        <Card.Body>
                        
                            <Card.Title className="d-flex  justify-content-between " >
                                <div className="item-title"> {item.name}   </div> 
                                <div className="item-price">  {item.price}  </div> 
                            </Card.Title>  
                        
                            <Card.Text className='py-2'>
                            <div className="item-description"> {item.description} </div>
                            </Card.Text>
                        
                        </Card.Body>
                        
                    </Card>    
                
                </Col>    
            )})) :<h2>  لا يوجد اصناف بهذا الاسم </h2> 
         }
    </Row>
  )
}



export default ItemsList ; 