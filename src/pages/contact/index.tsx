import React from 'react'
import Image from 'next/image'
import HeroBg from '../../assets/pslide2.png'

export default function page() {
  return (
   <div className="container mt-5 text-center">
    
    <Image src={HeroBg} alt='' width={1120} height={200} objectFit="contain" />        
    <h3 className="bg-blue text-light text-center py-2 mt-5">CONTACT US</h3>
        <p className="lead mb-5 mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
       <h5 className='mt-4'>Adress</h5>
       <p>m dolor sit amet, consectetur adipiscing</p>
       <h5>Contact No:</h5>
       <p>234567890</p>
      </div>
  )
}

