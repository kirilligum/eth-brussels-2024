const ImageGallery = () => {
  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center">
        <img src="/photos/Image.png" alt="Image 1" className="mb-4 w-full" />
        <div className="flex w-full">
          <img src="/photos/Image2.png" alt="Image 2" className="w-1/2 mr-2" />
          <img src="/photos/Image3.png" alt="Image 3" className="w-1/2 ml-2" />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
