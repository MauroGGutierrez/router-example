import "./card.css"

const Card = ({product}) => {
  return (
    <div>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <img src={product.thumbnail} alt={product.price} />
    </div>
  )
}

export default Card