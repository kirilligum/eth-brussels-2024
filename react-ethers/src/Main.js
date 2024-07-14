import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

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
        <div className="flex">
          <div className="w-3/5 p-4">
            <p>Content for the first 60% column.</p>
          </div>
          <div className="w-2/5 p-4">
            <p>Content for the first 40% column.</p>
          </div>
        </div>
        <div className="flex">
          <div className="w-3/5 p-4">
            <p>Content for the second 60% column.</p>
          </div>
          <div className="w-2/5 p-4">
            <p>Content for the second 40% column.</p>
          </div>
        </div>
        <div className="w-full p-4">
          <p>Full-width content for images.</p>
        </div>
      </main>
    </div>
  );
}

export default Main;
