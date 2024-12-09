import React, { useState } from 'react';
import { StyleSheet, View, Text, RefreshControl, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
const statusBarHeight = Constants.statusBarHeight;

// components
import Card from './components/Card';
import StateRouteNinetyOneSvg from './components/StateRouteNinetyOneSvg';

// data
import westboundOCData from './assets/data/westboundOC.json';
import eastboundOCData from './assets/data/eastboundOC.json';
import holidaysOCData from './assets/data/holidaysOC.json';
// import westboundI15Data from "./assets/data/westboundI15.json";
// import eastboundI15Data from "./assets/data/eastboundI15.json";
// import westboundMcKinleyData from "./assets/data/westboundMcKinley.json";
// import eastboundMcKinleyData from "./assets/data/eastboundMcKinley.json";
// import holidaysRMcKinleyData from "./assets/data/holidaysRMcKinley.json";
// import holidaysRI15Data from "./assets/data/holidaysRI15.json";
import scheduledClosures from './assets/data/scheduledClosures.json';

const getHolidayData = (data, date) => data.find((val) => new Date(val.date).toLocaleDateString() === date.toLocaleDateString());

const getPriceData = (priceData, holidayPriceData, date, eastbound = false) => {
  const priceList = [];
  for (let i = 0; i < 4; i++) {
    const newDate = new Date(date.toISOString());
    newDate.setHours(newDate.getHours() + i);
    const currentDay = newDate.getDay();
    const currentHour = newDate.getHours();

    // get regular price and account for holiday price
    const holidayData = getHolidayData(holidayPriceData, newDate);
    let price = undefined;
    let isHoliday = false;
    if (holidayData) {
      isHoliday = true;
      const boundData = eastbound ? holidayData.eastbound : holidayData.westbound;
      price = boundData[currentHour];
    }

    if (!price) {
      price = priceData[currentHour][currentDay];
    }

    // calculate hov3+ lane toll amount
    let hov3Price = 0;
    if (
      // toll is 50% between Mon-Fri 4pm - 6pm
      eastbound &&
      currentDay > 0 &&
      currentDay < 7 &&
      currentHour > 15 &&
      currentHour < 19
    ) {
      hov3Price = price - price * 0.5;
    }

    priceList.push({
      day: currentDay,
      hour: currentHour,
      price,
      hov3Price,
      isHoliday,
    });
  }

  return priceList;
};

export default function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [refreshing, setRefreshing] = useState(false);

  // check if this week will have a scheduled maintenance closure on Sunday
  const isScheduledClosureSundayWeek = scheduledClosures.find((val) => {
    const valTime = new Date(val).getTime();
    const timeDiff = valTime - currentDate.getTime();
    // 561600000ms is the diff between 0 AM Monday to 12 PM Sunday
    return timeDiff >= 0 && timeDiff <= 561600000;
  });

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
      title: 'SR-55 ⬅️ County Line',
      currentDate: currentDate,
      data: getPriceData(westboundOCData, holidaysOCData, currentDate, false),
      dynamic: false,
    },
    {
      title: 'SR-55 ➡️ County Line',
      currentDate: currentDate,
      data: getPriceData(eastboundOCData, holidaysOCData, currentDate, true),
      dynamic: false,
    },
    {
      title: 'County Line ⬅️ McKinley St',
      currentDate: currentDate,
      data: 1.95,
      dynamic: true,
    },
    {
      title: 'County Line ➡️ McKinley St',
      currentDate: currentDate,
      data: 2.15,
      dynamic: true,
    },
    {
      title: 'County Line ⬅️ I-15 North',
      currentDate: currentDate,
      data: 2.2,
      dynamic: true,
    },
    {
      title: 'County Line ➡️ I-15 North',
      currentDate: currentDate,
      data: 3.2,
      dynamic: true,
    },
    {
      title: 'County Line ⬅️ I-15 South',
      currentDate: currentDate,
      data: 3.15,
      dynamic: true,
    },
    {
      title: 'County Line ➡️ I-15 South',
      currentDate: currentDate,
      data: 2.45,
      dynamic: true,
    },
  ];

  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      {isScheduledClosureSundayWeek && (
        <View style={styles.stickyBanner}>
          <Text style={styles.bannerText}>Scheduled Closure this Sunday 6am - 12pm</Text>
        </View>
      )}
      <ScrollView
        horizontal={false}
        style={{
          ...styles.scrollViewContainer,
          marginTop: isScheduledClosureSundayWeek ? 10 : 0,
        }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <View style={styles.headerContainer}>
          <StateRouteNinetyOneSvg />
          <Text style={styles.headerText}>Express Lanes Toll Fee</Text>
        </View>
        <View style={styles.cardContainer}>
          {data.map((d) => (
            <Card key={d.title} title={d.title} currentDate={d.currentDate} data={d.data} dynamic={d.dynamic} />
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
  stickyBanner: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 25,
    marginBottom: 5,
    position: 'fixed',
    backgroundColor: '#dd062d',
    zIndex: 5,
  },
  bannerText: {
    fontWeight: 'bold',
    color: 'white',
  },
  scrollViewContainer: {
    paddingBottom: 15,
  },
  cardContainer: {
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
