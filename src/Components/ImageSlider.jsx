import { useState } from "react";

function ImageSlider(){

    const [index, setIndex] = useState(0)

    const handleNext = ()=>{
        if(index < images.length - 1){
            setIndex (index+1)
        }
    }

    const handlePrev = ()=>{
        if(index>0){
            setIndex (index-1)
        }
    }


    const images = [
        "https://img.freepik.com/free-photo/beautiful-shot-white-british-shorthair-kitten_181624-57681.jpg?t=st=1709551905~exp=1709555505~hmac=640a6739ce3978ffc2935782b2f433771d4c0c89e042b533a0710492c4a593bc&w=900",
        "https://img.freepik.com/free-photo/close-up-beautiful-cat_23-2149216352.jpg?t=st=1709542335~exp=1709545935~hmac=fede1ba777e9700abe7c03e2679096ae0300db5c42ad46193c0742112219900f&w=900",
        "https://img.freepik.com/free-photo/beautiful-cat-portrait-close-up_23-2149152103.jpg?t=st=1709552125~exp=1709555725~hmac=f0970a50dd6f1de09c863f6eb564392ddafde44cd0221c6139656bf550d2353c&w=360",
        "https://img.freepik.com/free-photo/pretty-bengal-cat-stands-yellow-couch_8353-512.jpg?t=st=1709552141~exp=1709555741~hmac=47ea308a25e144f8c9ba7839a71c116e6045641d21b3e955c16b26b6f6a90730&w=360"


    ]

   
    return <div className="text-center mt-6">

        <img className="w-[800px] h-[320px] ml-[250px] rounded" src={images[index]} />

        <button onClick={handlePrev} className="bg-orange-500 text-3xl px-4 py-3 rounded text-white font-bold mt-2">prev</button>
        <button onClick={handleNext} className="bg-orange-500 text-3xl px-4 py-3 rounded text-white font-bold ml-10">next </button>
    </div>
}

export default ImageSlider;