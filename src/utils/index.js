const {Configuration,OpenAIApi} = require('openai')

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

      return image_url;
}

