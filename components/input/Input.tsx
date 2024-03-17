import {StyleSheet, Text, View, TextInputProps, TextInput} from "react-native";
import {colors} from "../../data/colors";
import React from "react";
import {FontsEnum} from "../../enums/fonts";

interface InputProps extends TextInputProps {
	label?: string;
	iconPack: any;
	iconName?: string;
	iconSize?: number;
	errorMessage?: string;
}

export function Input({label, iconName, iconSize, errorMessage, iconPack: Icon, ...restProps}: InputProps) {
	return (
		<View style={styles.container}>
			{label && <Text style={styles.label}>{label}</Text>}
			<View style={styles.inputContainer}>
				{Icon && <Icon name={iconName} style={styles.icon} size={iconSize || 15} />}
				<TextInput {...restProps} style={styles.input} />
			</View>
			{errorMessage && <View style={styles.errorContainer}>
				<Text style={styles.errorText}>{errorMessage}</Text>
			</View>}
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
	},
	inputContainer: {
		flexDirection: "row",
		alignItems: "center",
		width: '100%',
		paddingHorizontal: 10,
		height: 40,
		borderRadius: 2,
		backgroundColor: colors.inputBg,
	},
	icon: {
		marginRight: 10,
		color: colors.inputIcon,
	},
	label: {
		marginVertical: 8,
		fontFamily: FontsEnum.BOLD_NORMAL,
		letterSpacing: 0.4,
		color: colors.text
	},
	input: {
		flex: 1,
		height: "100%",
		color: colors.text,
		fontFamily: FontsEnum.REGULAR,
		letterSpacing: 0.4,
		paddingTop: 0,
	},
	errorContainer: {
		marginVertical: 5,
	},
	errorText: {
		color: colors.errorText,
		fontSize: 13,
		fontFamily: FontsEnum.REGULAR,
		letterSpacing: 0.3,
	}
});
