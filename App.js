import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  RefreshControl,
  ScrollView,
  SafeAreaView,
} from "react-native";
import Constants from "expo-constants";
const statusBarHeight = Constants.statusBarHeight;

// components
import Card from "./components/Card";
import StateRouteNinetyOneSvg from "./components/StateRouteNinetyOneSvg";

// data
import westboundOCData from "./assets/data/westboundOC.json";
import eastboundOCData from "./assets/data/eastboundOC.json";
import holidaysOCData from "./assets/data/holidaysOC.json";
import westboundI15Data from "./assets/data/westboundI15.json";
import eastboundI15Data from "./assets/data/eastboundI15.json";
import westboundMcKinleyData from "./assets/data/westboundMcKinley.json";
import eastboundMcKinleyData from "./assets/data/eastboundMcKinley.json";
import holidaysRData from "./assets/data/holidaysR.json";

const getOCHoliday = (date) =>
  holidaysOCData.find(
    (val) =>
      new Date(val.date).toLocaleDateString() === date.toLocaleDateString()
  );

const getRHoliday = (date) =>
  holidaysRData.find(
    (val) =>
      new Date(val.date).toLocaleDateString() === date.toLocaleDateString()
  );

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setCurrentDate(new Date());
      setRefreshing(false);
    }, 1200);
  };

  const currentDay = currentDate.getDay();
  const currentHour = currentDate.getHours();

  const ocHolidayData = getOCHoliday(currentDate);
  if (ocHolidayData) {
    for (let hour = 0; hour < westboundOCData.length; hour++) {
      westboundOCData[hour][currentDay] = ocHolidayData.westbound[hour] + "*";
      eastboundOCData[hour][currentDay] = ocHolidayData.eastbound[hour] + "*";
    }
  }

  const rHolidayData = getRHoliday(currentDate);
  if (rHolidayData) {
    for (let hour = 0; hour < westboundOCData.length; hour++) {
      westboundMcKinleyData[hour][currentDay] =
        rHolidayData.westboundMcKinley[hour] + "*";
      eastboundMcKinleyData[hour][currentDay] =
        rHolidayData.eastboundMcKinley[hour] + "*";
      westboundI15Data[hour][currentDay] =
        rHolidayData.westboundI15[hour] + "*";
      eastboundI15Data[hour][currentDay] =
        rHolidayData.eastboundI15[hour] + "*";
    }
  }

  const data = [
    {
      title: "SR-55 ⬅️ County Line",
      data: westboundOCData,
      eastbound: false,
    },
    {
      title: "SR-55 ➡️ County Line",
      data: eastboundOCData,
      eastbound: true,
    },
    {
      title: "County Line ⬅️ McKinley St",
      data: westboundMcKinleyData,
      eastbound: false,
    },
    {
      title: "County Line ➡️ McKinley St",
      data: eastboundMcKinleyData,
      eastbound: true,
    },
    {
      title: "County Line ⬅️ I-15",
      data: westboundI15Data,
      eastbound: false,
    },
    {
      title: "County Line ➡️ I-15",
      data: eastboundI15Data,
      eastbound: true,
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView
        horizontal={false}
        style={styles.scrollViewContainer}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.headerContainer}>
          <StateRouteNinetyOneSvg />
          <Text style={styles.headerText}>Express Lanes Toll Fee</Text>
        </View>
        {data.map((d) => (
          <Card
            key={d.title}
            title={d.title}
            priceData={d.data}
            currentDay={currentDay}
            currentHour={currentHour}
            eastbound={d.eastbound}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    marginTop: statusBarHeight,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
