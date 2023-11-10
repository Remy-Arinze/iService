import React from 'react'
import './AgencyIcon.css'

function AgencyIcon({ src, name }) {
    return (
        <div className="agencyIcon">
            <div className="agencyIconImg">
                <img src={src} alt="" className="agencyIconImg" />

            </div>
            <p className="agencyIconName">{name}</p>
        </div>
    )
}

export default AgencyIcon
