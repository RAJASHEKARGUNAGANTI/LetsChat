const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="User Avathar"
          />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hi! What is going on?
      </div>
      <div
        className={`chat-footer  opacity-50 text-xs flex gap-1 items-center`}
      >
        12:40
      </div>
    </div>
  );
};

export default Message;

// STARTER CODE

// const Message = () => {
//   return (
//     <div className="chat chat-end">
//     <div className="chat-image avatar">
//     <div className="w-10 rounded-full">
//     <img src="https://avatar.iran.liara.run/public/boy" alt="User Avathar"/>
//     </div>
//     </div>
//     <div className={`chat-bubble text-white bg-blue-500`}>Hi! What is going on?</div>
//     <div className={`chat-footer  opacity-50 text-xs flex gap-1 items-center`}>12:40</div>
//     </div>
//   )
// }

// export default Message
