import React from 'react';
import { User } from '@nextui-org/react';
import { customerList } from '../Navbar/NavbarItems';

const CustomerFeedback = () => {

  const reviewData = customerList();

  return (
    <div className='flex flex-col pt-2 px-4'>
      {reviewData?.map((data) => {
        const images = data.avatar;
        return <div className='border-b border-divider pt-2'>
          <User
            avatarProps={{ radius: "", src: `${images}` }}
            name={data.name}
          >
          </User>
          <p className='pt-2'>
            {data.ratedStar.map((data) => <i class="fa-solid fa-star" style={{ "color": "#FFD43B" }}></i>)}
            {data.notRated.map((data) => <i class="fa-solid fa-star" style={{ "color": "#FFFFFF" }}></i>)}</p>
          <p className='py-2'>{data.review}</p>
        </div>
      })}
    </div>
  )
}

export default CustomerFeedback;