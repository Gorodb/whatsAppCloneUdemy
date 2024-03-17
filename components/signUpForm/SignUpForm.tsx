import {StyleSheet} from "react-native";
import {Input} from "../input/Input";
import {Feather, FontAwesome} from "@expo/vector-icons";
import {SubmitButton} from "../buttons/SubmitButton";

export function SignUpForm() {
	return (
		<>
			<Input
				label="First name"
				iconPack={FontAwesome}
				iconName="user-o"
			/>
			<Input
				label="Last name"
				iconPack={FontAwesome}
				iconName="user-o"
			/>
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
				text="Sign up"
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
