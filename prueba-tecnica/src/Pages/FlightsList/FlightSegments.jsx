import React from 'react';
import './Assets/styles.css'

function FlightSegments(props) {
  return (<>
            <div className='flight-titles'>
                <div className='flight-section'>{props.dateGoing}</div>
                <div className='flight-section'>{props.origin}</div>
                <div className='flight-section'>{props.destiny}</div>
            </div>

            <div className='flight-titles'>
                <div className='airline'>
                    <div className='flight-section'>
                        <img src={`https://travelflight.pdtcomunicaciones.com/${props.image}`} style={{width: '50px'}} />
                    </div>
                    <div className='flight-section'>
                        {props.airline}
                    </div>  
                </div>
                <div className='hour-depart'>
                    <div className='flight-section'>
                        {props.hourDeparture}
                    </div>
                    {
                        props.terminal ?
                        <div className='flight-section'>{props.terminal}</div> :
                        null
                    }
                </div>
                <div className='flight-section'>
                    {props.hourArrival}
                </div>
            </div>
        </>
  )
}

export default FlightSegments;