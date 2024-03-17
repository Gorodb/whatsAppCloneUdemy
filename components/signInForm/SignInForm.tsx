import {StyleSheet} from "react-native";
import {Input} from "../input/Input";
import {Feather} from "@expo/vector-icons";
import {SubmitButton} from "../buttons/SubmitButton";

export function SignInForm() {
	return (
		<>
			<Input
				label="Email"
				iconPack={Feather}
				iconSize={17}
				iconName="mail"
				keyboardType="email-address"
			/>
			<Input
				label="Password"
				iconSize={17}
				iconPack={Feather}
				iconName="lock"
			/>
			<SubmitButton
				onPress={() => {console.log("Sign up")}}
				text="Sign in"
				customStyle={styles.submitButton}
				disabled
			/>
		</>
	)
}

const styles = StyleSheet.create({
	submitButton: {
		marginTop: 20,
	}
})
