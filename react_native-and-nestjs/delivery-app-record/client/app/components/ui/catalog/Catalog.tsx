import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Heading from '../Heading';

import { ICatalog } from './catalog.interface';
import ProductItem from './product-item/ProductItem';

const Catalog: FC<ICatalog> = ({ title, products }) => {
  return (
    <View style={styles.container}>
      {title && <Heading>{title}</Heading>}

      {products?.length ? (
        <View style={styles.productList}>
          {products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </View>
      ) : (
        <Text style={styles.noProductsText}>Products not found</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 64, // mb-16
  },
  productList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16, // mt-4
  },
  noProductsText: {
    marginTop: 8, // mt-2
  },
});

export default Catalog;