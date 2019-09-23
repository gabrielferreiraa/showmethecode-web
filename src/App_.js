import React from "react";
import io from "socket.io-client";
import { Link } from "react-router-dom";

const endpoint = "http://localhost:9000";

var socket = io(endpoint, {
  transports: ["websocket"],
});

const App_ = () => {
  const [roomsCount, setRoomsCount] = React.useState(0);
  const [code, setCode] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [roomCode, setRoomCode] = React.useState("");
  const [rooms, setRooms] = React.useState([]);

  React.useEffect(() => {
    socket.on("roomsUpdated", rooms => {
      setRooms(rooms);
    });
  }, [rooms]);

  React.useEffect(() => {
    socket.on("roomsCountUpdated", count => {
      setRoomsCount(count);
    });
  }, [roomsCount]);

  React.useEffect(() => {
    socket.on("codeUpdated", code => {
      setCode(code);
    });
  }, [code]);

  React.useEffect(() => {
    socket.on("newRoom", data => {
      console.log(data);
    });
  }, []);

  const changeCode = async code => {
    setCode(code);
    socket.emit("codeUpdated", code);
  };

  const enterRoom = async () => {
    const res = await fetch("http://localhost:9000/room", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user: author,
        code: roomCode
      })
    });

    console.log(res);
  };

  const newRoom = async () => {
    const res = await fetch("http://localhost:9000/room", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        owner: author
      })
    });

    console.log(res);
  };

  return (
    <>
      <div>
      <label htmlFor="user">user id: ({author})</label>
        <input
          type="text"
          id="user"
          onChange={e => setAuthor(e.target.value)}
        />
        <label htmlFor="roomCode">room code</label>
        <input
          type="text"
          id="roomCode"
          onChange={e => setRoomCode(e.target.value)}
        />
        <Link to={`/room/${roomCode}/${author}`}>entrar na sala</Link>
      </div>
      <hr />
      <div>
        <label htmlFor="author">user id: ({author})</label>
        <input
          type="text"
          id="author"
          onChange={e => setAuthor(e.target.value)}
        />
      </div>
      <hr />
      <div>
        <h3>enter room</h3>
        <label htmlFor="author">user id: ({author})</label>
        <input
          type="text"
          id="author"
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          type="text"
          id="roomCode"
          placeholder="root code"
          onChange={e => setRoomCode(e.target.value)}
        />
        <button onClick={enterRoom}>enter</button>
        <hr />
        <h3>new room</h3>
        <button onClick={newRoom}>create</button>
      </div>
      <div>
        <h1>created rooms: {roomsCount}</h1>
      </div>
      <textarea
        value={code}
        placeholder="//codigo"
        onChange={e => changeCode(e.target.value)}
      >
        {code}
      </textarea>
      <hr />
      <table>
        <thead>
          <tr>
            <th>owner</th>
            <th>id</th>
            <th>code</th>
            <th>users</th>
          </tr>
        </thead>
        <tbody>
          {rooms.length > 0 &&
            rooms.map(room => {
              return (
                <tr key={room.code}>
                  <td>{room.owner.name}</td>
                  <td>{room.owner._id}</td>
                  <td>{room.code}</td>
                  <td>
                    <ul>
                      {room.users.length > 0 &&
                        room.users.map((user, index) => (
                          <li key={index}>{user.name}</li>
                        ))}

                    </ul>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default App_;
