import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {colors} from "../../data/colors";

interface InputProps extends TouchableOpacityProps {
	text: string;
	onPress: any;
	disabled?: boolean;
	customStyle?: any;
}

export function SubmitButton({text, onPress, disabled, customStyle, ...overProps}: InputProps) {
	const buttonStyles = disabled ? {...styles.button, ...styles.disabledBg} : styles.button
	const pressHandler = disabled ? null : onPress

	return (
		<TouchableOpacity style={{...buttonStyles, ...customStyle}} onPress={pressHandler} {...overProps}>
			<Text style={disabled ? styles.disabledText : styles.enabledText}>
				{text}
			</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: colors.primary,
		paddingHorizontal: 30,
		paddingVertical: 10,
		borderRadius: 20,
		justifyContent: 'center',
		alignItems: 'center',
	},
	disabledBg: {
		backgroundColor: colors.primaryDisabled,
	},
	disabledText: {
		color: colors.sendWhite,
	},
	enabledText: {
		color: colors.sendWhite,
	},
})
