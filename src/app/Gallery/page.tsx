import Image from "next/image";
import Link from "next/link"; // Correct Next.js Link for navigation

type IProduct = {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  image: string;
};

function Gallery() {
  const products: IProduct[] = [
    { id: 1, name: "Sunset Ridge Estate", location: "451 Oceanview Dr, Malibu, CA", description: "Modern four-bedroom, five-bath retreat with a luxurious infinity pool and breathtaking ocean views. Open-concept design and state-of-the-art appliances.", price: "$12.75M", image: "/images/Gallery-1.png" },
    { id: 2, name: "Gardenia Haven", location: "789 Meadow Lane, Charleston, SC", description: "Beautiful three-bedroom, two-bath ranch-style home featuring lush gardens and a sunlit patio. Perfect blend of charm and convenience.", price: "$799,000", image: "/images/Gallery-2.png" },
    { id: 3, name: "Skyline Loft", location: "300 Main St, New York, NY", description: "Stunning two-bedroom, two-bath loft with 20-foot ceilings and floor-to-ceiling windows offering skyline views. Designer finishes throughout.", price: "$4.5M", image: "/images/Gallery-3.png" },
    { id: 4, name: "Aspen Mountain Chalet", location: "99 Snowpeak Rd, Aspen, CO", description: "Serene five-bedroom, six-bath chalet with ski-in/ski-out access. Warm wooden interiors and stone fireplaces create a cozy alpine escape.", price: "$18M", image: "/images/Gallery-4.png" },
    { id: 5, name: "Lakeside Retreat", location: "145 Serenity Lane, Lake Tahoe, NV", description: "Spacious four-bedroom, three-bath home on a private lakefront lot. Features include a dock, hot tub, and panoramic water views.", price: "$7.25M", image: "/images/Gallery-5.png" },
    { id: 6, name: "Villa Santorini Bliss", location: "22 Aegean Dr, Mykonos, Greece", description: "Breathtaking five-bedroom, five-bath villa overlooking the sea. Features include infinity pool, terraces, and Mediterranean architecture.", price: "€5.8M", image: "/images/Gallery-6.png" },
    { id: 7, name: "Urban Luxe Penthouse", location: "500 King St, Toronto, ON", description: "Exquisite three-bedroom, three-bath penthouse in a landmark building. Boasts private rooftop garden and designer kitchen.", price: "$3.9M", image: "/images/Gallery-7.png" },
    { id: 8, name: "Palm Oasis Villa", location: "1 Sunshine Blvd, Miami, FL", description: "Lavish six-bedroom, six-bath estate with private pool, cabana, and direct beach access. Tropical landscaping adds a paradise vibe.", price: "$15.5M", image: "/images/Gallery-8.png" },
    { id: 9, name: "The Redwood Retreat", location: "120 Forest View Dr, Napa Valley, CA", description: "Idyllic four-bedroom, four-bath property surrounded by vineyards. Includes a guest house, wine cellar, and outdoor entertaining space.", price: "$8.3M", image: "/images/Gallery-9.png" },
  ];

  return (
    <section className="about mt-12 px-4 md:px-10">
      <h1 className="text-3xl md:text-5xl text-gray-700 font-light">Photo</h1>
      <h1 className="text-3xl md:text-5xl font-bold pt-1">Gallery</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {products.map((item) => (
          <Link key={item.id} href={`/Gallery/${item.id}`}>
            <div className="about-image-2 cursor-pointer flex flex-col items-center">
              <Image
                src={item.image}
                alt={`Image of ${item.name}`}
                height={240}
                width={240}
                className="rounded-md"
              />
              <p className="text-center mt-2 font-medium">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
