import {validate} from "validate.js";

export const validateStrings = (id: string, value: string) => {
	const constraints: any = {presence: {allowEmpty: false}}
	if (value !== "") {
		constraints.format = {
			pattern: "[a-z]+",
			flags: "i",
			message: "can only only contains letters"
		}
	}
	const result = validate({[id]: value}, {[id]: constraints});
	return result && result[id];
}

export const validateEmail = (id: string, value: string) => {
	const constraints: any = {presence: {allowEmpty: false}}
	if (value !== "") {
		constraints.email = true;
	}
	const result = validate({[id]: value}, {[id]: constraints});
	return result && result[id];
}

export const validatePassword = (id: string, value: string) => {
	const constraints: any = {presence: {allowEmpty: false}}
	if (value !== "") {
		constraints.length = {
			minimum: 6,
			maximum: 32,
			message: "must be between 6 and 32 characters"
		}
	}
	const result = validate({[id]: value}, {[id]: constraints});
	return result && result[id];
}
