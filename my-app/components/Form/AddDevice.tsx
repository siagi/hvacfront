import { useRef } from "react";

const AddDevice = () => {
    const elementsToFix = useRef<HTMLDivElement>(null);
    const addElementToFixList = () => {
        console.log('asd')
        const element = document.createElement('input');
        element.style.background = '#e4e4e7';
        element.style.paddingLeft = '10px';
        element.style.paddingRight = '3px';
        element.style.paddingBottom = '5px';
        element.style.paddingTop = '5px';
        element.style.border = '1px solid #d4d4d8'
        element.style.marginTop = '5px';
        element.style.outline = 'none'
        element.style.fontSize = '14px'
        element.addEventListener('focus', (e:any)=>{
            e.target.style.background = '#fff';
        });
        element.addEventListener('blur', (e:any)=>{
            e.target.style.background = '#e4e4e7';
        })
        console.log(element)
        elementsToFix.current?.appendChild(element);
    }

  return (
    <div className="px-5 mx-3 my-3 border">
        <div className="px-3 pt-2" >
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
            <div className="pb-1">
                Dane urządzenia:
            </div>
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
                Marka urządzenia
            </label>
            <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="grid-first-name" type="text" placeholder="Jane"/>
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
                Typ
            </label>
            <select name="cars" id="cars" className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none">
                <option value="volvo">Ścienny</option>
                <option value="saab">Kaseta</option>
            </select>
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
                Rodzaj serwisu
            </label>
            <select name="cars" id="cars" className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none">
                <option value="volvo">Awaria</option>
                <option value="saab">Konserwacja</option>
            </select>
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
                Moc urządzenia
            </label>
            <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="grid-first-name" type="text" placeholder="Jane"/>
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
                Rodzaj czynnika chłodniczego
            </label>
            <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="grid-first-name" type="text" placeholder="Jane"/>
            <label className="font-semibold text-sm" htmlFor="grid-first-name">
                Nr seryjny
            </label>
            <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="grid-first-name" type="text" placeholder="Jane"/>
            </label>
        </div>
        <div className="grid grid-cols-12">
                            <div className="px-3 pt-2 mb-6 col-start-1 col-span-11 flex flex-col" ref={elementsToFix}>
                                <label className="font-semibold text-sm" htmlFor="grid-first-name">
                                    <div className="pb-1">
                                        Wypisz usterki:
                                    </div>
                                </label>
                                <input className="text-sm form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 font-normal text-zico-700 bg-zinc-200 bg-clip-padding border border-solid border-zico-300 transition ease-in-out m-0 focus:text-zico-700 focus:bg-white focus:text-black focus:border-zico-600 focus:outline-none" id="grid-first-name" type="text" placeholder="Jane"/>
                            </div>
                            <div className="col-start-12 flex items-end pb-6">
                                <button type="button" onClick={addElementToFixList}><svg className="h-8 w-8 text-black"  width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg></button>
                            </div>
                        </div>
    </div>
  )
}

export default AddDevice