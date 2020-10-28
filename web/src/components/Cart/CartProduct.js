import { currency } from 'src/utils'

export const CartProduct = ({ project }) => {
  return (
    <div className="cart-product">
      <div className="cart-product-name">{project.name}</div>
      <div className="cart-product-price">{currency(project.amount)}</div>
    </div>
  )
}
