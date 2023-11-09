import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'


import './reportId.css'

function ReportId() {
    const [report, setReport] = useState(null)
    const { id } = useParams()
    useEffect(() => {
        getReport()
    }, [])

    async function getReport() {
        let res = await axios.get('http://localhost:5000/report/' + id.slice(1))
        console.log('http://localhost:5000/report/' + id.slice(1))
        setReport(res.data)
        console.log(res.data)
    }
    return (
        <div className='singleReportContainer'>
            {report != null ? <div className='singleReport'>

                {report.images ? <div className="singleReportImage">
                    <img className='singleReportImage' src={report.images} alt="" />
                </div> : <div></div>}
                {report.name ? <div className="singleReportImage">
                    <p className="reportName">{report.name}</p>
                </div> : <div></div>}
                {report.name ? <div className="singleReportImage">
                    <p className="reportName">{report.report}</p>
                </div> : <div></div>}

            </div> : <div className="none"></div>}
        </div>
    )
}

export default ReportId
