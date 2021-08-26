//front-end
import Image from 'next/image'
//back-end

function SmallCard ({ img, location, distance }) {
  return (
    <div className='smallCard'>
      <div
        className='
      relative 
      h-16 
      w-16
      '
      >
        <Image src={img} layout='fill' className='rounded-lg' />
      </div>
      <div
        className='
      
      '
      >
        <h2 className='font-bold '>{location}</h2>
        <h3 className='font-medium text-gray-400'>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
