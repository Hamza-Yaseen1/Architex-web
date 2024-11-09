import Image from "next/image"
function Gallery() {
  return (
    <section className="about  mt-12">
        <h1 className="text-5xl ml-10 text-gray-700 font-light pl-5">Photo</h1>
        <h1 className="text-5xl ml-10 pl-5 pt-1 font-bold ">Gallery</h1>
        
        <div className="about-image-1 cursor-pointer mt-9 flex justify-evenly">
        <Image
        src={"/images/Gallery-1.png"}
        alt='main image'
        height={240}
        width={240}/> 
        <Image
        src={"/images/Gallery-2.png"}
        alt='main image'
        height={240}
        width={240}/> 
        <Image
        src={"/images/Gallery-3.png"}
        alt='main image'
        height={240}
        width={240}/> 
        </div>
        <div className="about-image-2 cursor-pointer mt-9 flex justify-evenly">
        <Image
        src={"/images/Gallery-4.png"}
        alt='main image'
        height={240}
        width={240}/> 
        <Image
        src={"/images/Gallery-5.png"}
        alt='main image'
        height={240}
        width={240}/> 
        <Image
        src={"/images/Gallery-6.png"}
        alt='main image'
        height={240}
        width={240}/> 
        </div>
        <div className="about-image-3 cursor-pointer mt-9 flex justify-evenly">
        <Image
        src={"/images/Gallery-7.png"}
        alt='main image'
        height={240}
        width={240}/> 
        <Image
        src={"/images/Gallery-8.png"}
        alt='main image'
        height={240}
        width={240}/> 
        <Image
        src={"/images/Gallery-9.png"}
        alt='main image'
        height={240}
        width={240}/> 
        </div>


    </section>
    
)
}

export default Gallery