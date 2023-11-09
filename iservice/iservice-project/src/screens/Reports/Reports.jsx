import axios from 'axios';
import './Reports.css'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'

function Reports() {
    const [reportArray, setdataArray] = useState([])

    useEffect(() => {
        getData()
    })

    async function getData() {
        const res = await axios.get('http://localhost:5000/reports')
        setdataArray(res.data)
    }

    return (
        <div  >
            {reportArray.length > 0 ? <p className="recent">Recent reports</p> : <div></div>}
            <div className='reportsContainer'>
                {reportArray.length > 0 ? reportArray.map((report, i) => {
                    return <Link className='toid' to={`/report:${report._id}`}>
                        <div className="reportslides">
                            <p className="name"><span className='header'>By: </span> {report.name} </p>
                            <p className="reportId">Agency: {report.agency} </p>
                            <p className="reportId">TicketId: {report._id} </p>
                        </div>
                    </Link>
                }) : <div className='noReports'>you have made no reports</div>}
            </div>
        </div>
    )
}

export default Reports
