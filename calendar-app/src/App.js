import React, {useState} from "react";
import './App.scss';
import Calendar from './components/Calendar';
import moment from 'moment';
import FetchDate from "./components/FetchDate";



function App() {
  const [value, setValue] = useState(moment());
  return (
    <div className="App">
      <Calendar value={value} onChange={setValue}/>
      {/* {console.log(value)} */}
      {value.toString()}
      <FetchDate />
    </div>
  );
}

export default App;
