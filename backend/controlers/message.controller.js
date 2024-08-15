import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"


export const sendMessage = async (req, res)=>{
    try {
        const { message} =req.body;
        const {id: recevierId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId, recevierId]},
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId, recevierId],
            })
        }

        const newMessage = new Message({
            senderId,
            recevierId,
            message,
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        //SOCKET IO FUNCTIONALITY HERE

        
        // await newMessage.save();
        // await conversation.save();

        //this will run in paraller 
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage)
        console.log('sendMessage', req.params.id);

    } catch (error) {
        console.log("Error in sending message: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}

export const getMessages = async (req, res) => {
    try {
        const {id: userToChatId}= req.params;
        const senderId = req.user._id;
        const conversation = await Conversation.findOne({
            participants:{$all:[senderId, userToChatId]},
        }).populate("messages"); // not references direcr messages from message schema

        if(!conversation) return res.status(200).json([]);
        const messages = conversation.messages;
        res.status(200).json(conversation.messages);

    } catch (error) {
        console.log("Error in sending getMessages: ", error.message);
        res.status(500).json({error: "Internal server error"});
    }
}