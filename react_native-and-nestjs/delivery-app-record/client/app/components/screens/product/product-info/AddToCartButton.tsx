import { FC } from 'react'
import { StyleSheet } from 'react-native'
import Button from '@/components/ui/button/Button'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.inteface'

interface IAddToCartButton {
	product: IProduct
}

const AddToCartButton: FC<IAddToCartButton> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const currentElement = items.find(
		cartItem => cartItem.product.id === product.id
	)

	return (
		<Button
			onPress={() =>
				currentElement
					? removeFromCart({ id: currentElement.id })
					: addToCart({
							product,
							quantity: 1,
							price: product.price
						})
			}
			style={styles.button}
		>
			{currentElement ? 'Remove from cart' : 'Add to cart'}
		</Button>
	)
}

const styles = StyleSheet.create({
	button: {
		marginTop: 24, // equivalent to mt-6
	},
})

export default AddToCartButton