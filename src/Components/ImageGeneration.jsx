import React,{useState} from 'react'
import Formfeild from './Formfield'
import Loader from './Loader'
import { preview } from '../assets'


const ImageGeneration = () => {
    const [form,setForm]= useState({
        name:"Crypto Duo",
        prompt:"Enter text prompt",
        photo:""
    })

    const [isGenerating,setIsGenerating] = useState(false);

  return (
    <div className='max-w-[100%] h-[64%] mx-auto mt-5 flex flex-row bg-black opacity-75 p-4'>
        {/* form components */}
        <div className='w-[50%] mx-1 bg-transparent flex flex-col items-left justify-center gap-3 p-1'>
        <Formfeild
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Sneha"
            value={form.name}
            handelChange={()=>{}}
          />

          <Formfeild
            labelName="prompt "
            type="text"
            name="prompt"
            placeholder="A Man falling in Love with his Computer, digital art"
            value={form.prompt}
           
          />           

        </div>

        {/* image box */}
        <div className='w-[50%] h-[70%] mx-1 bg-slate-700 rounded-[15px]  flex flex-col justify-center items-center gap-3'>
        {form.photo ? (
              <img
                src={form.photo}
                alt="photo"
                className="w-full h-full object-contain mx-auto"
              />
            ) : (
              <img
                src={preview}
                alt="photo"
                className="w-10/12 h-10/12 object-contain opacity-40"
              />
            )}
         <div className='mt-2 px-auto bg-black w-full py-3 flex justify-center items-center'>
          <button
            type="button"
            onClick={()=>{}}
            className="text-white bg-[#219665cd] hover:bg-[#30b043] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {isGenerating ? "Generating..." : "Generate"}
          </button>
          </div>
        </div>
      
    </div>
  )
}

export default ImageGeneration
