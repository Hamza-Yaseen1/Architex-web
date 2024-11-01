import Image from "next/image";
import "./project.css";
import Button from "./button";

function Projects() {
  return (
    <section className="projects">
      <h1 className="text-5xl text-gray-700 pt-9  pl-7 font-light">Our Projects</h1>
      <section className="project-images">
        <div className="line-1 h-80 flex justify-around pt-9">
          <div className="box-1 relative">
            <Image
              src="/images/project image 1.png"
              alt="main image"
              layout="fill"
              objectFit="cover"
              className="filter grayscale"
            />
            <div className="absolute inset-0 flex flex-col items-start pl-4  pt-6 bg-black bg-opacity-50">
              <h2 className="text-white text-4xl font-bold">
                Sample 
                <br />
                Projects
              </h2>
              
              <div className="button pt-4 ">
              <Button text="View More" bg="bg-transparent" color="text-white"/>
                </div>            </div>
          </div>

          <div className="box-2 relative">
            <Image
              src="/images/project image 2.png"
              alt="main"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className="line-2 h-80 pt-7 flex justify-around">
          <div className="box1-1 relative">
            {" "}
            <Image
              src="/images/project image 3.png"
              alt="main"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="box1-2 relative">
            {" "}
            <Image
              src="/images/project image 4.png"
              alt="main"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="box1-3 relative">
            {" "}
            <Image
              src="/images/project image 5.png"
              alt="main"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
       <div className="show-projects flex justify-end pr-4 pb-2">
       <Button text="ALL PROJECTS" bg="bg-black" color="text-white"/>
       </div>
      </section>
    </section>
  );
}

export default Projects;
