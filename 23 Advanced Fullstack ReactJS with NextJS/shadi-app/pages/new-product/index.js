// This the page of adding new product => [dmainName/new-product]
// This inner page  will include tbhe component  of [NewProductFrom]
// This functional component has [props] inside it to be passed through to this page component , but we use it later when study the DB 

import NewProductFrom from '../../components/products/NewProductForm';

function NewProductPage() {
 
    return (
        <>
           < NewProductFrom  />  
        </>
    ) ;
          
}


export default NewProductPage  ;  