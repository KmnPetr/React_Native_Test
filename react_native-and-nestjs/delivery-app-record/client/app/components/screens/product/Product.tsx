import { FC } from 'react'
import { Image, View, StyleSheet } from 'react-native'
import Loader from '@/components/ui/Loader'
import { getMediaSource } from '@/utils/getMediaSource'
import ProductHeader from './ProductHeader'
import AddToCartButton from './product-info/AddToCartButton'
import ProductInfo from './product-info/ProductInfo'
import { useProduct } from './useProduct'
import Layout from '@/components/ui/layout/Layout'

const Product: FC = () => {
	const { isLoading, product } = useProduct()

	if (isLoading) return <Loader />
	if (!product) return null

	return (
		<Layout>
			<ProductHeader product={product} />
			<View style={styles.imageContainer}>
				<Image
					source={getMediaSource(product.image)}
					style={styles.image}
				/>
			</View>
			<ProductInfo product={product} />
			<AddToCartButton product={product} />
		</Layout>
	)
}

const styles = StyleSheet.create({
	imageContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 16, // equivalent to mt-4
	},
	image: {
		width: 260,
		height: 260,
		resizeMode: 'contain',
	},
})

export default Product