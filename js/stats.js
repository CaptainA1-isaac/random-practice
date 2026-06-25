let history =
JSON.parse(localStorage.getItem("history")) || [];



let entries =
history.length;



let topics = 0;

let projects = 0;



history.forEach(entry => {


    if(entry.topics !== ""){

        topics++;

    }



    if(entry.built !== ""){

        projects++;

    }


});




document.getElementById("entries").innerHTML =
"📚 Learning Entries: " + entries;



document.getElementById("topics").innerHTML =
"🔥 Topics Covered: " + topics;



document.getElementById("projects").innerHTML =
"🛠 Projects Built: " + projects;