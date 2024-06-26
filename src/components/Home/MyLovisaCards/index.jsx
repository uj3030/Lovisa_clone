// import React from 'react';
// import Photo from '../../../assets/images/home/bg-5.jpg';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

// const MyLovisaCards = () => {
//   return (
//     <div className='flex justify-center items-center w-full h-[30vh] mt-40 relative'>
//       <div className='h-[29vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
//       <div className='h-[29vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
//       <div className='h-[29vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
//       <div className='h-[29vh] w-[17vw] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}></div>
//       <div className='h-[29vh] w-[17vw] bg-cover bg-center bg-no-repeat relative' style={{ backgroundImage: `url(${Photo})`, margin: '1px', backgroundSize: 'cover' }}>

//         {/* Instagram Icon */}
//         <div className='absolute inset-0 bg-red-100 opacity-0 hover:opacity-80 flex justify-center items-center transition-opacity duration-300'>
//           <div className='absolute inset-0 bg-red-100 opacity-0 hover:opacity-80 flex justify-center items-center transition-opacity duration-300'></div>

//           {/* <FontAwesomeIcon icon={faInstagram} size="5x" color="#000" /> */}
//           </div>

//         </div>
//       </div>
//       );
// }
//       export default MyLovisaCards;




import React from 'react';
import Photo from '../../../assets/images/home/bg-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const MyLovisaCards = () => {
  return (
    <div className='flex justify-center items-center w-full h-[30vh] mt-40 relative'>
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className='h-[29vh] w-[17vw] bg-cover bg-center bg-no-repeat relative hover:opacity-50 transition-opacity duration-300 hover:bg-pink-200' style={{ backgroundImage: `url(${Photo})`, margin: '1px' }}>
          <div className='absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-70 transition-opacity duration-300'>
            <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
          </div>
        </div>
      ))}
    </div>
  );
}
export default MyLovisaCards;




