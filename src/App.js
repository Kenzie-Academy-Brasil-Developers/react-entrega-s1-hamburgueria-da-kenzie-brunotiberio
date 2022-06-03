import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
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

  useEffect(() => {
    api.get('products')
    .then((response) => {
      setProducts(response.data)
    })
  }, [])


  function deletarItem(id){
    const removeItens = currentSale.filter((item) => {
      return item.id !== id
    })

    setCurrentSale(removeItens)
  }
    

  function handleClick(productId){
    const adicionarCurrentSale = products.find((product) => {
      return product.id === productId   
    })
    
    const produtoIgual = currentSale.find((sale) => {
      return sale.id === productId
    })

    if(!produtoIgual){
      toast.info('Produto adicionado ao carrinho')
      setCurrentSale([...currentSale,adicionarCurrentSale])
    } else {
        toast.info('Adicione um produto diferente')
    } 
  }

  return (
   <>
      <Header>
        <Logo />
        <InputSearch products={products} setProducts={setProducts}/>
      </Header>
      <main className='main'>
        <ProductList products={products} handleClick={handleClick} />  
        <Cart products={products} currentSale={currentSale} deletarItem={deletarItem} setCurrentSale={setCurrentSale} />
      </main>
   </>
  );
}

export default App;
