import Product from '../Product'

import '../ProductList/index.css'

function ProductList({products, handleClick}){
    return (
        <>
        <ul className='container-products'>
            {products.map(product => {
                return <Product img={product.img} name={product.name} category={product.category} price={product.price} id={product.id} key={product.id} handleClick={handleClick} />
            })}    
        </ul>

        
        </>
    )
}

export default ProductList