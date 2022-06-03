import CartProduct from "../CartProduct"
import CartTotal from "../CartTotal"
import '../Cart/index.css'

function Cart({currentSale, deletarItem , setCurrentSale, products }){

        return (        
            <>
                <div className="cart-container">
                    <h2 className="name-cart">Carinho de compras</h2>
                    <ul className="list-cart">
                        {currentSale.length === 0 ?
                         
                        (

                        <>
                        <div className="list-vazio">
                            <p className="cart-sacola-vazio">Sua sacola está vazia</p>
                            <p className="cart-add-vazio">Adicione Itens</p>
                        </div>
                        </>

                        ) 
                        
                        : 
                        
                        (
                            currentSale.map((sale) => <CartProduct products={products} img={sale.img} name={sale.name} category={sale.category} id={sale.id} key={sale.id} deletarItem={deletarItem} setCurrentSale={setCurrentSale}/>)
                        )
                            
                        }
                        
                    </ul>
                        {currentSale.length !== 0 && (<CartTotal currentSale={currentSale} setCurrentSale={setCurrentSale}/>)}
                                            
                </div>
         
            </>
        )

}

export default Cart