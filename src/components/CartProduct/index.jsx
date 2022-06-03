import '../CartProduct/index.css'

function CartProduct({ img, name, category, id, deletarItem }){
    return (
        <>
        <li className='cart-product-container'>
            <div className='cart-img-container'>
                <img className='cart-img' src={img} alt={name} />
            </div>
            <div>
                <h3 className='cart-name'>{name}</h3>
                <p className='cart-category'>{category}</p>
            </div>
            <button className='cart-button-remove' onClick={() => deletarItem(id)}>Remover</button>
        </li>
        </>
    )

}

export default CartProduct