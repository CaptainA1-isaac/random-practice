function saveNotes() {

    let recap = document.getElementById("recap").value;
    let topics = document.getElementById("topics").value;
    let built = document.getElementById("built").value;
    let challenge = document.getElementById("challenge").value;
    let next = document.getElementById("next").value;


    let entry = {

        date: new Date().toDateString(),
        recap: recap,
        topics: topics,
        built: built,
        challenge: challenge,
        next: next

    };


    let history = JSON.parse(localStorage.getItem("history")) || [];


    history.push(entry);


    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );


    // clear form
    document.getElementById("recap").value = "";
    document.getElementById("topics").value = "";
    document.getElementById("built").value = "";
    document.getElementById("challenge").value = "";
    document.getElementById("next").value = "";


    alert("Saved successfully 🚀");

}
function toggleDarkMode(){

    document.body.classList.toggle("dark");

}
function toggleDarkMode(){

    document.body.classList.toggle("dark");


    if(document.body.classList.contains("dark")){

        localStorage.setItem("mode","dark");

    }

    else{

        localStorage.setItem("mode","light");

    }

}



window.onload = function(){


    let mode = localStorage.getItem("mode");


    if(mode === "dark"){

        document.body.classList.add("dark");

    }


}