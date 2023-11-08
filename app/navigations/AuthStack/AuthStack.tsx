import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screen } from "../../utils";
import OnboardingScreen from "../../screens/Auth/OnboardingScreen";
import LoginScreen from "../../screens/Auth/LoginScreen";
import RegisterScreem from "../../screens/Auth/RegisterScreem";
import ForgetPasswordScreen from "../../screens/Auth/ForgetPasswordScreen";

const Stack = createNativeStackNavigator();

export function AuthStack() {

    return (
        <Stack.Navigator
            screenOptions={() => ({
                headerShown: false,
            })}>
            <Stack.Screen
                name={screen.auth.home}
                component={OnboardingScreen}
                options={{ title: "Step", headerShown: false }}
            />
            < Stack.Screen
                name={screen.auth.login}
                component={LoginScreen}
                options={{ title: "Login", headerShown: false }}
            />
            < Stack.Screen
                name={screen.auth.register}
                component={RegisterScreem}
                options={{ title: "Register", headerShown: false }}
            />
            < Stack.Screen
                name={screen.auth.forgetPassword}
                component={ForgetPasswordScreen}
                options={{ title: "forget password", headerShown: false }}
            />
        </Stack.Navigator>
    );
}
