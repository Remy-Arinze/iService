import React, { useState } from 'react'
import AgencyList from '../../Db/agencyListDb'
import './Agencies.css'

function Agencies() {

    const [state, setState] = useState(false)
    const [agencyState, setagencyState] = useState({
        name: '',
        img: '',
        desc: '',
        link: ''
    })

    function handleStateCheck(i) {
        if (agencyState.name !== AgencyList[i].name) {
            setState(true)

        } else {
            setagencyState({
                name: '',
            })
            setState(!state)
            console.log(agencyState.name);
        }
        setagencyState({
            name: AgencyList[i].name,
            img: AgencyList[i].agencyImg,
            desc: AgencyList[i].description,
            link: AgencyList[i].link
        })
    }
    return (
        <div className='agenciesContainer'>
            <p className="agenciesTitle"> Our Partner Agencies</p>

            <div className="agencyContent">
                <div className="agencyList">
                    {AgencyList.map((agency, i) => <div onClick={() => handleStateCheck(i)} className="agencyCard">
                        <div className="agencyImg">
                            <img src={agency.agencyImg} alt="" />
                        </div>
                        <div className="agencyDetails">
                            <h3 className="agencyName">{agency.name}</h3>
                            <p className="agencydesc">{agency.desc}</p>
                        </div>
                    </div>)}
                </div>
                {state ? <div className="agencyDescContainer">
                    <img src={agencyState.img} alt="" />
                    <div className="agencyDescription">
                        <div className="descriptionImg">
                            <img src={agencyState.img} alt="" />
                        </div>
                        <h4 className="descriptionTitle">{agencyState.name}</h4>
                        <hr />
                        <a href={agencyState.link} className="link websiteLink">
                            Official website
                        </a>
                        <hr />
                        <p className="descriptionDesc">{agencyState.desc}</p>
                    </div>
                </div> : <div></div>}
            </div>

        </div>
    )
}

export default Agencies
