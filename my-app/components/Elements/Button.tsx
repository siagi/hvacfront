import { FunctionComponent } from 'react'

const Button:FunctionComponent<{title:string}> = ({title}) => {
  return (
      <button>
        <div className='flex bg-gray-600 p-3 hover:bg-blue-700 rounded-md'>
            <div>{title}</div>
        </div>
      </button>
  )
}

export default Button