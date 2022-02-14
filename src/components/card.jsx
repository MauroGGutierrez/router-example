import "./card.css"

const Card = ({product}) => {
  return (
    <div className="card-box">
      <img src={product.thumbnail} alt={product.price} className="img-card"/>
      <div className="txt-card">
        <p className="title">{product.title}</p>
        <h3>${product.price}</h3>
      </div>
    </div>
  )
}

export default Card