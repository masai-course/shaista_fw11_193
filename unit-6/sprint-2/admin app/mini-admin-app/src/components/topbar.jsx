import React from 'react'
import "./topbar.css"
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
export default function Topbar() {
    return (
        <>
        <div className='topbar-main'>
            <div className='topbar-items'>
            <AutoAwesomeIcon/>  Student management
            
            <div>
            Contests
            </div>
            <div>
            Student 
            </div>
            <div>
            <NotificationsActiveIcon/>
            </div>
            </div>
        </div>
        </>
    )
}
