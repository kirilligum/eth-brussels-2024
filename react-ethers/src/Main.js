import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Main = () => {
  return (
    <>
      <div className="absolute top-0 left-0 m-4">
        <h1 className="text-white font-bold text-2xl">Air Stack'n'Stay</h1>
      </div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-4">
        <div className="flex items-center border border-gray-300 rounded-lg p-2 bg-white">
          <span className="mr-2">🔍</span>
          <input
            type="text"
            placeholder="Where do you want to stay?"
            className="outline-none w-full"
          />
          <span className="ml-2">🏠</span>
        </div>
      </div>
      <div className="absolute top-0 right-0 m-4 flex items-center justify-center">
        <DynamicWidget />
      </div>
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
    </>
  );
}

export default Main;
