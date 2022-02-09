import * as React from 'react';
import { useRootStore } from '../store/StoreProvider';
import { useStore } from '../store/Store';
import { observer } from 'mobx-react-lite';



const TestComponent = observer(() => {

  const bbb= useStore();
  const store =useRootStore()




    
  return (
    <div>
      <div className='flex flex-col'>
      <button onClick={()=>store?.customer.setName('Bartek')}>Change name</button>
      {store?.customer.arrayCustomer.name}
      </div>
    </div>
  );
})

export default TestComponent
