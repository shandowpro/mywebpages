
// a single row element of the  item data insde the table      :


import React from 'react' ;
import Cell from './Cell' ; 

const Row = ({item}) => {
  return (
    <tr>
      {
        // Mapping through the item as an object , by destructuring it as a key and value :
        Object.entries(item).map( ([key, value]) =>    {
          return (
            <Cell key ={key}  cellData = {JSON.stringify(value)}   />            
          ) 
        }
      )}
    </tr>
  )
}

export default Row ; 


