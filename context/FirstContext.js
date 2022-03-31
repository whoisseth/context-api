import { createContext, useState, useEffect } from 'react'
export const Context = createContext()
const CryptoData = 'https://api2.binance.com/api/v3/ticker/24hr'

function FirstProvider({ children, data }) {
  const [count, setCount] = useState(0)
  // timer
  const [time, setTime] = useState(0)
  useEffect(() => {
    setTimeout(() => setTime(time + 1), 1000)
  })
  console.log(data)
  return (
    <Context.Provider value={{ count, setCount, data, time }}>
      {children}
    </Context.Provider>
  )
}
export default FirstProvider

export async function getStaticProps() {
  const data = await fetch(CryptoData)
  // const data = await res.json()
  console.log(data)
  // console.log(res)

  return { props: { data } }
}