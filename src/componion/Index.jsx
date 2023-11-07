import React from 'react'
import '../index.css';
import { useState } from 'react';

export default function Index() {

    return (
        <>
            <div className='header'>
                To Spend 2314325 You Have a Lot of Money
            </div>
            <div>
                {product.map((item, index) => {
                    return <div>
                        <img src="{}" alt="" />
                    </div>
                }
                )}
            </div>
        </>



    )
}
