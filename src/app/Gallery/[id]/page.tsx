/* eslint-disable @next/next/no-img-element */
'use client';

import React from 'react';
import { useParams } from 'next/navigation';
type IProduct = {
  id: number;
  name: string;
  location: string;
  description: string;
  price: string;
  image: string;
};
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
const Dynamic = () => {
  const params = useParams(); // Retrieve route parameters in the App Directory
  const id = params?.id;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <section className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6 text-center">
    <div className="max-w-lg">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        Product Not Found
      </h2>
      <p className="text-gray-600 mb-6">
        Oops! The product you’re looking for doesn’t exist or has been removed.
        But don’t worry, we’ve got plenty of other amazing things for you to explore.
      </p>
        <a className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-lg shadow-md hover:bg-blue-700" href='/DynamicGallery'>
          Back to Gallery
        </a>
    </div>
  
  </section>

  }
  
  
  return (
    <>
      <section className="flex flex-col md:flex-row justify-center items-center gap-2 mt-8 px-4">
      
        <div className="img h-96 w-96 rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center">
  <img 
    src={product.image} 
    alt={product.name} 
    className="h-full w-full object-cover"
  />
</div>

        <div className="content h-80 w-96 max-w-md border-0 p-6 bg-white">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
{product.name}          </h1>
          
          <p className="text-sm text-gray-600 leading-relaxed">
            {product.description}
          </p>
          <span className="text-xl font-bold text-green-600 block mb-4 pt-3">
{product.price}          </span>
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition">
<a href="/checkout">  Buy Now
</a></button>
        </div>
      </section>
    </>
  );
};

export default Dynamic;
