import '../CartTotal/index.css'

function CartTotal({ currentSale, setCurrentSale }){

    const totalValue = currentSale.reduce((valorAnterior, valorAtual) =>  valorAnterior + valorAtual.price ,0) 

    return (
        <>
        <div className='border-cart'></div>
        <div className="container-price">            
            <div className="container-total">
                <p className="total">Total</p>
                <span className="valor">R$ {totalValue.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>                
            </div>
            <button className="remove-all" onClick={() => setCurrentSale([])}>Remover Todos</button>
        </div>                  
        </>
    )
}

export default CartTotal