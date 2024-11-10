import Image from "next/image";

function Gallery() {
  return (
    <section className="about mt-12 px-4 md:px-10">
      <h1 className="text-3xl md:text-5xl text-gray-700 font-light">Photo</h1>
      <h1 className="text-3xl md:text-5xl font-bold pt-1">Gallery</h1>
      
      {/* Row 1 */}
      <div className="about-image-1 cursor-pointer mt-6 flex flex-col md:flex-row justify-evenly gap-4 md:gap-0">
        <Image
          src="/images/Gallery-1.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
        <Image
          src="/images/Gallery-2.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
        <Image
          src="/images/Gallery-3.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
      </div>

      {/* Row 2 */}
      <div className="about-image-2 cursor-pointer mt-6 flex flex-col md:flex-row justify-evenly gap-4 md:gap-0">
        <Image
          src="/images/Gallery-4.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
        <Image
          src="/images/Gallery-5.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
        <Image
          src="/images/Gallery-6.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
      </div>

      {/* Row 3 */}
      <div className="about-image-3 cursor-pointer mt-6 flex flex-col md:flex-row justify-evenly gap-4 md:gap-0">
        <Image
          src="/images/Gallery-7.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
        <Image
          src="/images/Gallery-8.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
        <Image
          src="/images/Gallery-9.png"
          alt="main image"
          height={240}
          width={240}
          className="w-full md:w-auto"
        />
      </div>
    </section>
  );
}

export default Gallery;
