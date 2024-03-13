import {StyleSheet, View, ViewProps} from "react-native";
import {colors} from "../../data/colors";

interface Props extends ViewProps {
	customStyles?: StyleSheet,
}

export function PageContainer({children, customStyles}: Props) {
  return (
		<View style={{...styles.container, ...customStyles}}>
			{children}
		</View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 20,
		backgroundColor: colors.bgWhite
	}
})
