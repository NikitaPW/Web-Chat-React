import React, {useState,useEffect} from 'react';
import './SideBar.css';
import {Avatar, IconButton} from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {SearchOutlined} from "@material-ui/icons";
import SidebarChat from "./SideBarChat";
import db from '../firebase';
import { useStateValue } from '../StateProvider';

function Sidebar(props) {

    const [rooms, setRooms] = useState([]);
    const [{user},dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot(snapshot => (
            setRooms(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )

            ))
        ));

        return () => {
            unsubscribe();
        }
    },[]); 

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={user?.photoURL}/>
                <div className="sidebar-header-right">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                    
                </div>
            </div>
            <div className="sidebar-search">
                <div className="search-container">
                    <SearchOutlined />
                    <input className="search-input" type="text" placeholder="Search or start new chat"/>
                </div>
            </div>
            <div className="sidebar-chats">
                
                {rooms.map(room=> (
                    <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
                ))}
            </div>
            <div className="new-message-container">
                <SidebarChat addNewChat/>
            </div>
        </div>
    );
}

export default Sidebar;