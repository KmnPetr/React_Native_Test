import { FC } from 'react'
import Loader from '@/components/ui/Loader'
import Catalog from '@/components/ui/catalog/Catalog'
import { useGetAllProducts } from './useGetAllProducts'
import Layout from '@/components/ui/layout/Layout'

const Explorer: FC = () => {
	const { isLoading, products } = useGetAllProducts()

	return (
		<Layout>
			{isLoading ? (
				<Loader />
			) : (
				<Catalog title='Explorer' products={products} />
			)}
		</Layout>
	)
}

export default Explorer