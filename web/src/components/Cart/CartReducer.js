import { initialStateStructure } from 'src/components/Cart/CartContext'
import { siftObject } from 'src/utils'

// localStorage functions
const setStorage = (state) =>
  localStorage.setItem('cart', JSON.stringify(state))
const clearStorage = () => localStorage.removeItem('cart')

// Utils
const totalReducer = (cartItems) => {
  return cartItems.reduce((acc, item) => acc + item.amount, 0)
}

// CART REDUCER
// - manages cart context state and sync of localStorage
export const CartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      let cartItems
      // if payload.item exists, update quantity
      // else, add payload.item
      if (state.cartItems.find((item) => item.id === action.payload.item.id)) {
        cartItems = state.cartItems.map((item) => {
          // return item or update item
          return item.id !== action.payload.item.id ? item : action.payload.item
        })
      } else {
        // add item -- currently only one project supported at a time
        const newItem = siftObject(action.payload.item, '__typename')
        cartItems = [{ ...newItem }]
      }
      const newState = {
        ...state,
        cartItems,
        cartTotal: totalReducer(cartItems),
      }
      setStorage(newState)
      return newState
    }

    case 'UPDATE_ITEM_AMOUNT': {
      const cartItems = state.cartItems.map((item) => {
        return item.id !== action.payload.id
          ? item
          : { ...item, amount: action.payload.amount }
      })
      const newState = {
        ...state,
        cartItems,
        cartTotal: totalReducer(cartItems),
      }
      setStorage(newState)
      return newState
    }

    case 'DELETE_ITEM': {
      const cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )
      const newState = {
        ...state,
        cartItems,
        cartTotal: totalReducer(cartItems),
      }
      setStorage(newState)
      return newState
    }

    case 'CLEAR_CART_ITEMS': {
      const newState = { ...state, cartItems: [], cartTotal: 0 }
      setStorage(newState)
      return newState
    }

    case 'CLEAR_CART': {
      clearStorage()
      return initialStateStructure
    }

    default:
      return state
  }
}
