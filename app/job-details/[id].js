import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { Stack, useRouter, useLocalSearchParams } from "expo-router";
import { useCallback, useState } from "react";

import {
  Company,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
} from "../../components";
import { COLORS, SIZES, icons } from "../../constants";
import useFetch from "../../hook/useFetch";

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();

  return <Text>{params.id}</Text>;
};

export default JobDetails;
