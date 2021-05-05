import React, {useEffect, useState} from 'react';
import './SideBarChat.css';
import { Avatar, IconButton } from "@material-ui/core";
import db from "../firebase";
import { Link } from "react-router-dom";
import AddIcon from '@material-ui/icons/Add';

function SideBarChat({id, name, addNewChat}) {
    const [seed, setSeed] = useState("");
    const [message, setMessages] = useState("");

    useEffect(() => {
        if (id) {
            db.collection('rooms').doc(id).collection('messages').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
                setMessages(snapshot.docs.map((doc) => doc.data()))
            ));
        }
    })

    const createChat = () => {
        const roomName = prompt("Please enter name of chat");
        
        if (roomName) {
            //database
            db.collection('rooms').add({
                name: roomName,
            });
        }
    };
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
        <div className="sidebar-chat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
            <div className="sidebar-chat-info">
                <h2>{name}</h2>
                <p>{message[0]?.message}</p>
            </div>
            </div>
            </Link>
    ) : (
            <div  className='sidebar-chat'>
                <IconButton onClick={createChat}>
                    <AddIcon />
                </IconButton>
                <h2 >Add new chat</h2>
            </div>
    )
            
}

export default SideBarChat
