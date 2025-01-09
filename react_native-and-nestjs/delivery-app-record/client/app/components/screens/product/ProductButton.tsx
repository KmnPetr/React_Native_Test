import { Feather } from '@expo/vector-icons'
import { FC, PropsWithChildren } from 'react'
import { Pressable, PressableProps, View, StyleSheet } from 'react-native'

import { TypeFeatherIconNames } from '@/types/icon.interface'

interface IProductButton extends PressableProps {
	icon?: TypeFeatherIconNames
	iconSize?: number
	color?: string
}

const ProductButton: FC<PropsWithChildren<IProductButton>> = ({
	children,
	icon,
	iconSize = 24,
	color = '#000',
	...rest
}) => {
	return (
		<Pressable {...rest}>
			<View style={styles.buttonContainer}>
				{children ? (
					children
				) : (
					<Feather name={icon} size={iconSize} color={color} />
				)}
			</View>
		</Pressable>
	)
}

const styles = StyleSheet.create({
	buttonContainer: {
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
		backgroundColor: '#E5E5E5', // equivalent to bg-gray-200
		padding: 12, // equivalent to p-3
		borderRadius: 999, // equivalent to rounded-full
	},
})

export default ProductButton