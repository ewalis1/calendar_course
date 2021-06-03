import { useState } from 'react';

const CalendarForm = ({valueDate}) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [isPending, setIsPending] =useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        let date = JSON.stringify({valueDate});
        const reservation = {name, surname, email, phone, date}
        setIsPending(true);
        
        fetch('http://localhost:3001/reservations', {
            method: 'POST',
            headers: {'Content-Type' : 'application/JSON'},
            body: JSON.stringify(reservation)
        }).then(() => {
            console.log('New reservation added');
            setIsPending(false);
        })
    }
    
    return (
        <div className="form__calendar">
            <h2>Zarezerwuj termin szkolenia:</h2>
            <form onSubmit={handleSubmit}>
                <label>Imię:</label>
                <input type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                /><br/>
                <label>Nazwisko:</label>
                <input type="text"
                required
                value={surname}
                onChange={e => setSurname(e.target.value)}
                /><br/>
                <label>e-mail:</label>
                <input type="email" 
                required
                value={email}
                onChange={e => setEmail(e.target.value)}/><br/>
                <label>Numer telefonu:</label>
                <input type="number" 
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}/><br/>
                <label>Data szkolenia:</label>
                <input type="date" 
                required
                value={valueDate.format("YYYY-MM-DD")}
                onChange={e => e.target.value}
                /><br/>
                <div className="div-btn">
                { !isPending && <button className="form__button">Zarezerwuj</button>}
                { isPending && <button disabled className="form__btn form__btn__disabled">Dodawanie rezerwacji...</button>}
                </div>
            </form>
        </div>
    );
}
 
export default CalendarForm;