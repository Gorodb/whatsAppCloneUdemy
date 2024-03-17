import {KeyboardAvoidingView, Platform, ScrollView, StyleSheet, ScrollViewProps} from "react-native";
import React from "react";

interface ViewProps extends ScrollViewProps {
	children: React.ReactNode;
	offset?: number;
}

export function ScrollableView({children, offset = 100, ...overProps}: ViewProps) {
	return (
		<ScrollView {...overProps}>
			<KeyboardAvoidingView
				style={styles.keyBoardAvoidingView}
				behavior={Platform.OS == 'ios' ? "height" : undefined}
				keyboardVerticalOffset={offset}
			>
				{children}
			</KeyboardAvoidingView>
		</ScrollView>
	)
}

const styles = StyleSheet.create({
	keyBoardAvoidingView: {
		flex: 1,
		justifyContent: 'center',
	}
})
