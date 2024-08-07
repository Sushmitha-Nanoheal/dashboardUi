import React from 'react';
import { Accordion, AccordionItem, Button } from "@nextui-org/react";

const Accordian = () => {

  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className='px-4'>
      <Accordion selectionMode="multiple" >
        <AccordionItem
          key="1"
          aria-label="Chung Miller"
          startContent={
            <Button isIconOnly color='primary' variant="flat" size='md' radius='full'>
              <i class="fa-solid fa-bullseye" style={{ "color": "#e61919" }}></i>
            </Button>
          }
          title="Goals"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Popular Dishes"
          startContent={
            <Button isIconOnly color='primary' variant="flat" size='md' radius='full'>
              <i class="fa-solid fa-burger" style={{ "color": "#74C0FC" }}></i>
            </Button>
          }
          title="Popular Dishes"
        >
          {defaultContent}
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Zoey Lang"
          startContent={
            <Button isIconOnly color='primary' variant="flat" size='md' radius='full'>
              <i class="fa-solid fa-bowl-food" style={{ "color": "#63E6BE" }}></i>
            </Button>
          }
          title="Menus"
        >
          {defaultContent}
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Accordian;