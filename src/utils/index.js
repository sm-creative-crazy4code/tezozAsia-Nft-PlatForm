const {Configuration,OpenAIApi} = require('openai')
// const { NFTStorage, File } = require('nft.storage')

const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)

// const client = new NFTStorage({ token: process.env.REACT_APP_NFT_STORAGE })


export const generateImage= async (prompt)=>{
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
      });
      const image_url = response?.data?.data[0].url;
      console.log(response?.data)
      console.log( response?.data?.data[0].b64_json)

      return image_url;
}


export const getBase64Response= async(prompt)=>{
    const response = await openai.createImage({
        prompt: prompt,
        n: 1,
        size: "256x256",
        response_format:'b64_json'
      });
      const image = response.data.data[0].b64_json
   
      return image;

}


// export const UploadImageToIpfs=async(imagedata,form)=>{
//     const imageFile = new File([ imagedata ], 'nft.png', { type: 'image/png' })
//     const nftdata = await client.store({
//         name: form.name,
//         description: form.prompt,
//         image: imageFile
//       })

//     const ipfsHs= await client.store(nftdata)

//     return ipfsHs


// }

