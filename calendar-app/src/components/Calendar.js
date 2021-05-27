import React from 'react';
import moment from 'moment';
import localization from 'moment/locale/pl';

export default function Calendar() {
  const value = moment()
  moment.locale('pl', localization);
  const startWeek = value.clone().startOf("month").startOf("week");
  const endWeek = value.clone().endOf("month").endOf("week");
  const day = startWeek.clone().subtract(1, "day");

  const calendar = [];

  while(day.isBefore(endWeek, "day")) {
    calendar.push(
      Array(7).fill("d").map(() => day.add(1, "day").clone())
    );
  }

  return <div className="calendar">
    {
      calendar.map((week, index) => (
        <div key={index}>
          {week.map((day, index) => (
            <div key={index} className="day">{day.format("D")}</div>
          ))}
        </div>
      ))
    }</div>
}

