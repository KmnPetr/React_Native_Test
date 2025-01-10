import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Heading from '@/components/ui/Heading';
import Button from '@/components/ui/button/Button';
import { useCart } from '@/hooks/useCart';
import { convertPrice } from '@/utils/covertPrice';
import CartItem from './cart-item/CartItem';
//import { useCheckout } from './useCheckout';
import React from 'react';
import Layout from '@/components/ui/layout/Layout';

const Cart: FC = () => {
  const { items, total } = useCart();
  //const { onCheckout } = useCheckout();

  return (
    <>
      <Layout>
        <Heading>Cart</Heading>

        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <Text style={styles.emptyText}>Cart is empty</Text>
        )}
      </Layout>

      {items.length ? (
        <View style={styles.checkoutContainer}>
          <Text style={styles.totalText}>Total: {convertPrice(total)}</Text>
          <Button onPress={/*onCheckout*/()=>{}}>Place order</Button>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  emptyText: {
    marginTop: 8,
  },
  checkoutContainer: {
    position: 'absolute',
    bottom: 8,
    width: '90%',
    marginHorizontal: 5,
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default Cart;