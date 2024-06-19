import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { roundCurrency } from "../utils/helper";

export default function TollAmount({ time, regPrice, hov3Price, isHoliday }) {
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{time}</Text>
      <View style={styles.tollGroup}>
        <Text style={styles.label}>Reg.:</Text>
        <View style={isHoliday && styles.isHoliday}>
          <Text style={styles.tollAmount}>${roundCurrency(regPrice)}</Text>
        </View>
      </View>
      <View style={styles.tollGroup}>
        <Text style={styles.label}>HOV3+:</Text>
        <View style={isHoliday && styles.isHoliday}>
          <Text style={styles.tollAmount}>
            {hov3Price > 0 ? "$" + roundCurrency(hov3Price) : "FREE"}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
  },
  time: {
    fontSize: 10,
    fontWeight: "bold",
  },
  label: {
    fontSize: 12,
  },
  holidayRate: {
    fontStyle: "italic",
  },
  tollGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  tollAmount: {
    fontSize: 14,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  isHoliday: {
    borderBottomColor: "orange",
    borderBottomWidth: 1,
  },
});
