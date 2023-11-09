import React from 'react'
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Link } from 'react-router-dom';
import AgencyIcon from '../../components/Agency/AgencyIcon'

import './Home.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import reportArray from '../../Db/db';
import reviews from '../../Db/reviewDb';

function Home() {
    return <div className="homepage">
        <div className="container">
            <div className="contentArea">
                <h2 className="titleText">
                    Making a complaint is a civic right <br />
                    Reporting a <span className="crimeSpan">Crime</span> is a civic duty
                </h2>
                <p className="subtitle">
                    let us see what you see, make a complaint today
                </p>
                <Link to='/report'>
                    <button className="landingBtn">
                        Register a complaint
                    </button>
                </Link>
            </div>
        </div>

        <div class="agenciesStrip">
            <AgencyIcon src={require("../../assets/efcc.png")} name='Efcc Nigeria' />
            <AgencyIcon src={require("../../assets/fireService.png")} name='Nigerian Fire-service' />
            <AgencyIcon src={require("../../assets/Nigerianpolice.png")} name='Nigeria police' />
            <AgencyIcon src={require("../../assets/icpc.png")} name='Icpc Nigeria' />
            <AgencyIcon src={require("../../assets/nerc.png")} name='Nerc' />
            <AgencyIcon src={require("../../assets/servicom.jpeg")} name='SERVICOM' />
            <AgencyIcon src={require("../../assets/ncc.png")} name='NCC Nigeria' />

        </div>


        <div className="feedback">
            <h2 className="citizenFeedback"> Citizen Feedback</h2>

            <Swiper className='swiper'
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                loop={true}
                autoplay={{ delay: 2000 }}
                spaceBetween={50}
                slidesPerView={1}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {reportArray.map((report, i) => <SwiperSlide className='slide'>
                    <div className="slideImg">

                    </div>
                    <h3 className="reportName">Anonymous</h3>
                    <p className="reportmsg">{report.report}</p>
                    <p className="date">{report.date}</p>
                </SwiperSlide>
                )}

                ...
            </Swiper>
        </div>

        <div className="lastpage">
            <h2 className="bigText">Anywhere, <br /> anytime</h2>
            <p className="littleText">Experience the flexibility and ease of getting your voice head and your reports handled </p>

            <div className="reviews">
                {reviews.map((review, i) => <div className='reviewCard'>
                    <div className="reviewHeader">
                        <div className="reviewImg">
                        </div>
                        <h4 className="reviewName">{review.name}</h4>
                    </div>
                    <p className="reviewText">{review.review}</p>
                </div>)}
            </div>
        </div>
    </div>

}

export default Home
