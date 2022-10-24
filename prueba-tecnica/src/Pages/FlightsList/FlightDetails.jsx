import React, { useState } from 'react';
import './Assets/styles.css'
import FlightSegments from './FlightSegments';
import { Radio } from '@mui/material';
import { useSearchParams, useNavigate, createSearchParams } from 'react-router-dom';

function FlightDetails({segments, fares}) {

    const navigate = useNavigate()

    const [params] = useSearchParams();
    const [userDetails, setUserDetails] = useState({})
    let totalFareAmount = Number(fares.paxFareDetail.totalFareAmount)
    let totalTaxAmount = Number(fares.paxFareDetail.totalTaxAmount)
    let total = totalFareAmount + totalTaxAmount

    const sendFormData = () => {
        setUserDetails({
            passengers: params.get('qtyPassengers'),
            adult: params.get('adult'),
            child: params.get('child'),
            itinerary: segments
        })
        console.log(userDetails);

        navigate({
            pathname:'/Checkout',
            search: createSearchParams(userDetails).toString()
        })
    }

  return (
    <div className='flight-container'>
        <div className='flight-details'>
            {segments.map(detail => (
                <FlightSegments
                hourArrival={detail.productDateTime.timeOfArrival}
                hourDeparture={detail.productDateTime.timeOfDeparture}
                airline={detail.airline.name}
                destiny={detail.location[1].locationId}
                origin={detail.location[0].locationId}
                dateGoing={detail.productDateTime.dateOfDeparture}
                terminal={detail.location[1].terminal}
                image={detail.airline.image}
                />
            ))} 
        </div>
        <div className='flight-price'>Flight price
            <div>
                ${total}
            </div>
            <div className='flight-purchase'>
                <button className='comprar' onClick={sendFormData}>Comprar</button>
            </div>
        </div>
    </div>
  )
}

export default FlightDetails