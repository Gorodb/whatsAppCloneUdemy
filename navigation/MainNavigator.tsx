import {NavigationEnum} from "../enums/navigationEnum";
import {ChatSettingsScreen} from "../screens/ChatSettingsScreen";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NativStackParamList} from "../types/navigationTypes";
import {MainTabNavigator} from "./MainBottomTabNavigation";
import {ChatScreen} from "../screens/ChatScreen";

const Stack = createNativeStackNavigator<NativStackParamList>();

export function MainNavigator() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={NavigationEnum.HOME}
				component={MainTabNavigator}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name={NavigationEnum.CHAT_SETTINGS}
				component={ChatSettingsScreen}
				options={{title: 'Chat settings'}}
			/>
			<Stack.Screen
				name={NavigationEnum.CHAT_SCREEN}
				component={ChatScreen}
				options={{title: 'Chat'}}
			/>
		</Stack.Navigator>
	)
}
