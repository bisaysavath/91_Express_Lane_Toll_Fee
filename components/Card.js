import React, { Fragment } from "react";
import { StyleSheet, View, Text, useWindowDimensions } from "react-native";
import FutureTollAmount from "./FutureTollAmount";
import { convertHourCodeToClockHour, roundCurrency } from "../utils/helper";
import { Popable } from "react-native-popable";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Card({ title, currentDate, data, dynamic }) {
  const layout = useWindowDimensions();

  let targetWidth = 600;
  if (layout.width < 768) {
    targetWidth = layout.width * 0.95 - 40;
  }

  let currentTollAmount = {};
  const futureTollAmounts = [];

  if (dynamic) {
    currentTollAmount = {
      time: convertHourCodeToClockHour(new Date().getHours()),
      price: data,
      hov3Price: data,
      isHoliday: false,
    };
  } else {
    for (let index = 0; index < data.length; index++) {
      const { hour, price, hov3Price, isHoliday } = data[index];
      const time = convertHourCodeToClockHour(hour);
      if (index === 0) {
        currentTollAmount = { time, price, hov3Price, isHoliday };
      } else {
        futureTollAmounts.push(
          <Fragment key={time}>
            <FutureTollAmount
              time={time}
              regPrice={price}
              hov3Price={hov3Price}
              isHoliday={isHoliday}
            />
            {index < data.length - 1 && (
              <View
                style={{
                  borderLeftColor: "#737373",
                  borderLeftWidth: StyleSheet.hairlineWidth,
                }}
              ></View>
            )}
          </Fragment>
        );
      }
    }
  }

  return (
    <View style={{ ...styles.card, width: targetWidth }}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.currentTollContainer}>
        <Text style={{ alignSelf: "center", fontStyle: "italic" }}>
          {currentDate.toDateString()}
        </Text>
        <Text style={styles.time}>{currentTollAmount.time}</Text>
        <View style={styles.currentTollAmountGroup}>
          <View style={styles.currentTollAmountContainer}>
            {dynamic ? (
              <Text>
                Rate Starts At{" "}
                <Popable
                  animated={true}
                  animationType="spring"
                  style={{ width: 170 }}
                  content={
                    <View style={{ padding: 10 }}>
                      <Text style={{ color: "white", fontSize: 13, lineHeight: 18, textAlign: "center" }}>
                        Dynamically priced. The toll is higher when there is more traffic.
                      </Text>
                    </View>
                  }
                  position="top"
                >
                  <FontAwesome5 name="info-circle" color="#000000" size={13} />
                </Popable>
                :
              </Text>
            ) : (
              <Text>Regular Lane:</Text>
            )}
            <Text style={styles.currentTollAmount}>
              $ {roundCurrency(currentTollAmount.price)}
            </Text>
            {currentTollAmount.isHoliday && (
              <Text style={styles.holidayRate}>*holiday rate</Text>
            )}
          </View>
          <View style={styles.currentTollAmountContainer}>
            <Text>
              HOV3+ Lane{" "}
              <Popable
                animated={true}
                animationType="spring"
                style={{ width: 170 }}
                content={
                  <View style={{ padding: 10 }}>
                    <Text style={{ color: "white", fontSize: 13, lineHeight: 18, textAlign: "center" }}>
                      Carpools of 3+ or clean vehicle with active FastTrak transponder required.
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
              {dynamic
                ? "TBD"
                : currentTollAmount.hov3Price === 0
                ? "FREE"
                : "$" + roundCurrency(currentTollAmount.hov3Price)}
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
    elevation: 4,
    boxShadow: "0px 4px 16px 0px rgba(0, 0, 0, 0.08)",
    borderRadius: 20,
    shadowColor: "#000000",
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  currentTollContainer: {
    marginVertical: 20,
  },
  currentTollAmount: {
    fontSize: 40,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  currentTollAmountGroup: {
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
    marginBottom: 30,
  },
  futureAmount: {
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
