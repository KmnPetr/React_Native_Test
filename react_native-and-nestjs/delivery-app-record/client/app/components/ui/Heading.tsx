import React, { FC, PropsWithChildren } from 'react';
import { Text, StyleSheet } from 'react-native';

interface IHeading {
  isCenter?: boolean;
  className?: object; // Для дополнительных стилей можно использовать объект
}

const Heading: FC<PropsWithChildren<IHeading>> = ({
  children,
  isCenter = false,
  className = {},
}) => {
  return (
    <Text
      style={[
        styles.base,
        isCenter && styles.center,
        className, // Дополнительные стили
      ]}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  base: {
    color: 'black',
    fontWeight: '500',
    fontSize: 20, // text-xl в Tailwind соответствует 20px
  },
  center: {
    textAlign: 'center',
  },
});

export default Heading;