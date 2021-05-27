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
  
  return <div className="calendar">
    {
      calendar.map((week, index) => (
        <div key={index}>
          {week.map((day, index) => (
            <div key={index} className="day" onClick={() => setValue(day)}>
              <div className={value.isSame(day, "day") ? "chosenDay" : ""}>
                {day.format("DD")}
              </div>
            </div>
          ))}
        </div>
      ))
    }</div>
}

