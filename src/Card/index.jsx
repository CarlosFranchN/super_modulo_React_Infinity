import './style.css'

export const Card = ({item}) =>{
    return(
        <>
            <div className="card">
                <h3 className="name_item">{item.nome}</h3>
                <p className="price_item">R$ {item.preco.toFixed(2)} </p>
            </div>
        </>
    )}