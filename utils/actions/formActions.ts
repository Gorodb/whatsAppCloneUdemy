import {InputIdsEum} from "../../screens/AuthScreen";
import {validateEmail, validatePassword, validateStrings} from "../validationConstraints";

export const validateInput = (inputId: string, inputValue: string) => {
	if (inputId === InputIdsEum.FIRST_NAME || inputId === InputIdsEum.LAST_NAME) {
		return validateStrings(inputId, inputValue);
	} else if (inputId === InputIdsEum.EMAIL) {
		return validateEmail(inputId, inputValue);
	} else if (inputId === InputIdsEum.PASSWORD) {
		return validatePassword(inputId, inputValue);
	}
}
