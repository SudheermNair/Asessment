"use client"
import { useState } from "react"
export default function Home() {
let images = [
    "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/313782/pexels-photo-313782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/773471/pexels-photo-773471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",]
const [image,setImage] = useState(0);

function inputCaught(e){

  const{name} = e.target;
  if(name === "forwardButton"){

    setImage((image)=>{
      if(image !== images.length-1){image+=1}
      else{
        image=0;
      }
    return image});
  }
  if(name === "backwardButton"){
    setImage((image)=>{
      if(image !== 0){image-=1}
      else{
        image=images.length-1
      }
    return image});
  }
 
console.log(image)
}

  return(
    <>
      
    <div className="images">
    <button name="backwardButton" className="btn btn-left"onClick={inputCaught}>&#9668;</button>
    <img src={images[image]}></img>
    <button name="forwardButton" className="btn btn-right" onClick={inputCaught}>&#x27A4;</button>
    </div>
    </>
  )
}
