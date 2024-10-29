import Image from "next/image";

function About() {
  return (
    <section className=" relative h-custom435 top-16">
      <div className="about flex  p-10 pt-4 h-custom435 justify-evenly text-center bg-lightGray">
        <div className="images   h-96 w-1/2">
        <div className="about-images pl-2 grid grid-cols-2 gap-2">
  <Image
    src="/images/about-1.png"
    alt="Image 1"
    height={200}
    width={200}
    className="w-full"
  />
  <Image
    src="/images/about-2.png"
    alt="Image 2"
    height={200}
    width={200}
    className="w-full"
  />
  
  <Image
    src="/images/about-3.png"
    alt="Image 3"
    height={200}
    width={200}
    className="col-span-2 w-full mx-auto"
  />
</div>


        </div>
        <div className="about-content  h-96 w-4/5 p-5 pl-0">
          <h1 className="text-5xl text-gray-500">ABOUT</h1>
          <p className="p-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
