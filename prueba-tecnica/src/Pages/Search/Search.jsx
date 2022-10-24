import { Airplane, Calendar, Record, RecordCircle, SearchNormal1, User } from 'iconsax-react'
import React, { useEffect, useState, useMemo } from 'react'
import { Autocomplete, TextField } from '@mui/material'
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import './Assets/styles.css'
import { Outlet, createSearchParams, useNavigate } from 'react-router-dom';

const Search = () => {
    const [airports, setAirports] = useState([])
    const options = []

    useEffect(() => {
      fetch('https://travelflight.pdtcomunicaciones.com/api/airports')
      .then(res => res.json())
      .then(data => setAirports(data))
      .catch(err => console.log(err))
  }, [])

    const navigate = useNavigate();
    const [dateGoing, setDateGoing] = useState(false)
    const [hidden, setHidden] = useState(true) // For departure input
    const [destino, setDestino] = useState(true)
    const [valueOrigin, setValueOrigin] = useState(null)
    const [valueDestiny, setValueDestiny] = useState(null)
    const [roundTrip, setRoundTrip] = useState(true)
    const [oneWay, setOneWay] = useState(false)
    const [passengers, setPassengers] = useState(0)
    const [passengerInput, setPassengerInput] = useState(true)
    const [departDate, setDepartDate] = useState(null)
    const [arrivalDate, setArrivalDate] = useState(null)
    const [calendar, setCalendar] = useState(true)
    const [calendarArrival, setCalendarArrival] = useState(true)

    
    const optionsFetch = useMemo(() => {
        airports.map(airport => {
            options.push(airport.name)
            return options
        })
        return options
    }, [airports])

    const changeRoundTrip = () => {
        setOneWay(false)
        setRoundTrip(true)
    }

    const changeOneWay = () => {
        setOneWay(true)
        setRoundTrip(false)
    }

    const searchFlights = async (e) => {
        const departure = {
            searchs: 10,
            qtyPassengers: passengers,
            adult: passengers,
            child: 0,
            departureCity: airports.find(airport => valueOrigin === airport.name).gcd_iata,
            arrivalCity: airports.find(airport => valueDestiny === airport.name).gcd_iata,
            hour: departDate._d.toISOString()
            }

        navigate({
            pathname: '/Flights',
            search: createSearchParams(departure).toString(),
          });
    }

  return (
    <div className='flightsHeader'>
            <div className='flightsHeader_info'>
                <div className='flightsHeader-info_flight'>
                        <div className='flightsHeader-info-flight_content'>
                            <div className='flightsHeader_logo'>
                                <Airplane size="32" color="white" variant="Bold"/>
                                <h3>vuelos</h3>
                            </div>
                            <div className='flight_sites'>
                                <div className='flight_sites_'>
                                    <div className='flight_site' onClick={e => setHidden(!hidden)}>
                                        <h2>origen</h2>
                                        <p>{valueOrigin}</p>
                                    </div>
                                    <div className={hidden ? 'hidden' : 'show'}>
                                        <Autocomplete
                                          includeInputInList
                                          id="origen"
                                          options={optionsFetch}
                                          sx={{ width: 300 }}
                                          renderInput={(params) => <TextField {...params} label="Origen" />}
                                          value={valueOrigin}
                                          onChange={(e, newValue) => setValueOrigin(newValue)}
                                        />
                                    </div>
                                    <Airplane className='flight-sites_airplane' size="32" color="white" variant="Bold"/>
                                    <div className='flight_site' onClick={() => setDestino(!destino)}>
                                        <h2>destino</h2>
                                        <p>{valueDestiny}</p>
                                    </div>
                                    <div className={destino ? 'hidden' : 'show'}>
                                        <Autocomplete
                                          includeInputInList
                                          id="destino"
                                          options={optionsFetch}
                                          sx={{ width: 300 }}
                                          renderInput={(params) => <TextField {...params} label="Destino" />}
                                          value={valueDestiny}
                                          onChange={(e, newValue) => setValueDestiny(newValue)}
                                        />
                                    </div>
                                    <div className='flight_passengers'>
                                        <h2 onClick={() => setPassengerInput(!passengerInput)}>Pasajeros <User size="30" color="#004274"/></h2>
                                        <div className={passengerInput ? 'hidden' : 'show'}>
                                            <TextField
                                                type="number"
                                                name="passengers"
                                                label="Pasajeros"
                                                min='1'
                                                value={passengers}
                                                onChange={event => setPassengers(event.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flight_selectContainer'>
                                <div className='flight_select'>
                                    <div className='flight_select_'>
                                        <div onClick={changeRoundTrip}>
                                            {roundTrip ?
                                                <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                                                :
                                                <Record style={{ cursor: 'pointer' }}    size="32" color="white"/>
                                            }
                                        </div>
                                        <p>Ida y vuelta</p>
                                    </div>
                                    <div className='flight_select_'>
                                        <div onClick={changeOneWay}>
                                            {oneWay ?
                                                <RecordCircle style={{ cursor: 'pointer' }} size="32" color="white"/>
                                                :
                                                <Record style={{ cursor: 'pointer' }}    size="32" color="white"/>
                                            }
                                        </div>
                                        <p>Solo ida</p>
                                    </div>
                                </div>
                            </div>

                            <div className='flight_dates'>
                                <div className='flight_dates_'>
                                    <div className='flight_date' onClick={() => setDateGoing(!dateGoing)}>
                                        <div onClick={(e) => setCalendar(!calendar)}>
                                            <Calendar size="32" color="#004274" variant="Bold"/>
                                        </div>
                                        <div className={calendar ? 'hidden' : 'show'} >
                                        <LocalizationProvider dateAdapter={AdapterMoment}>
                                            <DatePicker
                                                label="Departure date"
                                                renderInput={(params) => <TextField {...params} />}
                                                value={departDate}
                                                onChange={(newValue) => {
                                                setDepartDate(newValue);
                                                }}
                                            />
                                        </LocalizationProvider>
                                        </div>
                                    </div>
                                    {roundTrip ?
                                        <div className='flight_date'>
                                            <div onClick={() => setCalendarArrival(!dateGoing)}>
                                                <Calendar size="32" color="#004274" variant="Bold"/>
                                            </div>
                                            <div className={calendarArrival ? 'hidden' : 'show'} >
                                                <LocalizationProvider dateAdapter={AdapterMoment}>
                                                    <DatePicker
                                                        label="Arrival date"
                                                        renderInput={(params) => <TextField {...params} />}
                                                        value={arrivalDate}
                                                        onChange={(newValue) => {
                                                        setArrivalDate(newValue);
                                                        }}
                                                    />
                                                </LocalizationProvider>
                                            </div>
                                        </div>
                                        :
                                        <div className='flight_dateNone'>
                                            <div>
                                                <Calendar size="32" color="#004274" variant="Bold"/>
                                            </div>
                                        </div>
                                    }
                                    <Outlet />
                                    <button className='flight_searcher' onClick={(e) => searchFlights()}>
                                        <div>
                                            <SearchNormal1 size="45" color="#004274"/>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
    </div>
  )
}

export default Search