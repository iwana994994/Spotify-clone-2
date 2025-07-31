import { Home, MessageCircle } from "lucide-react"
import { Link } from "react-router-dom"


const LeftSlider = () => {
  return (
    <div className=" space-y-2 m-2">
        <Link to="/" className="flex items-center gap-2  hover:bg-zinc-700 rounded-lg p-2">
        <Home className="h-6 w-6" />
        <span>Home</span>
        </Link>
           <Link to="/chat" className="flex items-center gap-2  hover:bg-zinc-700 rounded-lg p-2">
        <MessageCircle className="h-6 w-6" />
        <span>Chat</span>
        </Link>
        


    </div>
  )
}

export default LeftSlider