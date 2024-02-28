import { useState } from "react";
import { View, ScrollView, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";

import { COLORS, icons, images, SIZES } from "../constants";

import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerLeft: () => <ScreenHeaderBtn iconURL={icons.menu} dimension="60%" />,
          headerRight: () => <ScreenHeaderBtn iconURL={icons.profile} dimension="100%" />,
          headerTitle: "",
        }}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: SIZES.medium,
          }}
        >
          <Welcome />
          <Popularjobs />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
