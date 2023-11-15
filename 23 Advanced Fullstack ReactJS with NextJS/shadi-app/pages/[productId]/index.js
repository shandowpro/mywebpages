
// this inner pqage display the product's details data , by using the dynmaic router     
// this inner page will import the [ProductItem] component to use it in displaying the product data  
// using  [dynamic router] in this page depends on assinging dynamic router according to [product Id]     


import ProductDetails from "../../components/products/ProductDetails";
// import classes from '../../components/products/ProductDetails' ; 

function ProductDetailsPage() {
    
    return (
        <>
            <ProductDetails  
                image = "../../images/img1.jfif" 
                name = "product 1"
                price  = {20} 
                desc = "This is product 1"
            />    
        </>
    )




}

export default ProductDetailsPage ;

