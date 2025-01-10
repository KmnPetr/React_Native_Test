import { FontAwesome } from '@expo/vector-icons';
import { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Thanks: FC = () => {
  return (
    <View style={styles.container}>
      <FontAwesome name="check-circle" size={100} color="#61ab2c" />
      <Text style={styles.thankYouText}>Thank you!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 160, // equivalent to mt-40
  },
  thankYouText: {
    fontWeight: 'bold', // equivalent to font-bold
    fontSize: 40, // equivalent to text-5xl
    marginTop: 32, // equivalent to mt-8
  },
});

export default Thanks;