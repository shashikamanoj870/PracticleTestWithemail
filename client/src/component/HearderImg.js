import React, { Component } from 'react'
import hmeImg from '../img/Header.jpg'

const HeaderImg = () => {
    return (
        <section>
            <div style={{ backgroundImage: `url(${hmeImg})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top',
                backgroundSize: 'cover'}}>

                <div className="container " style={{minHeight: '150px'}}>
                    
                </div>
            </div>
        </section>
    )
}

export default HeaderImg;
