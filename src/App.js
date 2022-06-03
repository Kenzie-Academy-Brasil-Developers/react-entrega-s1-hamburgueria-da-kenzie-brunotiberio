import React, { useEffect, useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import { api } from './components/data/api';

import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Logo from './components/Logo';
import ProductList from './components/ProductList';



function App() {

  const [products, setProducts] = useState([])

  const [currentSale, setCurrentSale] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    api.get('products')
    .then((response) => {
      setProducts(response.data)
    })
  }, [])


  function showProducts(pesquisaItem){
    products.filter((product) => {
      return product.name === pesquisaItem || product.category === pesquisaItem
    })     
  }

  function deletarItem(id){
    const removeItens = currentSale.filter((item) => {
      return item.id !== id
    })

    setCurrentSale(removeItens)
  }
    

  function handleClick(productId){
    const adicionarCurrentSale = products.find((id) => {
      return id.id === productId
    })

    setCurrentSale([...currentSale,adicionarCurrentSale])
  }


  return (
   <>
      <Header>
        <Logo />
        <InputSearch showProducts={showProducts} setFilteredProducts={setFilteredProducts} filteredProducts={filteredProducts}/>
      </Header>
      <main className='main'>
        <ProductList products={products} handleClick={handleClick} />  
        <Cart currentSale={currentSale} deletarItem={deletarItem} setCurrentSale={setCurrentSale}/>
      </main>
   </>
  );
}

export default App;
