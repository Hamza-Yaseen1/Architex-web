import Image from "next/image";
import Button from "./button";

function About() {
  return (
    <section className="relative h-custom435 top-16 about">
      <div className="flex justify-evenly p-10 pt-4 pb-0 h-full text-center bg-lightGray">
        
        {/* Image Section */}
        <div className="h-full w-1/2 flex flex-col gap-5">
          <div className="flex gap-3 h-full">
            
            {/* Left Image Column */}
            <div className="flex flex-col gap-3 w-1/2">
              <div className="relative h-2/3 w-full">
                <Image
                  src="/images/about-1.png"
                  alt="Image 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
              <div className="relative h-1/3 w-full">
                <Image
                  src="/images/about-3.png"
                  alt="Image 2"
                  layout="fill"
                  objectFit="cover"
                  className="rounded"
                />
              </div>
            </div>

            {/* Right Image */}
            <div className="relative w-1/2 h-full">
              <Image
                src="/images/about-2.png"
                alt="Image 3"
                layout="fill"
                objectFit="cover"
                className="rounded"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="about-content  w-3/4 pl-16  ">
          <h1 className="text-5xl font-semibold text-gray-600 ">ABOUT</h1>
          <p className="text-gray-700 leading-8 pt-8 pb-0">
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.`}
          </p>
<div className="about-btn pl-28 pt-9">
<Button text="READ MORE" bg="bg-custom-light-blue" color="text-black"/>

</div>
        </div>
        
      </div>

    </section>
  );
}

export default About;
