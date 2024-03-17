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

export const AuthScreen = () => {
	const [isSignUp, setIsSignUp] = useState(false);

	return (
		<SafeAreaView style={styles.container}>
			<PageContainer>
				<ScrollableView>
					<View style={styles.imageContainer}>
						<Image source={logo} style={styles.image}/>
					</View>
					{!isSignUp ? <SignUpForm/> : <SignInForm/>}
					<TouchableOpacity style={{marginTop: 40}} onPress={() => {
						setIsSignUp(prevValue => !prevValue)
					}}>
						<Text>{`Switch to ${!isSignUp ? "sign in" : "signUp"}`}</Text>
					</TouchableOpacity>
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
})
