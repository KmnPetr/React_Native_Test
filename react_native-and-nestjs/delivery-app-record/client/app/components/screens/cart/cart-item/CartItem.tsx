import { FC } from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { ICartItem } from '@/types/cart.interface';
import { convertPrice } from '@/utils/covertPrice';
import { getMediaSource } from '@/utils/getMediaSource';
import CartActions from './CartActions';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
  const { navigate } = useTypedNavigation();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => navigate('Product', { slug: item.product.slug })}
        style={styles.imageWrapper}
      >
        <Image
          source={getMediaSource(item.product.image)}
          style={styles.image}
        />
      </Pressable>

      <View style={styles.details}>
        <Text style={styles.productName}>{item.product.name}</Text>
        <Text style={styles.productPrice}>{convertPrice(item.price)}</Text>
        <CartActions item={item} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 20,
  },
  imageWrapper: {
    backgroundColor: '#f3f3f3', // equivalent to bg-gray-100
    borderRadius: 15, // equivalent to rounded-xl
    overflow: 'hidden',
    paddingVertical: 12, // equivalent to py-3
    paddingHorizontal: 12, // equivalent to px-3
    alignItems: 'center',
    width: 112, // equivalent to w-28
  },
  image: {
    width: 80,
    height: 80,
  },
  details: {
    marginLeft: 20, // equivalent to ml-5
    marginTop: 8, // equivalent to mt-2
  },
  productName: {
    fontWeight: '600', // equivalent to font-semibold
    fontSize: 18, // equivalent to text-xl
  },
  productPrice: {
    marginTop: 4, // equivalent to mt-1
  },
});

export default CartItem;