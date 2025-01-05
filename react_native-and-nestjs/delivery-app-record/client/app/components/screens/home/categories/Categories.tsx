import { FC } from 'react';
import { Image, Pressable, Text, View, StyleSheet } from 'react-native';
import Heading from '@/components/ui/Heading';
import Loader from '@/components/ui/Loader';
import { useTypedNavigation } from '@/hooks/useTypedNavigation';
import { useGelAllCategories } from './useGelAllCategories';
import { getMediaSource } from '@/utils/getMediaSource';

const Categories: FC = () => {
  const { categories, isLoading } = useGelAllCategories();
  const { navigate } = useTypedNavigation();

  return isLoading ? (
    <Loader />
  ) : (
    <View style={styles.container}>
      <Heading>Categories</Heading>

      <View style={styles.categoriesWrapper}>
        {categories?.map((category) => (
          <Pressable
            onPress={() => navigate('Category', { slug: category.slug })}
            key={category.id}
            style={styles.categoryCard}
          >
            <Image
              source={getMediaSource(category.image)}
              style={styles.categoryImage}
              resizeMode="cover"
            />
            <Text style={styles.categoryText}>{category.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20, // mt-5
    marginBottom: 16, // mb-4
    flexDirection: 'column',
  },
  categoriesWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20, // mt-5
  },
  categoryCard: {
    borderRadius: 16, // rounded-xl
    backgroundColor: '#f3f4f6', // bg-gray-100
    padding: 20, // p-5
    marginHorizontal: 8, // mx-2
    alignItems: 'center',
  },
  categoryImage: {
    width: 40, // w-10
    height: 32, // h-8
    marginBottom: 8, // mb-2
  },
  categoryText: {
    fontSize: 12, // text-xs
    fontWeight: '400', // font-normal
    textAlign: 'center',
  },
});

export default Categories;