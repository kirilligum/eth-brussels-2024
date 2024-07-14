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
      {/* <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white"> */}
      {/*   <div className="flex flex-col items-center justify-center text-center"> */}
      {/*     <div className="mb-6"> */}
      {/*       <div className="inline-flex items-center justify-center"> */}
      {/*         <img src="/logo.png" alt="logo" /> */}
      {/*       </div> */}
      {/*     </div> */}
      {/*     <h1 className="text-4xl font-bold mb-4">Onboard the world</h1> */}
      {/*     <p className="text-lg mb-16">Web3 login for <span className="text-blue-400">everyone</span>.</p> */}
      {/*     <DynamicWidget /> */}
      {/*   </div> */}
      {/*   <div className="flex mt-16 space-x-4 "> */}
      {/*     <a href="https://docs.dynamic.xyz/" target="_blank" rel="noreferrer" className="p-4 inline-flex items-center justify-center rounded-lg border-2 border-[#3B3636] shadow-lg w-64"> */}
      {/*       <h2 className="font-semibold">Docs</h2> */}
      {/*     </a> */}
      {/*     <a href="https://demo.dynamic.xyz/" target="_blank" rel="noreferrer" className="p-4 inline-flex items-center justify-center border-2 border-[#3B3636] rounded-lg shadow-lg w-64"> */}
      {/*       <h2 className="font-semibold">Demo</h2> */}
      {/*     </a> */}
      {/*     <a href="https://app.dynamic.xyz/" target="_blank" rel="noreferrer" className="p-4 inline-flex items-center justify-center border-2 border-[#3B3636] rounded-lg shadow-lg w-64"> */}
      {/*       <h2 className="font-semibold">Dashboard</h2> */}
      {/*     </a> */}
      {/*   </div> */}
      {/* </div> */}
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
      <footer className="bg-transparent text-white p-4 grid grid-cols-4 gap-4">
        <div>
          <p>Footer column 1</p>
        </div>
        <div>
          <p>Footer column 2</p>
        </div>
        <div>
          <p>Footer column 3</p>
        </div>
        <div>
          <p>Footer column 4</p>
        </div>
      </footer>
    </div>
  );
}

export default Main;
