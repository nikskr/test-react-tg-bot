import React from 'react'
import './ProductList.css'
import { useTelegram } from '../../hooks/useTelegram'

export default function ProductList() {

    const {} = useTelegram();

    return (
      <div className={'productList'}>
        ProductList
      </div>
    )
}