import {NavigationContainer} from "@react-navigation/native";
import {MainNavigator} from "./MainNavigator";

export function AppNavigator() {
	return (
		<NavigationContainer>
			<MainNavigator />
		</NavigationContainer>
	)
}
