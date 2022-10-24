import React, {useState, useEffect} from 'react';
import {useSearchParams, useLocation} from 'react-router-dom'
import FlightDetails from './FlightDetails';
import uniqid from 'uniqid'

function FlightsList() {
    const [results, setResults] = useState(true)
    const [flights, setFlights] = useState([])
    const [params] = useSearchParams()
    const data = JSON.stringify({
        searchs: parseFloat(params.get("searchs")),
        qtyPassengers: parseFloat(params.get('qtyPassengers')),
        adult: parseFloat(params.get('adult')),
        child: parseFloat(params.get('child')),
        itinerary: [{
        departureCity: params.get('departureCity'),
        arrivalCity: params.get('arrivalCity'),
        hour: params.get('hour')
        }]
    })

    useEffect(() => {
        

        fetch('https://travelflight.pdtcomunicaciones.com/api/flights', {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => setFlights(data.data))
        .catch(setResults(!results))
    }, [])

  return (
    <div>
        <div>
            {results && <h1> Flights List</h1>}
            {flights.map(flight => (
                 <FlightDetails key={uniqid()}
                    segments={flight.segments}
                    fares={flight.fares}
                />
            ))}
        </div>
    </div>
    )
}

export default FlightsList