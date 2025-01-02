import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TypeNavigate } from "./menu.interface";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { menuItems } from "./menu.data";
import MenuItem from "./MenuItem";


interface IBottomMenu {
	nav: TypeNavigate
	currentRoute?: string
}

const ButtomMenu:FC<IBottomMenu>=props=>{
	const { bottom } = useSafeAreaInsets()
    return(
		<View
			style={[
				styles.container,
				{ paddingBottom: bottom + 20 }
			]}
		>
            {menuItems.map(item => (
                <MenuItem key={item.path} item={item} {...props} />
            ))}
        </View>
    )
}



const styles = StyleSheet.create({
	container: {
		paddingTop: 20, // 5 * 4 for padding-top (tailwind uses rem base of 4)
		paddingHorizontal: 8, // 2 * 4 for padding-left and padding-right
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		width: "100%",
		borderTopWidth: 1,
		borderTopColor: "#bbbbbb",
		backgroundColor: "white",
	},
	text: {
		fontSize: 16, // Example font size, you can adjust as needed
	}
});

export default ButtomMenu