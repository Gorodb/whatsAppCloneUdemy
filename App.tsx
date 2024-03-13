import {useCallback, useEffect, useState} from "react";
import {StyleSheet} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

// Navigation
import {AppNavigator} from "./navigation/AppNavigator.";

import {fonts} from "./data/fonts";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [appIsLoaded, setAppIsLoaded] = useState<boolean>(false);

	useEffect(() => {
		Font.loadAsync(fonts).then(() => {
			setAppIsLoaded(true);
		}).catch((err: any) => {
			console.log(err);
			setAppIsLoaded(true);
		});
	}, []);

	const onLayout = useCallback(async () => {
		if (appIsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [appIsLoaded]);

	if (!appIsLoaded) return null;

	return (
		<SafeAreaProvider
			style={styles.container}
			onLayout={onLayout}
		>
			<AppNavigator />
		</SafeAreaProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff'
	},
	label: {
		color: '#144062',
		fontSize: 18,
		fontFamily: "regular",
	},
});
