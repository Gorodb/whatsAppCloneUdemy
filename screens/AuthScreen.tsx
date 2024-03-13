import {StyleSheet, Text} from "react-native";
import {PageContainer} from "../components/pageContainer/PageContainer";
import {SafeAreaView} from "react-native-safe-area-context";
import {Input} from "../components/input/Input";
import {FontAwesome} from "@expo/vector-icons";

export const AuthScreen = () => {

	return (
		<SafeAreaView style={styles.container}>
			<PageContainer>
				<Text>Auth screen</Text>
				<Input
					label="First name"
					iconPack={FontAwesome}
					iconName="user-o"
				/>
			</PageContainer>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	}
})
