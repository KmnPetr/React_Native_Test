import { FC } from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';

import { useTypedNavigation } from '@/hooks/useTypedNavigation';

const Banner: FC = () => {
  const { navigate } = useTypedNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>
          Fast delivery - delicious choice every time!
        </Text>

        <Pressable
          onPress={() => navigate('Explorer')}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Order now</Text>
        </Pressable>
      </View>

      <View style={styles.imageWrapper}>
        <Image
          source={require('@/assets/images/banner.png')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20, // mt-5
    width: '100%',
    backgroundColor: '#47AA52',
    paddingHorizontal: 20, // px-5
    paddingVertical: 20, // py-5
    borderRadius: 20, // rounded-2xl
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: '500', // font-medium
    width: 224, // w-56
    color: 'white',
    fontSize: 20, // text-xl
  },
  button: {
    backgroundColor: 'black',
    paddingVertical: 8, // py-2
    borderRadius: 9999, // rounded-full
    width: 112, // w-28
    marginTop: 16, // mt-4
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '500', // font-medium
    textAlign: 'center',
  },
  imageWrapper: {
    position: 'absolute',
    bottom: 0,
    right: 16, // right-4
    width: 112, // w-28
    height: 112, // h-28
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default Banner;