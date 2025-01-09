import { FC } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { convertPrice } from '@/utils/covertPrice'
import { IProductComponent } from '../product-page.interface'

const ProductInfo: FC<IProductComponent> = ({ product }) => {
	return (
		<View style={styles.container}>
			<Text style={styles.name}>{product.name}</Text>
			<Text style={styles.description}>{product.description}</Text>
			<Text style={styles.price}>{convertPrice(product.price)}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20, // equivalent to mt-5
	},
	name: {
		fontWeight: 'bold',
		fontSize: 24, // equivalent to text-2xl
	},
	description: {
		marginTop: 8, // equivalent to mt-2
		fontSize: 16, // equivalent to text-base
		opacity: 0.7,
	},
	price: {
		marginTop: 24, // equivalent to mt-6
		fontSize: 28, // equivalent to text-3xl
		fontWeight: '600', // equivalent to font-semibold
		color: '#47AA52',
	},
})

export default ProductInfo