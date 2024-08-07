import React from 'react';
import { Input, Avatar, Button } from '@nextui-org/react';
import SearchIcon from '../Images/SearchIcon';
import { headerItems } from './NavbarItems';

const Header = () => {
  const headerItem = headerItems();

  return (
    <div className='flex w-full border-b border-divider p-4 justify-between'>
      <Input startContent={<SearchIcon className={`text-large text- pointer-events-none flex-shrink-0 `} />}
        size='sm' className='max-w-sm' type="email" variant={"faded"} label="" placeholder='Search...' />
      <div className='flex flex-row gap-2 items-center'>
        {headerItem?.map((data, index) => {
          return <Button isIconOnly size='sm' radius='full'>{data.icon}</Button>
        })}
        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026704d' size='sm' />
      </div>
    </div>
  )
}

export default Header;