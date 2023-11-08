import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import {  DrawerContentScrollView,  DrawerItemList } from "@react-navigation/drawer";
import { screen } from "../../utils";

export function CustomDrawer(props: any) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        bounces={false}
        {...props}
        contentContainerStyle={{}}
      >
        {/* header */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(screen.home.tab);
            }}
          >
            <ImageBackground
              source={require("../../../assets/images/logoHorizontal.png")}
              style={{
                width: 177,
                height: 40,
                // marginLeft: 24,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate(screen.user.tab, {screen: screen.user.user})
            }}
          >
            <AntDesign name="setting" size={25} color="#4A4A4A" />
          </TouchableOpacity>
        </View>

            {/* buttons */}
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 50 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      {/* logout */}
      <View
        style={{ padding: 20, borderTopWidth: 0.2, borderTopColor: "#4A4A4A" }}
      >
        <TouchableOpacity
          style={{
            paddingVertical: 15,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontFamily: "Montserrat-700",
              color: "#4A4A4A",
              marginRight: 10,
            }}
          >
            Cerrar sesión
          </Text>
          <MaterialIcons name="logout" size={24} color="#4A4A4A" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
