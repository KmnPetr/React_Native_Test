import { FC } from 'react'
import { Text } from 'react-native'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'

import { useCategory } from './useCategory'
import Layout from '@/components/ui/layout/Layout'

const Category: FC = () => {
	const { isLoading, products, category } = useCategory()

	if (isLoading) return <Loader />

	return (
		<Layout>
			{category ? (
				<Catalog title={category.name} products={products} />
			) : (
				<Text>Category not found</Text>
			)}
		</Layout>
	)
}

export default Category