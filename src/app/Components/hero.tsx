import Image from 'next/image';
import "./hero.css";

function Hero() {
  return (
    <> 
      <section className="container mx-auto flex flex-col md:flex-row justify-evenly items-center mt-4 px-4">
        <div className="content h-fit w-full md:w-1/2 text-center md:text-left">
          <h1 className="title text-4xl md:text-5xl text-gray-500 pt-10 px-5">PROJECT</h1>
          <h2 className="text-3xl md:text-4xl pl-5 font-bold">Lorum</h2>
          <h3 className="text-base md:text-lg leading-8 md:leading-10 pt-5 md:pt-7 px-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corruptes hic eos, enim expit quas, commodi fugit reprehenderit obcaecati animi assumenda? Magni.
          </h3>
        </div>
        <div className="h-fit w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
          <Image
            src="/images/hero.png"
            alt="main image"
            height={800}
            width={770}
            className="max-w-full h-auto"
          /> 
        </div>
      </section>
    </>
  );
}

export default Hero;
