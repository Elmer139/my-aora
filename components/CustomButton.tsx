import { TouchableOpacity, Text } from "react-native";
import React from "react";

type CustomButtonProps = {
	title: string;
	handlePress: () => void;
	containerStyles?: string;
	textStyles?: string;
	isLoading?: boolean;
};

const CustomButton = ({
	title,
	handlePress,
	containerStyles,
	textStyles,
	isLoading,
}: CustomButtonProps) => {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			onPress={handlePress}
			className={`bg-secondary-100 rounded-xl min-h-[62px] justify-center items-center mt-6 ${containerStyles} {isLoading ? 'opacity-50' : ''} disabled={isLoading}`}
		>
			<Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default CustomButton;
