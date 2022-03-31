import CountBtn from './../components/CountBtn'
import CryptoData from './../components/CryptoData'
import Timer from './../components/Timer'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Home = ({ data }) => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="h-screen transition-all dark:bg-slate-600 dark:text-white">
      <nav className="  mx-8 flex items-center justify-between  text-xl md:text-3xl   ">
        <h1 className="my-8 text-center  font-bold">
          All This Context Api Tutorial
        </h1>
        {theme === 'dark' ? (
          <BsSunFill
            onClick={() => setTheme((theme = 'light'))}
            className="cursor-pointer"
          />
        ) : (
          <BsMoonStarsFill
            onClick={() => setTheme((theme = 'dark'))}
            className="cursor-pointer"
          />
        )}
      </nav>
      <div className=" grid grid-cols-1 place-items-start justify-items-center gap-4   p-8  sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 ">
        <CountBtn />
        {/* using useEffect */}
        <CryptoData data={data} />
        <Timer />
      </div>
    </div>
  )
}

export default Home
const cryptoData = 'https://api2.binance.com/api/v3/ticker/24hr'
export async function getStaticProps() {
  const res = await fetch(cryptoData)
  const data = await res.json()
  return { props: { data }, revalidate: 1 ,}
}
