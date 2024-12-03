import React from 'react'
import Image from 'next/image'
import HeroBg from '../../assets/pslide1.png'

export default function page() {
  return (
    <div><div className="container mt-5">
    
    <Image src={HeroBg} alt='' width={1120} height={200} objectFit="contain" />
    <h3 className="bg-blue text-light text-center py-2 mt-5">ABOUT US</h3>


        
        <p className='mt-5' style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
          Nulla vitae elit libero, a pharetra augue. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
        </p>
        <p style={{ textAlign: "justify" }}>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Curabitur blandit tempus porttitor. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
          Donec ullamcorper nulla non metus auctor fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p style={{ textAlign: "justify" }}>
          Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.
          Sed posuere consectetur est at lobortis. Nulla vitae elit libero, a pharetra augue.
        </p>
      </div></div>
  )
}
