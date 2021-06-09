import React, {useState} from "react";
import './App.scss';
import Navbar from './components/Navbar';
import Calendar from './components/Calendar';
import Footer from './components/Footer';
import moment from 'moment';



function App() {
  const [value, setValue] = useState(moment());
  return (
    <div className="App container">
      <Navbar/>
      <Calendar value={value} onChange={setValue}/>
      <Footer/>
    </div>
  );
}

export default App;
