const Hero = () => {
  return (
    <div className="w-full p-4 flex">
      <div className="w-3/5">
        <h2 className="text-8xl font-bold text-white text-left">Williamsburg Artistic Heaven</h2>
        <p className="text-bright-green-500 text-4xl font-semibold text-left">$200/night</p>
        <p className="text-white text-2xl text-left">Location: Williamsburg, Brooklyn, NY</p>
        <p className="text-white text-2xl text-left">📶 500Mbps</p>
        <ul className="list-disc list-inside text-white text-2xl text-left">
          <li>Spacious and well-lit</li>
          <li>Close to public transport</li>
          <li>Great neighborhood</li>
        </ul>
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg">Book Now</button>
      </div>
      <div className="w-2/5 p-4">
        <img src="/photos/PXL_20240223_112507349_1.png" alt="Image 1" className="mb-4" />
        <img src="/photos/PXL_20220822_175054220_1.png" alt="Image 2" />
      </div>
    </div>
  );
};

export default Hero;
