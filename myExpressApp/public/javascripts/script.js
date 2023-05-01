// const express = require("express");

var buttonQ = document.querySelector("#submitQ");
var buttonF = document.querySelector("#submitF");
var resultsText = document.querySelector("#results");

console.log(buttonF);
//Adds listeners for buttons in web scraper page, if button is clicked then the corresponding functions execute
buttonQ.addEventListener("click", searchQuestion);
buttonF.addEventListener("click", searchFile);
console.log("script here");

async function searchTest(endpoint, document){
  // console.log(`http://website-spring.herokuapp.com/` + endpoint + "?ordered=False");
  // console.log(document);
  // let docText = JSON.stringify(document);
  // document = document + "?";
  let res = await fetch(`http://website-spring.herokuapp.com/` + endpoint, {
    method: "POST",
    body: document
  })
  // }).then((res) => res.json())
  console.log("response", res);
  // let obj = await response.json();
  let obj = await res.text();
  console.log(obj.value);
  return obj;
};

// function for single question search
async function searchQuestion(){
  console.log("value = ", document.querySelector("#searchQ").value);
  let obj = await searchTest("text?ordered=False", document.querySelector("#searchQ").value );
  console.log("Search Test", obj);
  // obj.queries.forEach(element => {
  //   resultsText.innerHTML += element.queryText;
  // });

 
}

//Testing function
// async function uploadFile() {
//   let formData = new FormData(); 
//   formData.append("fileupload", fileupload.files[0]);
//     await fetch(`http://website-spring.herokuapp.com/` + endpoint, {
//     method: "POST", 
//     body: formData
//   }); 
// }

// function for file search
async function searchFile(){
  var input = document.querySelector('input[type="file"]')
  var data = new FormData();
  data.append('document', input[0]);
  // data = input[0]
  // console.log(data.values());
  // console.log("data", input.value);
  let obj = await searchTest("word?search=False", data);
  console.log("Search Test ->", obj);

  
}

// function HtmlFormRequest( url, input, cb ) 
// { 
//     var i, args = ""; 
    
//     if( input.enctype == 'multipart/form-data' ) { 
//     	args = new FormData(input); 
//     } else { 
// 	    for( i in input.elements ) { 
// 	        if( input.elements[i].type != 'button' ) { 
// 	            if( args != "" ) args += "&"; 
// 	            args += encodeURIComponent(input.elements[i].name) + "=" + encodeURIComponent(input.elements[i].value); 
// 	        } 
// 	    } 
//     } 
//     HtmlRequest(url, args, cb); 
// } 

// async function searchTest(){
//   let response = await fetch(`http://website-spring.herokuapp.com/exampleQuery`, {
//     method: "GET"
//   })
//   let obj = await response.json();
//   console.log(obj);
//   return obj;
// };