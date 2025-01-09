import { FC } from 'react'
import Catalog from '@/components/ui/catalog/Catalog'

import { useProfile } from '../profile/useProfile'
import Layout from '@/components/ui/layout/Layout'

const Favorites: FC = () => {
	const { profile } = useProfile()

	return (
		<Layout>
			<Catalog title='Favorites' products={profile?.favorites || []} />
		</Layout>
	)
}

export default Favorites