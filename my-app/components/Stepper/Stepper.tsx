import * as React from 'react';
import { FunctionComponent, useState } from 'react';

const Stepper = ({title, children}:{title:string,children:any}) => {
    const [open,setOpen] = useState<boolean>(false);
  return(
      <div>
            <div className={`ease-in-out transition-[height] duration-300 delay-100 bg-gray-200  ${open? 'h-56' :'h-12'} flex flex-col overflow-hidden`}>
                <div onClick={()=>setOpen(!open)} className='cursor-pointer bg-gray-200 hover:bg-gray-300 pb-6'>{title}</div>
                <div className='flex pt-7'>
                    {children}
                </div>
        
            </div>
      </div>
  );
};

export default Stepper;
