import { DynamicWidget } from "@dynamic-labs/sdk-react-core";
import Hero from "./components/Hero";
import Description from "./components/Description";
import ImageGallery from "./components/ImageGallery";

const Main = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex justify-between items-center p-4 bg-transparent text-white">
        <h1 className="text-2xl font-bold">Air Stack'n'Stay</h1>
        <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
          <span className="mr-2">🔍</span>
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="outline-none w-full"
          />
          <span className="ml-2">🏠</span>
        </div>
        <DynamicWidget />
      </header>
      <main className="flex-grow">
        <Hero />
        <div className="flex w-full">
          <Description />
          <div className="w-2/5 p-4">
            <p>Content for the second 40% column.</p>
          </div>
        </div>
        <ImageGallery />
      </main>
    </div>
  );
}

export default Main;
