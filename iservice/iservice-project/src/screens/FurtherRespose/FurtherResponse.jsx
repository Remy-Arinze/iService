import React from 'react'
import './FurtherResponse.css'
import { FaPhoneVolume, FaArrowRight, FaClock } from 'react-icons/fa'
import { Swiper, SwiperSlide, } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


import firstAids from '../../Db/firstAid';
import SimpleMap from './Map';

function FurtherResponse() {
    return (
        <div className='FRContainer'>

            <div className="endFrame">

                <div className="map">
                    <SimpleMap />

                </div>
                <div className="detailsResponse"></div>
                <div className="team">
                    <p className="res"> <span> {<FaClock color='grey' />} </span> Response to your emergency is on the way</p>
                    <p className="teamtTIt">Emergency teams take less than 20mins to get on scene</p>
                </div>
            </div>

            <div className="leftFrame">
                <div className="firstFrame">
                    <div className="hellNeeded">
                        <h3 className="needHelp">
                            Emergency help needed ?
                        </h3>
                        <p className="tapTheButton">
                            Just tap the button to place a call!
                        </p>
                    </div>
                </div>

                <div className="button">
                    <FaPhoneVolume className='callIcon' color='white' size={50} />
                </div>

                <div className="thirdFrame">
                    <h4 className="needHelp">
                        Not sure what to do ?
                    </h4>
                    <p className="tapTheButton">
                        Pick any subject to chat !
                    </p>
                </div>
                <div className="srollableRow">
                    <Swiper className=''
                        modules={[Pagination,]}
                        loop={true}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {firstAids.map((report, i) => <SwiperSlide key={report.title} className='firstAidSlide'>

                            <h3 className="firstAidTitle">{report.title}</h3>

                            <FaArrowRight size={12} color='red' />

                        </SwiperSlide>
                        )}


                    </Swiper>
                </div>

            </div>






        </div>
    )
}

export default FurtherResponse