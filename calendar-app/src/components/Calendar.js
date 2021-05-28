import React, {useState, useEffect} from 'react';
import moment from 'moment';
import localization from 'moment/locale/pl';

export default function Calendar() {
  const [value, setValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  moment.locale('pl', localization);

  const startWeek = value.clone().startOf("month").startOf("week");
  const endWeek = value.clone().endOf("month").endOf("week");
  
  useEffect(() => {
    const day = startWeek.clone().subtract(1, "day");
    const arr = [];
    while(day.isBefore(endWeek, "day")) {
      arr.push(
        Array(7).fill("d").map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(arr);
  }, [value]);

  const chosenDay = day => value.isSame(day, "day");
  const yesterday = day => day.isBefore(new Date(), "day");
  const today = day => day.isSame(new Date(), "day");

  const dayStyling = (day, value) => {
    if (chosenDay(day, value)) return "pickedDay";
    if (yesterday(day)) return "yesterday";
    if (today(day)) return "today";
    return "";
  }
  
  return <div className="calendar">
    {
      calendar.map((week, index) => (
        <div key={index}>
          {week.map((day, index) => (
            <div key={index} className="day" onClick={() => setValue(day)}>
              <div className={dayStyling(day, value)}>
                {day.format("DD")}
              </div>
            </div>
          ))}
        </div>
      ))
    }</div>
}

