import { FC } from "react";
import { Text, Pressable, StyleSheet } from "react-native";
import { IMenuItem, TypeNavigate } from "./menu.interface";
import {Feather} from '@expo/vector-icons'

interface IMenuItemProps {
    item: IMenuItem
    nav: TypeNavigate
    currentRoute?: string
}

const MenuItem:FC<IMenuItemProps> =({item,nav,currentRoute})=>{
    const isActive = currentRoute === item.path
    return(
        <Pressable onPress={()=>nav(item.path)} style={styles.container}>
            <Feather
                name={item.icon}
                size={26}
                color={isActive?'#47AA52':'#374151'}
            />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
      alignItems: "center",
      width: "20%",
    },
  });


export default MenuItem;