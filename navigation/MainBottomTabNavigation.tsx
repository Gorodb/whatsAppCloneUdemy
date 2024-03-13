import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {BottomTabsParamList} from "../types/navigationTypes";
import {ChatListScreen} from "../screens/ChatListScreen";
import {Ionicons} from "@expo/vector-icons";
import {SettingsScreen} from "../screens/SettingsScreen";

const Tab = createBottomTabNavigator<BottomTabsParamList>();

export function MainTabNavigator() {
	return (
		<Tab.Navigator screenOptions={{ headerTitle: "" }}>
			<Tab.Screen
				name={"ChatList"}
				// @ts-ignore
				component={ChatListScreen}
				options={{
					tabBarLabel: "Chats",
					tabBarIcon: ({color, size}) => <Ionicons name="chatbubbles-outline" size={size} color={color} />
				}}
			/>
			<Tab.Screen
				name={"Settings"}
				component={SettingsScreen}
				options={{
					tabBarLabel: "Settings",
					tabBarIcon: ({color, size}) => <Ionicons name="settings-outline" size={size} color={color} />
				}}
			/>
		</Tab.Navigator>
	)
}
