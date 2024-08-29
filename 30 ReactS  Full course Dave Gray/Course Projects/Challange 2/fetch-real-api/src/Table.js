
// Table reusable component  [of in-depth data displayer ]  :


import React from 'react' ;
import Row from './Row.js' ;


const Table = ({ items }) => {
  return (
    <div className='table-container' >
      <table>
        <tbody>
          {items.map((item) =>

            <Row key={item.id} item={item} />
          )}

        </tbody>

      </table>




    </div>
  )
}

export default Table
