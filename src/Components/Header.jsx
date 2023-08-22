// import ethlogo from '../assets/ethlogo.png'
import { logo } from "../assets"
// import { connectWallet } from '../Adulam'
// import { truncate, useGlobalState } from '../store'

const Header = () => {
//   const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <nav className="w-screen flex md:justify-center justify-between items-center py-4 px-5 mx-auto gradient-bg-hero fixed top-0 z-10 opacity-75">
      <div className="flex flex-row justify-start items-center md:flex-[0.5] flex-initial">
        <img className="w-8 cursor-pointer" src={logo} alt="Tezos  Logo" />
        <span className="text-white text-2xl ml-2">Tezoz AI-NFT</span>
      </div>

      <ul
        className="md:flex-[0.5] text-white 
        md:flex hidden list-none flex-row 
        justify-between items-center flex-initial"
      >
        <li className="mx-4 cursor-pointer">Explore</li>
        <li className="mx-4 cursor-pointer">Features</li>
        <li className="mx-4 cursor-pointer">Community</li>
      </ul>

      
        {/* <button
          className="shadow-xl shadow-black text-white 
        bg-[#e32970] hover:bg-[#bd255f] md:text-xs p-2
        rounded-full cursor-pointer"
        > */}
          {/* {truncate(connectedAccount, 4, 4, 11)}
        </button>
      ) : ( */}
        <button
          className="shadow-xl shadow-black text-white 
        bg-[#219665cd] hover:bg-[#30b043] md:text-xs p-2
        rounded-full cursor-pointer"
          onClick={()=>{}}
        >
          Connect Wallet
        </button>
      {/* )} */}
    </nav>
  )
}

export default Header