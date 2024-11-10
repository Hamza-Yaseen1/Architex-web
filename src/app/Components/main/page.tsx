import Image from "next/image";
import Link from "next/link";

function WorkInProgress() {
  return (
    <section className="flex justify-center items-center h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg">
        <Image
          src="/images/Logo.png" 
          alt="Under Construction"
          width={150}
          height={150}
          className="mx-auto mb-6"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Work in Progress</h1>
        <p className="text-lg text-gray-600 mb-6">
          We're currently working hard to bring this page to life. Please check back soon!
        </p>
        <p className="text-md text-gray-500 mb-4">
          If you need anything urgently, feel free to{" "}
          <Link href="/contact" className="text-blue-500 hover:underline">
            contact us
          </Link>.
        </p>
        <Link href="/"className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-full">
        
            Go Back to Home
        </Link>
      </div>
    </section>
  );
}

export default WorkInProgress;
