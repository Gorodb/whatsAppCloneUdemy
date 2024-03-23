import {useState} from "react";
import {
	Image,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";

import {PageContainer} from "../components/pageContainer/PageContainer";
import {SignUpForm} from "../components/signUpForm/SignUpForm";
import {SignInForm} from "../components/signInForm/SignInForm";

import logo from "../assets/images/logo.png";
import {ScrollableView} from "../components/views/ScrollableView";
import {TextButton} from "../components/buttons/TextButton";

export enum InputIdsEum {
	FIRST_NAME = "firstName",
	LAST_NAME = "lastName",
	EMAIL = "email",
	PASSWORD = "password"
}

export const AuthScreen = () => {
	const [isSignUp, setIsSignUp] = useState(false);

	const onSwitchPressedHandler = () => {
		setIsSignUp(prevValue => !prevValue)
	}

	return (
		<SafeAreaView style={styles.container}>
			<PageContainer>
				<ScrollableView>
					<View style={styles.imageContainer}>
						<Image source={logo} style={styles.image}/>
					</View>
					{!isSignUp ? <SignUpForm/> : <SignInForm/>}
					<TextButton
						onPress={onSwitchPressedHandler}
						text={`Switch to ${!isSignUp ? "sign in" : "signUp"}`}
						customStyles={{marginTop: 20}}
					/>
				</ScrollableView>
			</PageContainer>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	keyBoardAvoidingView: {
		flex: 1,
		justifyContent: 'center',
	},
	imageContainer: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		width: '50%',
		resizeMode: 'contain',
	}
});
