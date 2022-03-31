import CountBtn from './../components/CountBtn'
import CryptoData from './../components/CryptoData'
import Timer from './../components/Timer'
import { BsSunFill, BsMoonStarsFill } from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Home = () => {
  const { theme, setTheme } = useTheme()
  return (
    <div className="dark:bg-slate-600 dark:text-white transition-all h-screen">
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
        <CryptoData />
        <Timer />
      </div>
    </div>
  )
}

export default Home
