import React, {useState, useEffect} from 'react';
import moment from 'moment';
import localization from 'moment/locale/pl';
import CalendarForm from './CalendarForm';

export default function Calendar({value, onChange}) {
  const [calendar, setCalendar] = useState([]);
  const [active, setActive] = useState(false);
  const [showComponent, setShowComponent] = useState(false);
  const [reservations, setReservations] = useState(null);

  moment.updateLocale('pl', localization);
  
  const startWeek = value.clone().startOf("month").startOf("week");
  const endWeek = value.clone().endOf("month").endOf("week");
  const endMonth = value.clone().endOf("month");
  const startMonth = value.clone().startOf("month");
  // console.log(moment(startMonth).format('DD-MM-YYYY'));
  
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
                        
    useEffect(() => {
      fetch('http://localhost:3001/reservations')
      .then(response => {
        if (response.ok) {
          return response.json()
      }
      throw new Error('Komunikacja z serwerem się nie powiodła!');
      })
      .then((data) => {
        console.log(data);
        setReservations(data);
        }); 
    }, []);

    const chosenDay = (day, value) => value.isSame(day, "day");
    const yesterday = day => day.isBefore(new Date(), "day");
    const today = day => day.isSame(new Date(), "day");
    const daysOfNextMonth = day => day.isAfter(endMonth, "day");
    const daysOfPreviousMonth = day => day.isBefore(startMonth, "day");

    const currentMonth = () => value.format("MMMM");
    const currentYear = () => value.format("YYYY");
    const previousMonth = () => value.clone().subtract(1, "month");
    const nextMonth = () => value.clone().add(1, "month");
  
    const actualMonth = () => value.isSame(new Date(), "month");
    const prevToday = day => day.isBefore(new Date(), "day");

    const reservedDays = reservations && reservations.map(res => moment(res.date).format('DD-MM-YYYY'));
    console.log(reservedDays);
    
    const reservation = day => reservedDays.forEach(e => day.isSame(e, "day"));

  
  const dayStyling = (day, value) => {
    if (chosenDay(day, value)) return "pickedDay";
    if (yesterday(day)) return "yesterday";
    if (today(day)) return "today";
    if (daysOfNextMonth(day)) return "next-month";
    if (daysOfPreviousMonth(day)) return "previous-month";
    // if (reservation())return "reservedDay";
    return "";
  }
  
  return (
    <>
    <div className="container">
    <div className="row justify-content-center">
    <div className="calendar col col-lg-6">
    <div className="calendar__header">
      <div className="prevMonth" onClick={() => !actualMonth() && onChange(previousMonth())}>{!actualMonth() ? <i className="fas fa-chevron-left"></i> : null}</div>
      <div>{currentMonth()} {currentYear()}</div>
      <div className="nextMonth" onClick={() => onChange(nextMonth())}><i className="fas fa-chevron-right"></i></div>
    </div>
    <div className="calendar__grid" id="calendar">
      <div className="days">
        {["pn", "wt", "śr", "czw", "pt", "sob", "nd"].map((d, index) => (
          <div key={index} className="week">{d}</div>
        ))}
      </div>
        {calendar.map((week, index) => (
          <div key={index}>
            {week.map((day, index) => (
              <div key={index} className="day" onClick={() => !prevToday(day) && onChange(day)}>
                <div className={dayStyling(day, value)} onClick={ () => setActive(true)}>
                  {day.format("DD")}
                  {active && <i className="fas fa-plus" onClick={() => {setShowComponent(true)}}></i>}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
  </div>
  </div>
  <div className="row justify-content-center">
    <div className="col-12 col-lg-8">
    {showComponent && <CalendarForm valueDate={value}/>}
  </div>
  </div>
  <div className="reserved">
  <h3>Zarezerwowane terminy:</h3>
  {
    reservations && <ul>
      {
        reservations.map(res => <li key={res.id}>{moment(res.date).format('DD-MM-YYYY')}</li>)
      }
        </ul>
  }
  </div>
  </div>
    </>
  )
}
