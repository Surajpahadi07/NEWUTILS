import { useState } from "react"

export default function Textform(props) {
  const [text, SetText] = useState("The Indian education system is one of the largest in the world, with over 1.5 million schools and more than 260 million students enrolled. Despite its size, the system has been criticized for several shortcomings One of the primary criticisms is the emphasis on rote learning, which prioritizes memorization over critical thinking and problem-solving skills. This approach has been criticized for not adequately preparing students for the modern workforce, which values creativity and innovation. Additionally, the system has been criticized for its lack of infrastructure, particularly in rural areas. Many schools lack basic facilities such as electricity, clean water, and functioning toilets, which can significantly impact the quality of education. The Indian education system also faces issues of inequality, with a large number of students coming from low-income families and marginalized communities struggling to access quality education. This has resulted in a significant achievement gap between different socioeconomic groups. Despite these challenges, efforts are being made to improve the Indian education system. The government has implemented several initiatives to increase enrollment and improve infrastructure, and private organizations are also contributing to the development of education in India.");
  const [textFind, SetTextFind] = useState("");
  
  const HandleOnChange = (event) => {
    SetText(event.target.value);
    document.getElementById("Pre").innerHTML = event.target.value;
    if(event.target.value === 0){
      document.getElementById("FindBtn").style.visibility = "hidden";
       }
    else{
      document.getElementById("FindBtn").style.visibility = "visible";
       }
  }
  const HandleOnUpper = () => {
    if(document.getElementById("exampleFormControlTextarea1").value !== ""){
      SetText(text.toUpperCase());
      props.alrtt("success","Successfully text converted into Upper Case")
    }
    else{
      props.alrtt("warning","Please type Something Capatalize")
    }
  }
  const HandleOnLower = () => {
    if(document.getElementById("exampleFormControlTextarea1").value !== ""){
      SetText(text.toLocaleLowerCase());
      props.alrtt("success","Successfully text converted into Lower Case")
    }
    else{
      props.alrtt("warning","Please type Something to convert them into lower case ")
    }
  }
  const HandleOnProper = () => {
    if(document.getElementById("exampleFormControlTextarea1").value !== ""){
      let tempArr = text.split(" ");
      let temp = "";
      tempArr.forEach(element => {
      element = element.charAt(0).toUpperCase() + element.substr(1, element.length).toLowerCase();
      temp = temp + " " + element;
      temp = temp.trim();
      SetText(temp)
      props.alrtt("success","Successfully text converted into Poper Case")

    })}
    else{
      props.alrtt("warning","Please type Something to convert them into proper case ")
    }
  }
  const Clear = () => {
    if(document.getElementById("exampleFormControlTextarea1").value !== ""){
      SetText("");
      props.alrtt("success","Successfully text Cleared")
    }
    else{
      props.alrtt("warning","Textbox Already cleared")
    }
  }
  const HandleOnChangeFind = (event) => {
    let count = 0;
      document.getElementById("Pre").innerHTML = text;
      SetTextFind(event.target.value);
      let find = event.target.value;
      if(find == text.match(find)){
        // console.log(typeof find, find)
        // console.log(typeof text.match(find), text.match(find))
        var Reg = new RegExp(find, "gi");
        document.getElementById("Pre").innerHTML =  text.replace(Reg,'<span>'+find+'</span>');
        let spanArr = document.getElementById("Pre").getElementsByTagName("span");
        for(let i=0;i<spanArr.length;i++){
          spanArr[i].style.backgroundColor = "rgba(0, 0, 255, 0.3)";
          count++;
        }
      }
      document.getElementById("count").innerHTML = `${count} Results found`;
      if(event.target.value===""){
        document.getElementById("count").innerHTML = "";
        document.getElementById("Pre").innerHTML = text;
      }
  }
  let ReplacingOne = () => {
    if(document.getElementById("replace").value !== ""){
      document.getElementById("Pre").getElementsByTagName("span")[0].innerHTML = document.getElementById("replace").value;
     }
    else{
      props.alrtt("warning","Please Enter Something words For replace")
     }
  }
  let ReplacingAll = () => {
    if(document.getElementById("replace").value !== ""){
          let spanArr = document.getElementById("Pre").getElementsByTagName("span");
          for(let i=0;i<spanArr.length;i++){
                spanArr[i].innerHTML =document.getElementById("replace").value;
              }
        }
        else{
          props.alrtt("warning","Please Enter Something For replace")
        }
  }
  
  return (
    <div className={`mb-3 bg-${props.mode} ${props.mode === "light"?"text-dark":"text-light"}`}>

      <div className="container">
        <h2>Your Text Summary</h2>

        <textarea
          className={`form-control p-3 bg-${props.mode} ${props.mode === "light"?"text-dark":"text-light"}`}
          style={{backgroundColor: "rgb(48, 1, 1)",color : "white"}}
          id="exampleFormControlTextarea1"
          rows="9"
          value={text}
          placeholder="Enter Text Here"
          onChange={HandleOnChange}
          autoFocus>
        </textarea >

      </div>
      
      <div className="container my-3">
        <button type="button" className="btn btn-outline-primary m-2 " onClick={HandleOnUpper}>Upper</button>
        <button type="button" className="btn btn-outline-primary m-2 " onClick={HandleOnLower}>Lower</button>
        <button type="button" className="btn btn-outline-primary m-2 " onClick={HandleOnProper}>Proper</button>
        <button type="button" className="btn btn-outline-primary m-2 " onClick={Clear}>Clear</button>
        <button id="FindBtn" className="btn btn-outline-primary m-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{visibility:"hidden"}}>Find</button>
        
        <div className="collapse" id="collapseExample">
          <input className={`form-control my-3`} type="search" placeholder="Search Text Here.." aria-label="Search" onChange={HandleOnChangeFind} value={textFind}></input><span id="count"  className={`${props.mode === "light"?"text-dark":"text-light"}`}></span>
          <input className={`form-control my-3`} id="replace" type="search" placeholder="Replace Text Here.." aria-label="Search"></input>

          <button onClick={ReplacingOne} className="btn btn-outline-danger m-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Replace</button>
          <button onClick={ReplacingAll} className="btn btn-outline-danger m-2" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Replace All</button>
        </div>
        <div className={`bg-${props.mode} ${props.mode === "light"?"text-dark":"text-light"}`}>
          <h2>Your Text Summary</h2>
          <p>Your text Contains {text.split(" ").length - 1} words and {text.length} Characters</p>
          <h2>Preview</h2>
          <p className="b-2" id="Pre"></p>
        </div>
      </div>
    </div>
  )
}