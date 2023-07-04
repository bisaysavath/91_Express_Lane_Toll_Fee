import React from "react";
import { StyleSheet, View, Text } from "react-native";
import FutureTollAmount from "./FutureTollAmount";
import { convertHourCodeToClockHour, roundCurrency } from "../utils/helper";
import { Popable } from "react-native-popable";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Card({
  title,
  priceData,
  currentHour,
  currentDay,
  eastbound = false,
}) {
  let currentTollAmount = {};
  const futureTollAmounts = [];
  const numberOfFutureHours = 4;
  const maxHours = 24;
  const daysInWeek = 7;

  for (let i = 0; i < numberOfFutureHours; i++) {
    if (currentHour + 1 >= maxHours) {
      currentDay++;
    }
    let hov3DiscountPercentage = 100;

    const adjustedDay = currentDay % daysInWeek;
    const adjustedHour = (currentHour + i) % maxHours;

    if (
      eastbound &&
      adjustedDay >= 1 &&
      adjustedDay <= 5 &&
      adjustedHour >= 16 &&
      adjustedHour <= 18
    ) {
      // between Mon and Fri 4-6 pm
      hov3DiscountPercentage = 50;
    }

    const time = convertHourCodeToClockHour(adjustedHour);
    let tollAmount = priceData[adjustedHour][adjustedDay];

    let isHoliday = false;
    if (typeof tollAmount === "string") {
      isHoliday = true;
      tollAmount = parseFloat(tollAmount.replace("*", ""));
    }
    const hov3PlusLaneAmount =
      tollAmount - tollAmount * (hov3DiscountPercentage / 100);
    if (i === 0) {
      currentTollAmount = { time, tollAmount, hov3PlusLaneAmount, isHoliday };
    } else {
      futureTollAmounts.push(
        <FutureTollAmount
          key={time}
          time={time}
          regPrice={tollAmount}
          hov3Price={hov3PlusLaneAmount}
          isHoliday={isHoliday}
        />
      );
    }
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.currentTollContainer}>
        <Text style={styles.time}>{currentTollAmount.time}</Text>
        <View style={styles.currentTollAmountGroup}>
          <View style={styles.currentTollAmountContainer}>
            <Text>Regular Lane:</Text>
            <Text style={styles.currentTollAmount}>
              ${roundCurrency(currentTollAmount.tollAmount)}
            </Text>
            {currentTollAmount.isHoliday && (
              <Text style={styles.holidayRate}>*holiday rate</Text>
            )}
          </View>
          <View style={styles.currentTollAmountContainer}>
            <Text>
              HOV3+ Lane{" "}
              <Popable
                content={
                  <View
                    style={{
                      padding: 10,
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      color: "white",
                    }}
                  >
                    <Text>
                      Carpool with 3+ people and active FastTrak transponder
                      required.
                    </Text>
                  </View>
                }
                position="top"
              >
                <FontAwesome5 name="info-circle" color="#000000" size={13} />
              </Popable>
              :
            </Text>
            <Text style={styles.currentTollAmount}>
              {currentTollAmount.hov3PlusLaneAmount === 0
                ? "FREE"
                : "$" + roundCurrency(currentTollAmount.hov3PlusLaneAmount)}
            </Text>
            {currentTollAmount.isHoliday && (
              <Text style={styles.holidayRate}>*holiday rate</Text>
            )}
          </View>
        </View>
        <Text>{currentTollAmount.isHoliday}</Text>
      </View>
      <View style={styles.futureAmount}>{futureTollAmounts}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    backgroundColor: "white",
    elevation: 10,
    boxShadow: "5px 10px 20px 0px rgba(46, 61, 73, 0.35)",
    borderRadius: 20,
    shadowColor: "black",
    shadowRadius: 10,
    shadowOffset: {
      width: 5,
      height: 10,
    },
    shadowOpacity: 0.35,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  currentTollContainer: {
    marginVertical: 15,
    marginBottom: 0,
    gap: 5,
  },
  currentTollAmount: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  currentTollAmountGroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  currentTollAmountContainer: {
    flex: 1,
    alignItems: "center",
  },
  time: {
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  futureAmount: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  holidayRate: {
    fontStyle: "italic",
    backgroundColor: "orange",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
});
