import {StyleSheet} from "react-native";
import {Feather, FontAwesome} from "@expo/vector-icons";

import {Input} from "../input/Input";
import {SubmitButton} from "../buttons/SubmitButton";
import {InputIdsEum} from "../../screens/AuthScreen";
import {validateInput} from "../../utils/actions/formActions";

export function SignUpForm() {
	const inputChangeHandler = (inputId: string, inputValue: string) => {
		console.log(validateInput(inputId, inputValue));
	}

	return (
		<>
			<Input
				id={InputIdsEum.FIRST_NAME}
				label="First name"
				iconPack={FontAwesome}
				iconName="user-o"
				onInputChanged={inputChangeHandler}
			/>
			<Input
				id={InputIdsEum.LAST_NAME}
				label="Last name"
				iconPack={FontAwesome}
				iconName="user-o"
				onInputChanged={inputChangeHandler}
			/>
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
				label="Password"
				autoCapitalize="none"
				secureTextEntry
				iconSize={17}
				iconPack={Feather}
				iconName="lock"
				onInputChanged={inputChangeHandler}
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
