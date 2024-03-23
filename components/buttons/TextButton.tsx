import {StyleSheet, Text, TouchableOpacity, TouchableOpacityProps} from "react-native";
import {colors} from "../../data/colors";

interface Props extends TouchableOpacityProps {
	customStyles?: any;
	text: string;
}

export function TextButton({text, customStyles, ...restProps}: Props) {
	return (
		<TouchableOpacity style={{...styles.container, ...customStyles}} {...restProps}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		color: colors.primaryBlue,
	}
});
