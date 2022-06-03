import '../InputSearch/index.css'

function InputSearch({ showProducts, setFilteredProducts, filteredProducts }){

    return (
        <>
        <div className='input-container'>
            <input onChange={(event) => setFilteredProducts(event.target.value)} className='input-text' type="text" placeholder='Digitar Pesquisa' />
            <input onClick={() => showProducts(filteredProducts)} className='input-submit' type="submit" value="Pesquisar" />
        </div>
        </>
    )
}

export default InputSearch