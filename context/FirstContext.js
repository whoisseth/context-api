import { createContext, useState, useEffect } from 'react'
export const Context = createContext()
// import useLocalStorage from 'react-use-localstorage';
function FirstProvider({ children }) {
  const [count, setCount] = useState(0)
  // timer
  const [ time, setTime ] = useState(0)
  // const [ item, setItem ] = useLocalStorage('time', time);
  
  useEffect(() => {
    setTimeout(() => setTime(time + 1), 1000)
    // setItem(
  })
  return (
    <Context.Provider value={{ count, setCount,  time }}>
      {children}
    </Context.Provider>
  )
}
export default FirstProvider

