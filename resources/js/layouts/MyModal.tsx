import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MyModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => {
    if(!isOpen){
      setIsOpen(true);
    }
    else if(isOpen){
      setIsOpen(false);
    }
    console.log(isOpen);
  };

  return (
    <>
      <div className={`modal ${isOpen ? '' : 'hidden'}`}>
        <div className="modal-content absolute top-0 left-0 bg-white w-full h-200">
          <div className="modal-header px-3 py-5">
            <img src="assets/img/nav/logo-black.png" alt="" className='w-36'/>
          </div>
          <div className='modal-content gap-1 flex flex-col text-center text-xl font-bold'>
                <Link to={'#'} className='hover:bg-blue-1 hover:text-white py-5'>About</Link>
                <Link to={'#'} className='hover:bg-blue-1 hover:text-white py-5'>Contact</Link>
                <Link to={'#'} className='hover:bg-blue-1 hover:text-white py-5'>Add new claim</Link>
                <Link to={'#'} className='hover:bg-blue-1 hover:text-white py-5'>MyClaims</Link>
                <Link to={'#'} className='hover:bg-blue-1 hover:text-white py-5'>Payment</Link>
                <Link to={'#'} className='hover:bg-blue-1 hover:text-white py-5'>Profile</Link>
          </div>
        </div>
      </div>
      <button onClick={handleOpenModal} className='absolute top-8 right-5'>
          <svg viewBox="0 0 24 24" className="first-letter:h-10 w-10 stroke-slate-100 tablet:hidden">
            { isOpen ? <path  d="M 5 5 l 15 18 M 20 5 l -15 18 " fill="none" stroke-width="2" stroke-linecap="round" className='stroke-slate-700'></path> :
                       <path  d="m5 12 h15 0 M5 6 h15 M5 18 h15" fill="none" stroke-width="2" stroke-linecap="round"></path>}
          </svg>      
      </button>
    </>
  );
};

export default MyModal;