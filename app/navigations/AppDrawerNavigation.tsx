import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { screen } from "../utils";


import { Feather, Ionicons,} from '@expo/vector-icons';

import { HomeStack } from "./HomeStack";
import { CustomDrawer } from "../components/Navigation/CustomDrawer";

const Drawer = createDrawerNavigator();

export function AppDrawerNavigation({navigation}) {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer navigation={navigation} {...props} />}
      swipeEnabled={false}
      initialRouteName={screen.home.tab}
      screenOptions={{
        headerShown:false,
        // drawerActiveBackgroundColor: "#FF5C26",
        drawerActiveTintColor: "#FF5C26",
        drawerInactiveTintColor: "#4A4A4A",
        drawerLabelStyle:{
          marginLeft: -25,
          fontFamily: "Montserrat-700",
          lineHeight: 20,
          fontSize: 17,
          paddingVertical: 10
          // height:60,
          // justifyContent:"center",
          // alignItems:"center"
        },
        drawerStyle: {
          backgroundColor: "#fff",
          width: 330,
        },
      }}
    >
      <Drawer.Screen name={screen.home.tab} component={HomeStack} options={{
        drawerIcon: () => (
          <Feather name="home" size={25} color="#4A4A4A" />
        )
      }}/>
    </Drawer.Navigator>
  );
}
