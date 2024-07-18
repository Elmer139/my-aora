import { StatusBar } from "expo-status-bar";
import { Text, View, Image } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";
import { images } from "../constants";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import CustomButton from "../components/CustomButton";

export default function Index() {
	return (
		// Wrap your component with GestureHandlerRootView
		<GestureHandlerRootView style={{ height: "100%" }}>
			<SafeAreaView className="bg-primary h-full">
				<ScrollView contentContainerStyle={{ height: "100%" }}>
					<View className="flex items-center justify-center w-full h-full px-4">
						<Image
							source={images.logo}
							resizeMode="contain"
							className="w-[130px] h-[84px]"
						/>
						<Image
							source={images.cards}
							className="max-w-[380px] w-full h-[300px]"
							resizeMode="contain"
						/>
						<View className="relative mt-5">
							<Text className="text-3xl text-white font-bold text-center">
								Discover Endless Possibilities with{" "}
								<Text className="text-secondary-200">Aora</Text>
							</Text>
							<Image
								source={images.path}
								className="w-[136px h-[15px] absolute -bottom-2 -right-16"
								resizeMode="contain"
							/>
						</View>
						<Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
							Where creativity meets innovation: embark on a journey of
							limitless exploration with Aora
						</Text>
						<CustomButton
							title="Continue with Email"
							handlePress={() => {}}
							containerStyles="w-full mt-7"
						/>
					</View>
				</ScrollView>
				<StatusBar backgroundColor="#161622" style="light" />
			</SafeAreaView>
		</GestureHandlerRootView>
	);
}
