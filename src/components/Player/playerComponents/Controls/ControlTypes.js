import { FaBackward,  FaForward, FaStop, FaPlay, FaPause } from "react-icons/fa";

const ControlTypes = [
    {
        name: "Backward",
        icon: <FaBackward/>,
        action: "backward"
    },
    {
        name: "Pause",
        icon: <FaPause/>,
        action: "pause"
    },
    {
        name: "Play",
        icon: <FaPlay/>,
        action: "play"
    },
    {
        name: "Stop",
        icon: <FaStop/>,
        action: "stop"
    },
    {
        name: "Forward",
        icon: <FaForward/>,
        action: "forward"
    }
]

export default ControlTypes;