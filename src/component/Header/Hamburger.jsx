import React from 'react'
import './Hamburger.css'
export default function Hamburger({isActive}) {
    return (
        <>
            <div className='hamburger'>
                <div className={isActive?"burger active_b1":"burger inactive_b1"}></div>
                <div className={isActive?"burger active_b2":"burger inactive_b2"}></div>
                <div className={isActive?"burger active_b3":"burger inactive_b3"}></div>
            </div>
            {/* <style jsx>{`
                .hamburger{
                width:2em;
                }
            `}</style> */}
        </>
    )
}
