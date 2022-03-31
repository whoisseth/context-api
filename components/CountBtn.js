import { useContext } from 'react'
import { Context } from './../context/FirstContext'
function CountBtn() {
  const { count, setCount } = useContext(Context)
  return (
    <div className="flex items-center gap-2 text-lg font-bold  ">
      <button className="btn" onClick={() => setCount((count) => count - 1)}>
        -
      </button>
      {count}
      <button className="btn" onClick={() => setCount((count) => count + 1)}>
        +
      </button>
    </div>
  )
}

export default CountBtn
