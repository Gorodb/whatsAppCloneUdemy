import {
	ImageBackground,
	KeyboardAvoidingView, Platform,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	View
} from "react-native";
import {CompositeScreenProps} from "@react-navigation/native";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {BottomTabScreenProps} from "@react-navigation/bottom-tabs"
import {SafeAreaView} from "react-native-safe-area-context";

// navigation
import {BottomTabsParamList, NativStackParamList} from "../types/navigationTypes";
import {NavigationEnum} from "../enums/navigationEnum";

// icons and images
import {Feather} from '@expo/vector-icons';
import backgroundImage from "../assets/images/droplet.jpeg";
import {colors} from "../data/colors";
import {useCallback, useEffect, useState} from "react";

export type SettingsScreenProps = CompositeScreenProps<
	NativeStackScreenProps<NativStackParamList, NavigationEnum.CHAT_SCREEN>,
	BottomTabScreenProps<BottomTabsParamList, 'ChatList'>
>;

export function ChatScreen(props: SettingsScreenProps) {
	const [messageText, setMessageText] = useState<string>("");

	const sendMessage = useCallback(() => {
		setMessageText("");
	}, [messageText]);

	const cameraButton = (
		<TouchableOpacity
			style={styles.mediaButton}
			onPress={() => console.log('Pressed')}
		>
			<Feather name="camera" size={24} color={colors.primaryBlue}/>
		</TouchableOpacity>
	)

	const sendButton = (
		<TouchableOpacity
			style={{...styles.mediaButton, ...styles.sendButton}}
			onPress={sendMessage}
		>
			<Feather name="send" size={20} color={colors.sendWhite}/>
		</TouchableOpacity>
	)

	return (
		<SafeAreaView
			edges={['right', 'left', 'bottom']}
			style={styles.container}
		>
			<KeyboardAvoidingView
				style={styles.keyboardContainer}
				behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				keyboardVerticalOffset={110}
			>
				<ImageBackground source={backgroundImage} style={styles.backgroundImage}/>
				<View style={styles.inputContainer}>
					<TouchableOpacity
						style={styles.mediaButton}
						onPress={() => console.log('Pressed')}
					>
						<Feather name="plus" size={24} color={colors.primaryBlue}/>
					</TouchableOpacity>
					<TextInput
						style={styles.textBox}
						value={messageText}
						onChangeText={(text) => setMessageText(text)}
						onSubmitEditing={sendMessage}
					/>
					{messageText == "" ? cameraButton : sendButton}
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
	},
	keyboardContainer: {
		flex: 1,
	},
	backgroundImage: {
		flex: 1,
	},
	inputContainer: {
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 10,
		height: 50
	},
	mediaButton: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 35
	},
	textBox: {
		flex: 1,
		borderWidth: 1,
		borderRadius: 50,
		borderColor: colors.lightGray,
		marginHorizontal: 15,
		paddingHorizontal: 12,
	},
	sendButton: {
		backgroundColor: colors.primaryBlue,
		borderRadius: 50,
		paddingRight: 1,
	}
})
