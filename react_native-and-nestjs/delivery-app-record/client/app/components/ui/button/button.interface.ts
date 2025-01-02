import { PressableProps, StyleProp, ViewStyle, TextStyle } from "react-native";

export interface IButton extends PressableProps {
  style?: StyleProp<ViewStyle>; // Для стилей кнопки
  textStyle?: StyleProp<TextStyle>; // Дополнительно для стилизации текста (опционально)
}