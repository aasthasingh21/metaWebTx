import React from 'react';
import backgroundImage from '../assets/background.jpeg';
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';

const FAQPage = () => {

    const [isOpen, setIsOpen] = useState(false); // to control the faq state

    const toggleOpen = () => { // when clicked on arrowicon toggleOpen is triggered
      setIsOpen(!isOpen);
    }

    const FAQ = [
        {
            id: 1,
            question:'What subjects are covered on the websites?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 2,
            question:'Are the resources on the website free to access?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 3,
            question:'Do you offer interactive learning activities?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 4,
            question:'Is the content on the website suitable for different grade levels?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
        {
            id: 5,
            question:'Can teachers use the website in their classrooms?',
            answer:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        },
          
    ]

  return (
    <div className='bg-cover bg-center h-screen' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='max-w-3xl mx-auto mt-8'>
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-center">FAQ</h1>
                    <p className='text-2xl mt-2 mb-4'>Explore answers to common inquiries about our educational platform</p>
                </div>

                <div className="border border-gray-200 rounded-lg mb-4 mt-4">
                    {FAQ.map(({id, question, answer }) => ( // we use mapping to get all the element
                        <div key={id} className="bg-gray-100 text-xl px-4 py-3 cursor-pointer">
                            <div className='flex justify-between items-center'>
                                <p className="font-semibold">{question}</p>
                                <IoIosArrowDown onClick={toggleOpen}>{isOpen ? false : true }</IoIosArrowDown> 
                            </div> 
                            
                            {isOpen && ( // if its open show the answer
                                <div className="py-3 border-t border-gray-200">
                                    <p>{answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
};

export default FAQPage;
