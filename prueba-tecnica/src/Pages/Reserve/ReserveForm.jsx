import React, { useState } from 'react';
import {TextField, Autocomplete, Button, RadioGroup, FormControl, FormLabel, FormControlLabel, Radio } from '@mui/material';
import './Assets/styles.css'

function ReserveForm() {

    const [data, setData] = useState({})
    //const [params] = useSearchParams()
    const documents = [
        'CC', 'CE', 'TI', 'PAS'
    ];

    const [nombre, setNombre] = useState('');
    const [valueDocumento, setValueDocumento] = useState(null);
    const [numeroDocumento, setNumeroDocumento] = useState('');
    const [valueIndicativo, setValueIndicativo] = useState(null);
    const [numeroCelular, setNumeroCelular] = useState('')
    const countries = ['+1', '+57']

    const sendData = () => {
        setData({
            nombre_completo: nombre,
            tipo_documento: valueDocumento,
            numero_documento: numeroDocumento,
            indicativo: valueIndicativo,
            numero_celular: numeroCelular
        })

        fetch('http://localhost:8000/api/data', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  return (
    <div>ReserveForm
        <div className='form-container'>
            <FormControl>
                <div className='name'>
                    <TextField
                    type='text'
                    placeholder='Nombre completo'
                    onChange={event => setNombre(event.target.value)}
                    />
                </div>

                <div className='document'> 
                    <div className='doc-selector'>
                        <Autocomplete
                        id='document'
                        options={documents}
                        onChange={(event, newValue) => setValueDocumento(newValue)}
                        renderInput={(params) => <TextField {...params} label="Tipo de documento" />}
                        />
                    </div>
                    <TextField
                    id='document'
                    type='text'
                    placeholder='Numero de documento'
                    onChange={event => setNumeroDocumento(event.target.value)}
                    />
                </div>
                <div className='country'>
                    <div className='country-selector'>
                        <Autocomplete
                        id='country'
                        options={countries}
                        onChange={(event, newValue) => setValueIndicativo(newValue)}
                        renderInput={(params) => <TextField {...params} label="pais" />}
                        />
                    </div>
                    <TextField
                    type='text'
                    placeholder='Numero de telefono'
                    onChange={event => setNumeroCelular(event.target.value)}
                    />
                </div>
                <div>
                
                    <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </div>
                <Button variant="contained" onClick={sendData}>Reservar</Button>
            </FormControl>
        </div>
    </div>
  )
}

export default ReserveForm