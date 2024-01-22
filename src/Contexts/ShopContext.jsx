import { createContext, useState } from "react";
import allProducts from '../Images/all_product'

export const ShopContext = createContext(null)

const getDefaultCart = () => {
	let cart = {};
	for (let index = 0; index < allProducts.length + 1; index++) {
		cart[index] = 0
	}
	// console.log(cart)
	return cart
}
getDefaultCart()

export const ShopContextProvider = (props) => {
	const [cartitems, setCartitems] = useState(getDefaultCart)

// console.log(cartitems)

	const addtoCart = (itemId) => {
		setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

	}

	const removeCart = (itemId) => {
		setCartitems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
	}

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartitems) {
			if (cartitems[item] > 0) {
				const iteminfo = allProducts.find((product) => product.id == item)
				
				totalAmount += iteminfo.new_price * cartitems[item];
				console.log(iteminfo)
			}
			// console.log(item)
		}
		// console.log(totalAmount)
		return totalAmount;
	}

	const getTotalCartItems = () => {
		let totalItem = 0;
		for (const item in cartitems) {
			if (cartitems[item] > 0) {
				totalItem += cartitems[item]
			}
		}
		// console.log(totalItem)
		return totalItem;
	}

	const contextValue = {getTotalCartItems, getTotalCartAmount, allProducts, cartitems, addtoCart, removeCart }
	return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	)
}
export default ShopContextProvider

