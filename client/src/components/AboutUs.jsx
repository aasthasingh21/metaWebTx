import React from 'react';
import backgroundImage from '../assets/background.jpeg';
import { IoIosCheckboxOutline } from "react-icons/io";
import aboutImage from '../assets/about.jpg';

const AboutUs = () => {

    const about = [ 
        {
            id: 1,
            icon: <IoIosCheckboxOutline/>,
            bullets: 'Innovating education Solutions.'
        },
        {
            id: 2,
            icon: <IoIosCheckboxOutline/>,
            bullets: 'Lifelong learning advocates.'
        },
        {
            id: 3,
            icon: <IoIosCheckboxOutline/>,
            bullets: 'Passionate community builders.'
        },
        {
            id: 4,
            icon: <IoIosCheckboxOutline/>,
            bullets: 'Education landscape transformers.'
        },
    ]

  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='flex flex-column justify-between'>
            <div className='mx-10 pt-10 '>
                <div>
                    <p className='text-4xl font-bold'>About Us</p>
                    <p className='mt-2 mb-4 text-xl'>Empowering Futures, Enriching Minds: Discover Our Story</p>
                </div>
                <div>
                { about.map(({id, icon, bullets}) => ( // we are using mapping on about to get all the elements at once
                        <div key={id} className='flex flex-column items-center text-xl my-2'>
                            <p className='mr-2 text-black shadow'>{icon}</p>
                            <p>{bullets}</p>
                        </div>
                    ))}

                </div>
                <button className='bg-blue-300 hover:bg-blue-500 text-black font-bold py-3 px-5 m-5 rounded'><a href="/faq">Get Started</a></button>
            </div>
            <div>
                <img src={aboutImage} alt="aboutImage" className='size-35 rounded'/>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;
