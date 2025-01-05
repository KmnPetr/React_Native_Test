import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { IProduct } from '@/types/product.inteface';
import { convertPrice } from '@/utils/covertPrice';

interface IProductInfo {
  product: IProduct;
}

const ProductInfo: FC<IProductInfo> = ({ product }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.categoryName}>{product.category.name}</Text>
      <Text style={styles.priceTag}>
        {convertPrice(product.price)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 12, // my-3
  },
  productName: {
    fontWeight: '600', // font-semibold
    fontSize: 16, // text-base
  },
  categoryName: {
    paddingVertical: 6, // py-1.5
  },
  priceTag: {
    marginTop: 4, // mt-1
    fontWeight: '400', // font-normal
    fontSize: 14, // text-sm
    textAlign: 'center',
    paddingVertical: 2, // py-0.5
    width: 55, // w-[55px]
    borderRadius: 9999, // rounded-full
    color: 'white', // text-white
    backgroundColor: '#47AA52', // bg-[#47AA52]
  },
});

export default ProductInfo;