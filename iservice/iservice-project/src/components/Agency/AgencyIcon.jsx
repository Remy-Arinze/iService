import React from 'react'
import './AgencyIcon.css'

function AgencyIcon({ src, name }) {
    return (
        <div className="agencyIcon">
            <img src={src} alt="" className="agencyIconImg" />
            <p className="agencyIconName">{name}</p>
        </div>
    )
}

export default AgencyIcon
