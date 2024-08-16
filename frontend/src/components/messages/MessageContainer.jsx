import { TiMessages  } from "react-icons/ti";

import MessageInput from "./MessageInput";
import Messages from "./Messages";

const MessageContainer = () => {
  const noChartSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {noChartSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className=" label-text">TO:</span>{" "}
            <span className="text-gray-900 font-bold ">Jon doe</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};
// <Header/>

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcom 👋 Jhon Doe </p>
        <p>Select a chat ro start messageing</p>
        <TiMessages  className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};


// STARTER CODE 

// import MessageInput from "./MessageInput"
// import Messages from "./Messages"

// const MessageContainer = () => {
//   return (
//     <div className="md:min-w-[450px] flex flex-col">
//     <>
//     <div className="bg-slate-500 px-4 py-2 mb-2">
//     <span className=" label-text">TO:</span> <span className="text-gray-900 font-bold ">Jon doe</span>
//     </div>

//     <Messages/>
//     <MessageInput/>
//     </>

//     </div>
// )
// }
// // <Header/>

// export default MessageContainer
