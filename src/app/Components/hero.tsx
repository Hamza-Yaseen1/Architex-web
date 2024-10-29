import Image from 'next/image';
import "./hero.css"
function Hero() {
  return (
    <> 
       <section className="container flex justify-evenly mt-4">
        <div className="content h-fit w-1/2">
          <h1 className="title text-5xl text-gray-500 pt-10 p-5">PROJECT</h1>
          <h2 className='text-4xl pl-5 font-bold'>Lorum</h2>
          <h3 className='text-lg leading-10 pt-7 pl-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corruptes hic eos, enim expit quas, commodi fugit reprehenderit obcaecati animi assumenda? Magni.</h3>
        </div>
        <div className='h-fit w-1/2'>
         <Image
        src={"/images/hero.png"}
        alt='main image'
        height={800}
        width={770}/> 
    </div>
    
    </section>
  
  </>
)
}

export default Hero
