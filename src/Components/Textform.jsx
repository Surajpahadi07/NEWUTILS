import { useState } from "react"

export default function Textform() {
  const [text, SetText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero facere maxime eligendi laborum incidunt dolores, perspiciatis delectus alias non officia necessitatibus quidem consequuntur odio dolorem tenetur quod corrupti suscipit quia dolorum dolor! Blanditiis quo accusantium impedit quam dolores minus adipisci. Rem, harum autem quo hic ea deserunt modi excepturi omnis vel dignissimos molestias tenetur quaerat. Voluptatem, eos ea ut nulla nam voluptatibus asperiores, corporis libero natus amet molestias temporibus possimus quibusdam voluptates autem quae. Ex iusto minus nemo distinctio cum itaque, quia, suscipit provident id impedit possimus nihil, doloremque neque odit blanditiis veniam tempora numquam earum odio placeat. Minus, sunt!");
  const [textFind, SetTextFind] = useState("");

  const HandleOnChange = (event) => {
    SetText(event.target.value);
    document.getElementById("Pre").innerHTML = event.target.value;
    if(text.length == 1 || text.length == 0){
      document.getElementById("FindBtn").style.visibility = "hidden";
       }
    else{
      document.getElementById("FindBtn").style.visibility = "visible";
       }
  }
  const HandleOnUpper = (event) => {
    SetText(text.toUpperCase());
  }
  const HandleOnLower = (event) => {
    SetText(text.toLocaleLowerCase());
  }
  const HandleOnProper = (event) => {
    let tempArr = text.split(" ");
    let temp = "";
    tempArr.forEach(element => {
      element = element.charAt(0).toUpperCase() + element.substr(1, element.length).toLowerCase();
      temp = temp + " " + element;
      temp = temp.trim();
      SetText(temp)
    })
  }
  const Clear = (event) => {
    SetText("");
  }
  const HandleOnChangeFind = (event) => {
    let count = 0;
    document.getElementById("Pre").innerHTML = text;
      SetTextFind(event.target.value)
      let find = event.target.value;
      if(find == text.match(find)){
        var Reg = new RegExp(find, "g");
        document.getElementById("Pre").innerHTML =  text.replace(Reg,'<span>'+find+'</span>');
        let spanArr = document.getElementById("Pre").getElementsByTagName("span");
        for(let i=0;i<spanArr.length;i++){
          spanArr[i].style.backgroundColor = "rgba(0, 0, 255, 0.3)";
          count++;
        }
      }
      document.getElementById("count").innerHTML = `${count} Results found`;
  }
  let ReplacingOne = () => {
    if(document.getElementById("replace").value != ""){
      document.getElementById("Pre").getElementsByTagName("span")[0].innerHTML = document.getElementById("replace").value;
     }
    else{
      alert("Please Enter Something For replace")
     }
  }
  let ReplacingAll = () => {
    if(document.getElementById("replace").value != ""){
          let spanArr = document.getElementById("Pre").getElementsByTagName("span");
          for(let i=0;i<spanArr.length;i++){
                spanArr[i].innerHTML =document.getElementById("replace").value;
              }
        }
        else{
          alert("Please Enter Something For replace")
        }
  }
  
  return (
    <div className="mb-3" >

      <div className="container">
        <h2>Your Text Summary</h2>

        <textarea
          className="form-control p-3"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          placeholder="Enter Text Here"
          onChange={HandleOnChange}
          autoFocus>
        </textarea>

      </div>
      
      <div className="container my-3">
        <button type="button" className="btn btn-outline-primary m-2 " onClick={HandleOnUpper}>Upper</button>
        <button type="button" className="btn btn-outline-primary m-2 " onClick={HandleOnLower}>Lower</button>
        <button type="button" className="btn btn-outline-primary m-2 " onClick={HandleOnProper}>Proper</button>
        <button type="button" className="btn btn-outline-primary m-2 " onClick={Clear}>Clear</button>
        <button id="FindBtn" className="btn btn-outline-primary m-2" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" style={{visibility:"hidden"}}>Find</button>
        
        <div className="collapse" id="collapseExample">
          <input className="form-control my-3" type="search" placeholder="Search Text Here.." aria-label="Search" onChange={HandleOnChangeFind} value={textFind}></input><span id="count" style={{color:"green",fontSize:"large"}}></span>
          <input className="form-control my-3" id="replace" type="search" placeholder="Replace Text Here.." aria-label="Search"></input>

          <button onClick={ReplacingOne} className="btn btn-outline-danger m-2 " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Replace</button>
          <button onClick={ReplacingAll} className="btn btn-outline-danger m-2 " type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Replace All</button>
        </div>
        <div>
          <h2>Your Text Summary</h2>
          <p>Your text Contains {text.split(" ").length - 1} words and {text.length} Characters</p>
          <h2>Preview</h2>
          <p className="b-2" id="Pre"></p>
        </div>
      </div>
    </div>
  )
}