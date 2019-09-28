import io from "socket.io-client";

export default io(process.env.REACT_APP_SOCKET_HOST, {
    transports: ["websocket"],
});
