import React, { useState } from 'react'
import './Product.css'

export default function Product(props) {



    const pageType = (elem) => {
        if (props.page === 'cart') {
            return (<button onClick={() => props.del(props.Prod.id)} > X </button>)
        } else {
            return (<button onClick={() => props.add(props.Prod.id)} > + </button>)
        }
    }
    return (
        <div className='Product'>
            <div className='container' >
                <div className='infoSlot' style={{ minWidth: '10px' }} >{props.Prod.id}</div>
                <div className='infoSlot' style={{ minWidth: '300px' }}>{props.Prod.name}</div>
                <div className='infoSlot' style={{ minWidth: '50px' }}>{props.Prod.price} ₪</div>
                {pageType()}
            </div>
        </div>
    )
}