import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import Home from './screens/Home/Home'
import Report from './screens/Report/Report'

import './App.css'
import Reports from './screens/Reports/Reports'
import Agencies from './screens/Agencies/Agencies'
import ReportId from './screens/ReportId/ReportId'

function App() {
    return <BrowserRouter>
        <Nav />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/agencies' element={<Agencies />} />
            <Route path='/report' element={<Report />} />
            <Route path='/report:id' element={<ReportId />} />
        </Routes>
    </BrowserRouter>
}

export default App
