import * as React from 'react';
import Button from '../components/Elements/Button';
import ButtonSwitch from '../components/Elements/ButtonSwitch';
import DatePicker from '../components/Elements/DatePicker';
import FindCustomer from '../components/Elements/FindCustomer';
import FindDevice from '../components/Elements/FindDevice';
import Layout from '../components/Layout/Layout';
import Stepper from '../components/Stepper/Stepper';

export default function AddService () {
  return (
    <Layout>
      <div>
          <div className='flex flex-col gap-3 pl-5'>
            <div>Dodaj nowy serwis:</div>
            <DatePicker/>
            <div className='flex flex-col gap-3'>
              <ButtonSwitch titleLeft={'Gwarancyjny'} titleRight={'Pogwarancyjny'} />
              <ButtonSwitch titleLeft={'Awaria'} titleRight={'Serwis'}/>
            </div>
            <FindCustomer/>
            <FindDevice/>
            {/* <Stepper title='1. Charakterystyka serwisu'>
            </Stepper>
            <Stepper title='2. Wybierz klienta'> </Stepper>
            <Stepper title='3. Wybierz urządzenia'> </Stepper> */}
          </div>
      </div>
    </Layout>
  );
}
