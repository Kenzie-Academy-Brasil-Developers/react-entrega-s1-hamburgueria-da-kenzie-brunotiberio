import '../Product/index.css'

function Product({ img, name, category, price, id, handleClick }){
    return (
        <>
        <li className="card-product">
            <div className='card-img-product'>
                <img className="img-product" src={img} alt={name} />
            </div>
            <h3 className="name-product">{name}</h3>
            <p className="category-product">{category}</p>
            <span className="value-product">R$ {price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</span>
            <button className="add-product" onClick={() => handleClick(id)}>Adicionar</button>
           
        </li>
        
        </>
    )
}

export default Product

