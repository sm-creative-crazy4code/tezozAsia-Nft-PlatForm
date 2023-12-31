
import { useEffect, useState } from 'react'
import { logo } from '../assets'
const Url ="https://imgs.search.brave.com/LK9jvSMmZsR-mFELZEUkWXRD17OxI3kOxkThzdJ8Z4k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzhmL2Q4/LzFlLzhmZDgxZWRj/ZGI4N2EzNzZlODli/YmM5Zjg5M2VhZTE5/LmpwZw"
const Arts = () => {
  const [end, setEnd] = useState(4)
  const [count] = useState(4)

  

  return (
    <div className="bg-[#131835] gradient-bg-hero py-10">
      <div className="w-4/5 mx-auto">
        <h4 className="text-gradient uppercase text-2xl">Artworks</h4>

        <div className="flex flex-wrap gap-10 justify-center items-center mt-4">
          {Array(8).fill().map((nft, i) => (
            <a
              key={i}
              href={""}
              target="_blank"
              className="relative shadow-xl shadow-black p-3
                bg-white rounded-lg item w-64 h-64 object-contain 
                bg-no-repeat bg-cover overflow-hidden mr-2 mb-2 cursor-pointer
                transition-all duration-75 delay-100 hover:shadow-[#54b172]"
              style={{ backgroundImage: 'url(' + Url + ')' }}
            >
              <div
                className="absolute bottom-0 left-0 right-0
                  flex flex-row justify-between items-center
                  label-gradient p-2 w-full text-white text-sm"
              >
                <p>{`Adulam NFT #${i}`}</p>
                <div className="flex justify-center items-center space-x-2">
                  <img
                    className="w-5 cursor-pointer"
                    src={logo}
                    alt={`Adulam NFT collection #` + i}
                  />
                  {/* {nft.cost} */}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* {artworks.length > 0 && artworks.length > nfts.length ? ( */}

          <div className="flex flex-row justify-center items-center mx-auto mt-4">
            <button
              className="shadow-xl shadow-black text-white
              bg-[#e32970] hover:bg-[#bd255f] p-2
              rounded-full cursor-pointer my-4"
              onClick={() => {}}
            >
              Load more
            </button>
          </div>
        {/* ) : null} */}
      </div>
    </div>
  )
}

export default Arts