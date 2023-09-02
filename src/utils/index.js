const {Configuration,OpenAIApi} = require('openai')
const axios= require('axios')
// const  { Web3Storage } = require('web3.storage')


const config = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
})

const openai = new OpenAIApi(config)




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

// const {data} = await axios.post('https://httpbin.org/post', {
//     firstName: 'Fred',
//     lastName: 'Flintstone',
//     orders: [1, 2, 3],
//     photo: document.querySelector('#fileInput').files
//   }, {
//     headers: {
//       'Content-Type': 'multipart/form-data'
//     }
//   }
// )





export const uploadFileToIpfs=async(imghash,name,prompt)=>{
    const ipfsHash = await axios.post("https://api.pinata.cloud/pinning/pinJsonToIPFS",
      {
        name: name,
        description: prompt,
        image: imghash,
      
      headers:{
        'pinata_api_key': `${process.env.REACT_APP_PINATA_API_KEY}`,
        'pinata_secret_api_key': `${process.env.REACT_APP_PINATA_SECRET_KEY}`
      }
    });
return ipfsHash


}


