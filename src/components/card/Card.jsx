import React from 'react'
import './card.css'


function Card() {
    return (
        <div className='container' role="main">
            <div className='card_container'>
                <div className='card_container_text'>
                    <h1>Get <span className='card_container_text_purple'>insights</span> that help your business grow.</h1>
                    <p>Discover the benefits of data analytics and make better decisions regarding revenue, customer
                        experience, and overall efficiency.</p>
                    <div className='card_container_statistics'>
                        <div className='card_container_statistics_info'>
                            <p>10k+</p>
                            <p>companies</p>
                        </div>
                        <div className='card_container_statistics_info'>
                            <p>314</p>
                            <p>templates</p>
                        </div>
                        <div className='card_container_statistics_info'>
                            <p>12m+ </p>
                            <p>queries</p>
                        </div>
                    </div>
                </div>
                <div className='card_container_image'>

                </div>
            </div>
        </div>
    )
}

export default Card