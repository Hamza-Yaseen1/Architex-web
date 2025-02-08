import Image from "next/image";
import "./project.css";
import Button from "./button";

function Projects() {
  return (
    <section className="projects p-4 md:p-8">
      <h1 className="text-3xl md:text-5xl text-gray-700 pt-6   md:pt-9 pl-2 md:pl-12 font-light text-center md:text-left">
        Our Projects
      </h1>
      <section className="project-images space-y-6 md:space-y-0">

        
        {/* First Row */}
        <div className="line-1 h-80 flex flex-col md:flex-row justify-around pt-6 md:pt-9 gap-4">
          
          {/* Box 1 */}
          <div className="box-1 relative h-60 md:h-80 w-full md:w-1/2">
            <Image
              src="/images/project image 1.png"
              alt="main image"
              layout="fill"
              objectFit="cover"
              className="filter grayscale rounded"
            />
            <div className="absolute inset-0 flex flex-col items-start p-4 bg-black bg-opacity-50">
              <h2 className="text-white text-2xl md:text-4xl font-bold">
                Sample 
                <br />
                Projects
              </h2>
              <div className="button pt-4">
                <Button text="View More" bg="bg-transparent" color="text-white"/>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="box-2 relative h-60 md:h-80 w-full md:w-1/2">
            <Image
              src="/images/project image 2.png"
              alt="main"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>
        
        {/* Second Row */}
        <div className="line-2 h-80 flex flex-col md:flex-row justify-around gap-4">
          <div className="box1-1 relative h-60 md:h-80 w-full md:w-1/3">
            <Image
              src="/images/project image 3.png"
              alt="main"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="box1-2 relative h-60 md:h-80 w-full md:w-1/3">
            <Image
              src="/images/project image 4.png"
              alt="main"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
          <div className="box1-3 relative h-60 md:h-80 w-full md:w-1/3">
            <Image
              src="/images/project image 5.png"
              alt="main"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
          </div>
        </div>

        {/* Show Projects Button */}
        <div className="show-projects flex justify-center md:justify-end pr-0 md:pr-4 pb-2">
          <Button text="ALL PROJECTS" bg="bg-black" color="text-white"/>
        </div>
        
      </section>
    </section>
  );
}

export default Projects;
