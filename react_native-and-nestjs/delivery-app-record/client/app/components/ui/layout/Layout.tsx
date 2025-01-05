import React, { FC, PropsWithChildren } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';

interface ILayout {
  showHeader?: boolean;
  className?: object; // Для дополнительных стилей можно использовать объект
}

const Layout: FC<PropsWithChildren<ILayout>> = ({
  children,
  showHeader = false,
  className = {}, //надо будет переделать под обычные стили
}) => {
  return (
    <View
      style={[
        styles.container,
        !showHeader && styles.noHeaderMargin,
        className, // Дополнительные стили
      ]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* showHeader && <Header /> */}
        {children}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: 'white',
    marginTop: 40,
    paddingHorizontal: 15,
  },
  noHeaderMargin: {
    marginTop: 40,
  },
});

export default Layout;