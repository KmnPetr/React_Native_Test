import { AntDesign } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { useActions } from '@/hooks/useActions';
import { useCart } from '@/hooks/useCart';
import { ICartItem } from '@/types/cart.interface';

interface ICartActions {
  item: ICartItem;
}

const CartActions: FC<ICartActions> = ({ item }) => {
  const { removeFromCart, changeQuantity } = useActions();

  const { items } = useCart();
  const quantity = items.find((cartItem) => cartItem.id === item.id)?.quantity;

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => changeQuantity({ id: item.id, type: 'minus' })}
        disabled={quantity === 1}
        style={quantity === 1 ? styles.disabledButton : undefined}
      >
        <AntDesign name="minus" size={18} />
      </Pressable>
      <Text style={styles.quantity}>{quantity}</Text>
      <Pressable onPress={() => changeQuantity({ id: item.id, type: 'plus' })}>
        <AntDesign name="plus" size={18} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16, // equivalent to mt-4
    flexDirection: 'row', // equivalent to flex-row
    alignItems: 'center',
    gap: 16, // equivalent to gap-x-4 (React Native поддерживает `gap` только в новой версии RN 71+, иначе заменяется на margin)
  },
  quantity: {
    fontSize: 16,
  },
  disabledButton: {
    opacity: 0.5,
  },
});

export default CartActions;