import React from 'react'
import logo from "../../public/assets/logo/logo.png"
import Image from 'next/image'
function Loader() {
    return (
        <div>
            <div className='flex justify-center items-center h-screen'>
                <Image src={logo} alt='logo' className='h-52 w-80' />
            </div>
        </div>
    )
}

export default Loader