import React, { useState } from 'react'
import './Form.css'
import { useTelegram } from '../../hooks/useTelegram'

export default function Form() {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [subject, setSubject] = useState('physical');


    const {} = useTelegram();

    return (
      <div className={'form'}>
        <h3>Введите ваши данные</h3>
        <input className={'input'} type='text' placeholder={'Страна'} />
        <input className={'input'} type='text' placeholder={'Улица'} />
        <select className={'select'}>
            <option value={'physical'}>Физ. лицо</option>
            <option value={'legal'}>Юр. лицо</option>
        </select>
      </div>
    )
}