import Image from "next/image";
import Button from "./button";

function About() {
  return (
    <section className="relative h-auto md:h-custom435 top-16 about overflow-hidden">
      <div className="flex flex-col md:flex-row justify-evenly p-4 md:p-10 pt-4 pb-0 h-full text-center md:text-left bg-lightGray">
        
        {/* Image Section */}
        <div className="h-full w-full md:w-1/2 flex flex-col gap-5 mb-8 md:mb-0">
          <div className="flex gap-3 h-full">
            
            {/* Left Image Column */}
            <div className="flex flex-col gap-3 w-1/2">
              <div className="relative h-48 md:h-2/3 w-full">
                <Image
                  src="/images/about-1.png"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded max-w-full"
                />
              </div>
              <div className="relative h-24 md:h-1/3 w-full">
                <Image
                  src="/images/about-3.png"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded max-w-full"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-1/2 h-48 md:h-full">
              <Image
                src="/images/about-2.png"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded max-w-full"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content w-full md:w-3/4 md:pl-16">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-600">ABOUT</h1>
          <p className="text-gray-700 leading-7 md:leading-8 pt-6 md:pt-8 pb-0">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
          </p>
          <div className="about-btn pt-6 md:pt-9 flex justify-center md:justify-start">
            <Button text="READ MORE" bg="bg-custom-light-blue" color="text-black" />
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default About;
