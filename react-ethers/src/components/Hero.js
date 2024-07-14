const Hero = () => {
  return (
    <div className="w-full p-4 flex">
      <div className="w-3/5">
        <p>Content for the first 60% column.</p>
      </div>
      <div className="w-2/5 p-4">
        <img src="/photos/PXL_20240223_112507349_1.png" alt="Image 1" className="mb-4" />
        <img src="/photos/PXL_20220822_175054220_1.png" alt="Image 2" />
      </div>
    </div>
  );
};

export default Hero;
