import React, { useState } from 'react'
import axios from 'axios';
import './Report.css'

function Report() {

    const [reportDone, setReportDone] = useState(true);
    const [report, setReportState] = useState({
        agency: '',
        image: null,
        report: ''

    })

    async function makeReport() {

        const data = new FormData()
        data.append('agency', report.agency)
        data.append('image', report.image)
        data.append('report', report.report)

        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        try {
            const res = await axios.post('http://localhost:5000/report', data, config)
            console.log('response', res)
            setReportDone(false)

        } catch (e) { console.log(e.message, 'not working') }
    }


    return (<div className='reportContainer'>
        {reportDone ? <>
            <div className="reportCard">
                <div className="selector">
                    <input className='file' id='file' onChange={(e) => setReportState({ ...report, image: e.target.files[0] })} type="file" />
                    <label name='images' className='label' htmlFor="file">Pick an Image</label>
                </div>
                {report.image != null ? <p className="imageurl">{report.image.name}</p> : <div></div>}

                <div className="selectAgency">
                    <select className='select' onChange={(e) => setReportState({ ...report, agency: e.target.value })} name="Agencies" id="">
                        <option value="police">Nigerian Police</option>
                        <option value="efcc">Efcc Nigeria</option>
                        <option value="Nerc">Nerc Nigeria</option>
                        <option value="FireService">Nigerian Fire Service</option>
                        <option value="ICPC ">ICPC Nigeria</option>
                        <option value="PHED">Phed</option>
                        <option value="Uyo water board">Uyo water board </option>
                        <option value="SERVICOM">SERVICOM</option>

                    </select>
                </div>

                <div className="textarea">
                    <textarea onChange={(e) => setReportState({ ...report, report: e.target.value })} className='textarea' name="reportText" id="" cols="40" rows="10"></textarea>
                </div>
            </div><button onClick={() => makeReport()} className="reportBtn">
                Report
            </button>
        </> : <div className="done">
            <h4 className="reportDone">Report Submitted successfully</h4>
        </div>}

    </div>
    )
}

export default Report
