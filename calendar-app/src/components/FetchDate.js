import React, {useState, useEffect} from "react";

export default function FetchDate () {
    const [reservations, setReservations] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/reservations')
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            const transformedReservationData = data.map(reservationsData => {
                return {
                    id: reservationsData.id,
                    name: reservationsData.name,
                    surname: reservationsData.surname,
                    date: reservationsData.date
                }
            });
            // setReservations(transformedReservationData);
        }, []);
    });
    return <button onClick={setReservations}>Zarezerwuj!</button>
}