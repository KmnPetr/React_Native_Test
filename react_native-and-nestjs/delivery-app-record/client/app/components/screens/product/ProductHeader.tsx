import { FC } from 'react'
import { View, StyleSheet } from 'react-native'
import { useTypedNavigation } from '@/hooks/useTypedNavigation'
import FavoriteButton from './favorite-button/FavoriteButton'
import ProductButton from './ProductButton'
import { IProductComponent } from './product-page.interface'

const ProductHeader: FC<IProductComponent> = ({ product }) => {
	const { goBack } = useTypedNavigation()

	return (
		<View>
			<View style={styles.headerContainer}>
				<ProductButton
					onPress={goBack}
					icon='chevron-left'
					iconSize={26}
					color='#555'
				/>
				<FavoriteButton productId={product.id} />
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	headerContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 8, // equivalent to mt-2
	},
})

export default ProductHeader