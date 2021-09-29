import react from 'react'
import './Products.css'
function Products() {
    let productarray=[
        {
            name:"product 1",
            price:"$10"
        },
        {
            name:"product 2",
            price:"$20"
        },
        {
            name:"product 3",
            price:"$30"
        },
        {
            name:"product 4",
            price:"$40"
        },
        {
            name:"product 5",
            price:"$50"
        }
    ]
    return(
        <div className="main-content">
            {
                 productarray.map((product,index)=>(
                    <div key={index} className="product-section">
                        <h2>{product.name}</h2>
                        <h4>{product.price}</h4>
                    </div>
                   
                ))
            }
           
            
        </div>
    )
    
}
export default Products