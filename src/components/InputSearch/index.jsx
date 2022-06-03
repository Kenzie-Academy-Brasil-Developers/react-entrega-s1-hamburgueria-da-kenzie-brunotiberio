import '../InputSearch/index.css'
import { useState } from 'react'

function InputSearch({ products, setProducts }){ 
    
    const [filteredProducts, setFilteredProducts] = useState('');

    const showProducts = () => {
        const product = products.filter((product) => {
          return product.name === filteredProducts || product.category === filteredProducts
        })
        
        setProducts(product)
      }



    return (
        <>
        <div className='input-container'>
            <input onChange={(event) => setFilteredProducts(event.target.value)} value={filteredProducts} className='input-text' type="text" placeholder='Digitar Pesquisa' />
            <input onClick={() => showProducts()} className='input-submit' type="submit" value="Pesquisar" />
        </div>
        </>
    )
}

export default InputSearch