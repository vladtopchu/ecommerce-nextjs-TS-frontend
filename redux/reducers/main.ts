interface initProps {
	productList: any[],
	cartItems: any[]
}

const initialState: initProps = {
	productList: [],
	cartItems: []
}

const main = (state = initialState, action) => {
	switch (action.type) {
		//data
		case "PRODUCT_LOADED":
			{
				return {
					...state,
					productList: action.list,
				}
			}

		//cart
		// проверку на наличие в локалстородже делаем не здесь, а при вызове диспэтч, потому что если делать проверку здесь,
		// то придется всегда в экшн.пэйлоад загружать данные корзины
		case 'LOAD_CART':
			{
				return {
					...state,
					cartItems: action.payload
				}
			}

		case 'ADD_TO_CART':
			{
				const newItem = state.productList.find(
					item => item._id === action.payload.id
				)

				if (state.cartItems.findIndex((item) => item._id === newItem._id) !== -1) {
					const clone = state.cartItems.find((item) => item._id === newItem._id)
					const newCart = state.cartItems.filter(
						(item) => item._id !== newItem._id
					)
					clone.amount += action.payload.amount
					newCart.push(clone)
					return {
						...state,
						cartItems: newCart,
					}
				} else {
					newItem.amount = action.payload.amount
					return {
						...state,
						cartItems: [...state.cartItems, newItem],
					}
				}

			}

		case "REMOVE_FROM_CART":
			{
				const newCart = state.cartItems.filter((item) => item._id !== action.payload)
				// localStorage.setItem('cartProducts', JSON.stringify(newCart))
				return {
					...state,
					cartItems: newCart,
				}
			}

		case 'SET_AMOUNT':
			{
				const product = state.cartItems.find(prod => prod._id === action.payload.id)
				product.amount = action.payload.amount
				const newCart = state.cartItems.filter(item => item._id !== product._id)
				newCart.push(product)
				return {
					...state,
					cartItems: newCart
				}
			}

		case 'AMOUNT_INC':
			{
				const product = state.cartItems.find(prod => prod._id === action.payload)
				product.amount = product.amount + 1
				const newCart = state.cartItems.filter(item => item._id !== product._id)
				newCart.push(product)
				return {
					...state,
					cartItems: newCart
				}
			}

		case 'AMOUNT_DEC':
			{
				const product = state.cartItems.find(prod => prod._id === action.payload)
				product.amount = product.amount - 1
				const newCart = state.cartItems.filter(item => item._id !== product._id)
				newCart.push(product)
				// localStorage.setItem('cartProducts', JSON.stringify(newCart))
				return {
					...state,
					cartItems: newCart
				}
			}

		default:
			return state
	}
}

export default main