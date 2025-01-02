import cn from 'clsx'
import { Controller } from 'react-hook-form'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import { IField } from './field.interface'
import React from 'react'

const Field = <T extends Record<string, any>>({
	control,
	rules,
	name,
    style,
	...rest
}: IField<T>): JSX.Element => {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({
				field: { value, onChange, onBlur },
				fieldState: { error }
			}) => (
				<>
					<View
                        style={[
                        styles.container,
                        error ? styles.errorBorder : styles.defaultBorder,
                        style,
                        ]}
					>
						<TextInput
							autoCapitalize='none'
							onChangeText={onChange}
							onBlur={onBlur}
							value={(value || '').toString()}
                            style={styles.input}
							placeholderTextColor='#6A6A6A'
							{...rest}
						/>
					</View>
					{error && (
						<Text style={styles.errorText}>{error.message}</Text>
					)}
				</>
			)}
		/>
	)
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      width: "100%",
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 16,
      marginVertical: 6,
    },
    defaultBorder: {
      borderColor: "gray",
      borderWidth: 1,
    },
    errorBorder: {
      borderColor: "red",
      borderWidth: 1,
    },
    input: {
      color: "black",
      fontSize: 16,
    },
    errorText: {
      color: "red",
      fontSize: 14,
      marginTop: 4,
    },
  });

export default Field