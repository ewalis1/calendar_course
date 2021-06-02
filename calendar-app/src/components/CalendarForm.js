import { useState } from 'react';

const CalendarForm = ({valueDate}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        let date = JSON.stringify({valueDate}) ;
        const reservation = {name, surname, date}
        
        fetch('http://localhost:3001/reservations', {
            method: 'POST',
            headers: {'Content-Type' : 'application/JSON'},
            body: JSON.stringify(reservation)
        }).then(() => {
            console.log('New reservation added');
        })
    }
    return (
        <div className="form__calendar">
            <h2>Wybierz termin szkolenia:</h2>
            <form onSubmit={handleSubmit}>
                <label>Imię:</label>
                <input type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                <label>Nazwisko:</label>
                <input type="text"
                required
                value={surname}
                onChange={e => setSurname(e.target.value)}
                />
                <label>Data szkolenia:</label>
                <input type="date" 
                required
                value={valueDate.format("YYYY-MM-DD")}
                onChange={e => e.target.value}
                />
                <button className="form__button">Zarezerwuj</button>
            </form>
        </div>
    );
}
 
export default CalendarForm;