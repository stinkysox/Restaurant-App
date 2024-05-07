import './index.css'

const DishItem = ({
  dishDetails,
  cartItems,
  addItemToCart,
  removeItemFromCart,
}) => {
  const {
    dishId,
    dishName,
    dishType,
    dishPrice,
    dishCurrency,
    dishDescription,
    dishImage,
    dishCalories,
    addonCat,
    dishAvailability,
  } = dishDetails

  const onIncreaseItemQuantity = () => addItemToCart(dishDetails)
  const onDecreaseItemQuantity = () => removeItemFromCart(dishDetails)

  const getItemsQuantity = () => {
    const cartItem = cartItems.find(item => item.dishId === dishId)
    return cartItem ? cartItem.quantity : 0
  }

  const renderControllerButton = () => (
    <div className="btn-container">
      <button className="button" type="button" onClick={onDecreaseItemQuantity}>
        -
      </button>
      <p className="quantity">{getItemsQuantity()}</p>
      <button className="button" type="button" onClick={onIncreaseItemQuantity}>
        +
      </button>
    </div>
  )

  return (
    <li className="dish-item-container">
      <div className={`veg-border ${dishType === 1 ? 'non-veg-border' : ''}`}>
        <div className={`veg-round ${dishType === 1 ? 'non-veg-round' : ''}`} />
      </div>
      <div className="dish-details-container">
        <h1 className="dish-name">{dishName}</h1>
        <p className="dish-price">
          {dishCurrency} {dishPrice}
        </p>
        <p className="dish-description">{dishDescription}</p>
        {dishAvailability && renderControllerButton()}
        {!dishAvailability && (
          <p className="not-available-text">Not available</p>
        )}
        {addonCat.length !== 0 && (
          <p className="addon-available-text">Customizations available</p>
        )}
      </div>

      <p className="dish-calories">{dishCalories} calories</p>
      <img className="dish-image" alt={dishName} src={dishImage} />
    </li>
  )
}

export default DishItem
