import { FC } from 'react';
import { View, StyleSheet } from 'react-native';
import Heading from '@/components/ui/Heading';
import Loader from '@/components/ui/Loader';
import Catalog from '@/components/ui/catalog/Catalog';
import Field from '@/components/ui/field/Field';

import { ISearchFormData } from './search.interface';
import { useSearch } from './useSearch';
import Layout from '@/components/ui/layout/Layout';

const Search: FC = () => {
	const { searchTerm, products, isLoading, control } = useSearch();

	return (
		<Layout>
			<Heading>Search</Heading>
			<View style={styles.marginTop3}>
				<Field<ISearchFormData>
					placeholder="Type something..."
					control={control}
					name="searchTerm"
					keyboardType="web-search"
				/>
			</View>
			{!!searchTerm ? (
				<View style={styles.marginTop2}>
					{isLoading ? <Loader /> : <Catalog products={products} />}
				</View>
			) : null}
		</Layout>
	);
};

const styles = StyleSheet.create({
	marginTop3: {
		marginTop: 12,
	},
	marginTop2: {
		marginTop: 8,
	},
});

export default Search;