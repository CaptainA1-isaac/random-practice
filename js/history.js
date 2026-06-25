function loadHistory(){

    let container = document.getElementById("historyContainer");

    let history = JSON.parse(localStorage.getItem("history")) || [];


    if(history.length === 0){

        container.innerHTML =
        "<h3>No learning records yet 😢</h3>";

        return;
    }



    history.reverse().forEach((entry,index)=>{


        let card = document.createElement("div");

        card.className = "history-card";


        card.innerHTML = `

        <h2>📅 ${entry.date}</h2>

        <p>
        <b>What I learnt:</b><br>
        ${entry.recap}
        </p>


        <p>
        <b>Topics:</b><br>
        ${entry.topics}
        </p>


        <p>
        <b>Built:</b><br>
        ${entry.built}
        </p>


        <p>
        <b>Challenges:</b><br>
        ${entry.challenge}
        </p>


        <p>
        <b>Next Goal:</b><br>
        ${entry.next}
        </p>


        <button onclick="deleteEntry(${index})">
        Delete 🗑
        </button>


        `;


        container.appendChild(card);


    })

}



function deleteEntry(index){

    let history =
    JSON.parse(localStorage.getItem("history")) || [];


    history.splice(index,1);


    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );


    location.reload();

}



loadHistory();