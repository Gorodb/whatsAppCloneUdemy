import {StyleSheet} from "react-native";
import {Input} from "../input/Input";
import {Feather} from "@expo/vector-icons";
import {SubmitButton} from "../buttons/SubmitButton";
import {InputIdsEum} from "../../screens/AuthScreen";
import {validateInput} from "../../utils/actions/formActions";

export function SignInForm() {
	const inputChangeHandler = (inputId: string, inputValue: string) => {
		console.log(validateInput(inputId, inputValue));
	}

	return (
		<>
			<Input
				id={InputIdsEum.EMAIL}
				label="Email"
				iconPack={Feather}
				iconSize={17}
				iconName="mail"
				keyboardType="email-address"
				autoCapitalize="none"
				onInputChanged={inputChangeHandler}
			/>
			<Input
				id={InputIdsEum.PASSWORD}
				secureTextEntry
				iconSize={17}
				iconPack={Feather}
				iconName="lock"
				label="Password"
				autoCapitalize="none"
				onInputChanged={inputChangeHandler}
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
