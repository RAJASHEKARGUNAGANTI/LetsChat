import { useEffect } from "react";
import {useSocketContext} from "../context/SocketContext"
import useConversation from "../zustand/useCoversation"
import notificationSOund from "../assets/sounds/notification.mp3"
const useListenMessage = () => {
  const {socket} = useSocketContext()
  const {messages, setMessages} = useConversation();
  useEffect(()=>{
    socket?.on("newMessage",(newMessage) =>{
        newMessage.shouldShake = true;
        const sound = new Audio(notificationSOund);
        sound.play();
        setMessages([...messages, newMessage])
    })

    return()=> socket.off("newMessage")
  },[socket, messages, setMessages])
}

export default useListenMessage