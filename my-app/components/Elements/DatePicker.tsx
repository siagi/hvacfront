import { MutableRefObject, useRef, useState } from "react"


const DatePicker=() => {
    const inputDate = useRef<HTMLInputElement | null>(null);
    const [date,setDate] = useState<string | null>(null)
  return (
        <>
        <div>
            <div className="w-1/3">
            <label typeof="date">{date ? 'Zmień datę': 'Wybierz datę' }</label>
            <input
                ref={inputDate}
                type="date"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Wybierz date" 
                onChange={(e)=>{
                    console.log(e);
                    if(inputDate.current)setDate(inputDate.current.value)
                    }} />
            </div>
        </div>
      
      </>
  )
}

export default DatePicker