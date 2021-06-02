import React, {useState, useEffect} from 'react';
import moment from 'moment';
import localization from 'moment/locale/pl';
import CalendarForm from './CalendarForm';

export default function Calendar({value, onChange}) {
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
    
    const [reservations, setReservations] = useState(null);
    useEffect(() => {
      fetch('http://localhost:3001/reservations')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setReservations(data);
        }); 
    }, []);

  const chosenDay = (day, value) => value.isSame(day, "day");
  const yesterday = day => day.isBefore(new Date(), "day");
  const today = day => day.isSame(new Date(), "day");

  const dayStyling = (day, value) => {
    if (chosenDay(day, value)) return "pickedDay";
    if (yesterday(day)) return "yesterday";
    if (today(day)) return "today";
    return "";
  }
  
  const currentMonth = () => value.format("MMMM");
  const currentYear = () => value.format("YYYY");
  const previousMonth = () => value.clone().subtract(1, "month");
  const nextMonth = () => value.clone().add(1, "month");

  const actualMonth = () => value.isSame(new Date(), "month");
  const prevToday = day => day.isBefore(new Date(), "day");

  return (
    <>
    <div className="calendar">
    <div className="calendar__header">
      <div className="prevMonth" onClick={() => !actualMonth() && onChange(previousMonth())}>{!actualMonth() ? <i className="fas fa-chevron-left"></i> : null}</div>
      <div>{currentMonth()} {currentYear()}</div>
      <div className="nextMonth" onClick={() => onChange(nextMonth())}><i className="fas fa-chevron-right"></i></div>
    </div>
    <div className="calendar__grid">
      <div className="days">
        {["pn", "wt", "śr", "czw", "pt", "sob", "nd"].map((d, index) => (
          <div key={index} className="week">{d}</div>
        ))}
      </div>
        {calendar.map((week, index) => (
          <div key={index}>
            {week.map((day, index) => (
              <div key={index} className="day" onClick={() => !prevToday(day) && onChange(day)}>
                <div className={dayStyling(day, value)}>
                  {day.format("DD")}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
  </div>
  <CalendarForm valueDate={value}/>
    </>
  )
}
