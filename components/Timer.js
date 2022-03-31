import { useContext } from "react"
import { Context } from "../context/FirstContext"

function Timer() {
    const {time} =useContext(Context)
  return (
    <div className="flex items-center gap-2 text-lg font-bold ">
      you spend <span className="text-red-400">{time}</span> secs in this site
    </div>
  )
}

export default Timer

