import React, {useState} from "react";
import './App.scss';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import moment from 'moment';



function App() {
  const [value, setValue] = useState(moment());
  return (
    <div className="App container">
      <div className="row">
        <div className="col-12">
          <Navbar/>
        </div>
      </div>
      <Calendar value={value} onChange={setValue}/>
    </div>
  );
}

export default App;
