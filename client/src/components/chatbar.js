import React, { useEffect, useState } from "react";


const ChatBar = ({ socket }) => {
    const [users, setUser] = useState([])

    useEffect(() => {
        socket.on('NewUserRsponse', (data) => setUser(data))
    }, [socket, users])
    return (<>
        <div className="chat__sidebar">
            <h2>Open to Chats </h2>
            <div>
                <div className="chat__header">
                    <h4>Active Chat Users</h4>
                    <div className="chat__users">
                        {users.map((user) => <p key={user.socketID}>{user.userName}</p>)}
                    </div>
                </div>
            </div>
        </div>

    </>)
}

export default ChatBar