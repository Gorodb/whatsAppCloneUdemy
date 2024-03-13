import {Button, StyleSheet, Text, View} from "react-native";
import {CompositeScreenProps} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs"
import {BottomTabsParamList, NativStackParamList} from "../types/navigationTypes";
import {NavigationEnum} from "../enums/navigationEnum";

export type SettingsScreenProps = CompositeScreenProps<
	NativeStackScreenProps<NativStackParamList, NavigationEnum.HOME>,
	BottomTabScreenProps<BottomTabsParamList, 'ChatList'>
>;

export function ChatListScreen (props: SettingsScreenProps) {
	return (
		<View style={styles.container}>
			<Text>Chat list screen</Text>
			<Button title="Settings" onPress={() => {props.navigation.navigate(NavigationEnum.CHAT_SETTINGS)}} />
			<Button title="Chat screen" onPress={() => {props.navigation.navigate(NavigationEnum.CHAT_SCREEN)}} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})
