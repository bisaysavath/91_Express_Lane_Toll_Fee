const convertHourCodeToClockHour = (index) => {
  switch (index) {
    case 0:
      return "12:00 am";
    case 1:
      return "1:00 am";
    case 2:
      return "2:00 am";
    case 3:
      return "3:00 am";
    case 4:
      return "4:00 am";
    case 5:
      return "5:00 am";
    case 6:
      return "6:00 am";
    case 7:
      return "7:00 am";
    case 8:
      return "8:00 am";
    case 9:
      return "9:00 am";
    case 10:
      return "10:00 am";
    case 11:
      return "11:00 am";
    case 12:
      return "12:00 pm";
    case 13:
      return "1:00 pm";
    case 14:
      return "2:00 pm";
    case 15:
      return "3:00 pm";
    case 16:
      return "4:00 pm";
    case 17:
      return "5:00 pm";
    case 18:
      return "6:00 pm";
    case 19:
      return "7:00 pm";
    case 20:
      return "8:00 pm";
    case 21:
      return "9:00 pm";
    case 22:
      return "10:00 pm";
    case 23:
      return "11:00 pm";
    default:
      return "Unknown Time";
  }
};

const roundCurrency = (amount) => (Math.round(amount * 100) / 100).toFixed(2);

export { convertHourCodeToClockHour, roundCurrency };
