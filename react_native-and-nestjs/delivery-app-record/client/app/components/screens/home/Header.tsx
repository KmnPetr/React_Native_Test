import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { useProfile } from '../profile/useProfile';

const Header: FC = () => {
  const { navigate } = useTypedNavigation();
  const { profile } = useProfile();

  return (
    <View style={styles.container}>
      <Text style={styles.greetingText}>
        Hello, {profile?.name}!
      </Text>

      <Pressable onPress={() => navigate('Cart')}>
        <Ionicons name="cart" size={26} color="#374151" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  greetingText: {
    fontWeight: '500',
    fontSize: 24, // 2xl
  },
});

export default Header;