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
import holidaysRMcKinleyData from "./assets/data/holidaysRMcKinley.json";
import holidaysRI15Data from "./assets/data/holidaysRI15.json";

const getHolidayData = (data, date) =>
  data.find(
    (val) =>
      new Date(val.date).toLocaleDateString() === date.toLocaleDateString()
  );

const getPriceData = (priceData, holidayPriceData, date, eastbound = false) => {
  const currentDay = date.getDay();
  const currentHour = date.getHours();

  const holidayData = getHolidayData(holidayPriceData, date);
  let price = 0;
  let isHoliday = false;
  if (holidayData) {
    isHoliday = true;
    const boundData = eastbound ? holidayData.eastbound : holidayData.westbound;
    price = boundData[currentHour];
  } else {
    price = priceData[currentHour][currentDay];
  }

  let hov3Price = 0;
  if (
    eastbound &&
    currentDay > 0 &&
    currentDay < 7 &&
    currentHour > 15 &&
    currentHour < 19
  ) {
    hov3Price = price - price * 0.5;
  }

  return { day: currentDay, hour: currentHour, price, hov3Price, isHoliday };
};

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

  const nextHourDate = new Date(currentDate.toISOString());
  nextHourDate.setHours(nextHourDate.getHours() + 1);

  const nextTwoHoursDate = new Date(currentDate.toISOString());
  nextTwoHoursDate.setHours(nextTwoHoursDate.getHours() + 2);

  const nextThreeHoursDate = new Date(currentDate.toISOString());
  nextThreeHoursDate.setHours(nextThreeHoursDate.getHours() + 3);

  const data = [
    {
      title: "SR-55 ⬅️ County Line",
      currentDate: currentDate,
      data: [
        getPriceData(westboundOCData, holidaysOCData, currentDate),
        getPriceData(westboundOCData, holidaysOCData, nextHourDate),
        getPriceData(westboundOCData, holidaysOCData, nextTwoHoursDate),
        getPriceData(westboundOCData, holidaysOCData, nextThreeHoursDate),
      ],
    },
    {
      title: "SR-55 ➡️ County Line",
      currentDate: currentDate,
      data: [
        getPriceData(eastboundOCData, holidaysOCData, currentDate, true),
        getPriceData(eastboundOCData, holidaysOCData, nextHourDate, true),
        getPriceData(eastboundOCData, holidaysOCData, nextTwoHoursDate, true),
        getPriceData(eastboundOCData, holidaysOCData, nextThreeHoursDate, true),
      ],
    },
    {
      title: "County Line ⬅️ McKinley St",
      currentDate: currentDate,
      data: [
        getPriceData(westboundMcKinleyData, holidaysRMcKinleyData, currentDate),
        getPriceData(
          westboundMcKinleyData,
          holidaysRMcKinleyData,
          nextHourDate
        ),
        getPriceData(
          westboundMcKinleyData,
          holidaysRMcKinleyData,
          nextTwoHoursDate
        ),
        getPriceData(
          westboundMcKinleyData,
          holidaysRMcKinleyData,
          nextThreeHoursDate
        ),
      ],
    },
    {
      title: "County Line ➡️ McKinley St",
      currentDate: currentDate,
      data: [
        getPriceData(eastboundMcKinleyData, holidaysRMcKinleyData, currentDate),
        getPriceData(
          eastboundMcKinleyData,
          holidaysRMcKinleyData,
          nextHourDate,
          true
        ),
        getPriceData(
          eastboundMcKinleyData,
          holidaysRMcKinleyData,
          nextTwoHoursDate,
          true
        ),
        getPriceData(
          eastboundMcKinleyData,
          holidaysRMcKinleyData,
          nextThreeHoursDate,
          true
        ),
      ],
    },
    {
      title: "County Line ⬅️ I-15",
      currentDate: currentDate,
      data: [
        getPriceData(westboundI15Data, holidaysRI15Data, currentDate),
        getPriceData(westboundI15Data, holidaysRI15Data, nextHourDate),
        getPriceData(westboundI15Data, holidaysRI15Data, nextTwoHoursDate),
        getPriceData(westboundI15Data, holidaysRI15Data, nextThreeHoursDate),
      ],
    },
    {
      title: "County Line ➡️ I-15",
      currentDate: currentDate,
      data: [
        getPriceData(eastboundI15Data, holidaysRI15Data, currentDate, true),
        getPriceData(eastboundI15Data, holidaysRI15Data, nextHourDate, true),
        getPriceData(
          eastboundI15Data,
          holidaysRI15Data,
          nextTwoHoursDate,
          true
        ),
        getPriceData(
          eastboundI15Data,
          holidaysRI15Data,
          nextThreeHoursDate,
          true
        ),
      ],
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
        <View style={styles.cardContainer}>
          {data.map((d) => (
            <Card
              key={d.title}
              title={d.title}
              currentDate={d.currentDate}
              data={d.data}
            />
          ))}
        </View>
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
    paddingBottom: 15,
  },
  cardContainer: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    flexWrap: "wrap",
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
