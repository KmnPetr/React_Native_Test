import { FC } from 'react';
import { Image, Pressable, View, StyleSheet } from 'react-native';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { IProduct } from '@/types/product.inteface';
import { getMediaSource } from '@/utils/getMediaSource';
import ProductInfo from './ProductInfo';

interface IProductItem {
  product: IProduct;
}

const ProductItem: FC<IProductItem> = ({ product }) => {
  const { navigate } = useTypedNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigate('Product', { slug: product.slug })}
        style={styles.pressable}
      >
        <Image
          source={getMediaSource(product.image)}
          style={styles.image}
        />
      </Pressable>
      <ProductInfo product={product} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 12, // rounded-lg
    flexDirection: 'column',
    marginBottom: 14, // mb-3.5
  },
  pressable: {
    backgroundColor: '#f3f4f6', // bg-gray-100
    borderRadius: 16, // rounded-xl
    position: 'relative',
    overflow: 'hidden',
    padding: 20, // p-5
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 130,
    height: 130,
  },
});

export default ProductItem;