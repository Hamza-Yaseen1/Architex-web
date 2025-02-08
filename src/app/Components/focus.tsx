function Focus() {
  return (
    <div className="relative top-28 focus-sec text-gray-700 h-auto md:h-96 p-4">
      <h2 className="text-3xl md:text-5xl pl-4 md:pl-8 text-center md:text-left">
        Main Focus/Mission Statement
      </h2>
      <section className="flex flex-col md:flex-row justify-center pt-6 md:pt-9 gap-8 md:gap-20 h-auto">
        
        {/* Focus Item 1 */}
        <div className="focus-item flex flex-col md:flex-row items-center md:items-start">
          <h3 className="text-6xl md:text-9xl">1</h3>
          <div className="w-full md:w-60 text-base md:text-lg pt-2 md:pt-4 pl-0 md:pl-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </div>
        </div>

        {/* Focus Item 2 */}
        <div className="focus-item flex flex-col md:flex-row items-center md:items-start">
          <h3 className="text-6xl md:text-9xl">2</h3>
          <div className="w-full md:w-60 text-base md:text-lg pt-2 md:pt-4 pl-0 md:pl-4 text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            efficitur, lectus et facilisis placerat.
          </div>
        </div>
        
      </section>
      <br /><br />
      <br />
    </div>
  );
}

export default Focus;
