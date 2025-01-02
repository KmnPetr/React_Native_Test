import cn from 'clsx'
import { FC, PropsWithChildren } from 'react'
import { Pressable, Text, StyleSheet } from 'react-native'

import { IButton } from './button.interface'

const Button: FC<PropsWithChildren<IButton>> = ({ style, textStyle, children, ...rest }) => {
    return (
      <Pressable style={[styles.button, style]} {...rest}>
        <Text style={[styles.text, textStyle]}>{children}</Text>
      </Pressable>
    );
  };


const styles = StyleSheet.create({
    button: {
      alignSelf: "center",
      marginTop: 14, // эквивалентно mt-3.5
      backgroundColor: "#47AA52",
      width: "100%",
      paddingVertical: 12, // эквивалентно py-3
      borderRadius: 8, // эквивалентно rounded-lg
    },
    text: {
      color: "white",
      textAlign: "center",
      fontWeight: "500", // эквивалентно font-medium
      fontSize: 18, // эквивалентно text-lg
    },
  });

export default Button