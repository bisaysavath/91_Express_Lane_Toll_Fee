const convertHourCodeToClockHour = (index) => {
  switch (index) {
    case 0:
      return "12:00am";
    case 1:
      return "1:00am";
    case 2:
      return "2:00am";
    case 3:
      return "3:00am";
    case 4:
      return "4:00am";
    case 5:
      return "5:00am";
    case 6:
      return "6:00am";
    case 7:
      return "7:00am";
    case 8:
      return "8:00am";
    case 9:
      return "9:00am";
    case 10:
      return "10:00am";
    case 11:
      return "11:00am";
    case 12:
      return "12:00pm";
    case 13:
      return "1:00pm";
    case 14:
      return "2:00pm";
    case 15:
      return "3:00pm";
    case 16:
      return "4:00pm";
    case 17:
      return "5:00pm";
    case 18:
      return "6:00pm";
    case 19:
      return "7:00pm";
    case 20:
      return "8:00pm";
    case 21:
      return "9:00pm";
    case 22:
      return "10:00pm";
    case 23:
      return "11:00pm";
    default:
      return "Unknown Time";
  }
};

const roundCurrency = (amount) => (Math.round(amount * 100) / 100).toFixed(2);

export { convertHourCodeToClockHour, roundCurrency };
