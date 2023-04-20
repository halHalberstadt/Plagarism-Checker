var button = document.querySelector("#submit");
button.addEventListener("click", searchDecision);
document.querySelector("#searchButton").addEventListener("click", searchGoogle);

function searchDecision()
{
    let response = document.querySelector("input[name=search]:checked");
    if (response == null) {
        document.querySelector("#errorMsg").innerHTML = `Please Choose One Option`;
        document.querySelector("#errorMsg").style.backgroundColor = "red";
        return;
    }

        if (response.value == "question")
        {
          document.querySelector("#input").innerHTML = `Enter your assignment query: <input type="text" id="searchBox" name="assignmentQuestion">`;
          document.querySelector("#errorMsg").style.backgroundColor = "white";
          document.querySelector("#errorMsg").innerHTML = `<br><br><button id="searchQuestion" type="button">
      Search
    </button>`;
          document.querySelector("#submitButton").innerHTML = ``;
        }
        else
        {
            document.querySelector("#input").innerHTML =`<label for="myfile">Upload file:</label>
              <input type="file" id="myfile" name="myfile">`;
            document.querySelector("#errorMsg").style.backgroundColor = "white";
            document.querySelector("#errorMsg").innerHTML = `<br><br><button id="searchFile" type="button">
      Search
    </button>`;
            
          document.querySelector("#submitButton").innerHTML = ``;

        }
    }


function searchGoogle(){
  console.log("click");
  let searchQ = document.querySelector("#searchBox").value;
  console.log(searchQ);
}