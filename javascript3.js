//creates the array for the notes
var memorycard = [];

let arrayLength = memorycard.length;
for (let i = 0; i < arrayLength; i++) {

    let val = array[i];
    console.log(val)

}

//Creates a remove button to all li elements
var noteNodes = document.getElementsByTagName("li");
var i;
for (i = 0; i < noteNodes.length; i++) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("❌");
    span.className = "close";
    span.appendChild(txt);
    noteNodes[i].appendChild(span);
}


//Click on a close button to remove the current list item from local storage
function removeFromSave() {
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {

            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

// Create a new list item when clicking on the "Lisää" button
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("notetext").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    //validation for the added memo to be the correct length
    if (inputValue === '') {
        var element = document.getElementById("notetext");
        element.className = "invalid";
        element.style = "background-color:rgb(232, 89, 89);";
        alert("Kirjoita jotain :)");
        element.style = "background-color:none";

    } else if (inputValue.length > 50) {
        var element = document.getElementById("notetext");
        element.style = "background-color:rgb(232, 89, 89);";
        element.className = "invalid";
        alert("Liian pitkä muistio :(");
        element.style = "background-color:none";


    } else {
        document.getElementById("ul").appendChild(li);
        memorycard.push(inputValue);
        // localStorage.setItem(Date.now(), inputValue);
        localStorage.setItem("memorycard", JSON.stringify(memorycard));
    }
    document.getElementById("notetext").value = "";

    //Adding the delete button to the added notes 
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("❌");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
}

//Shows the date on top of the page, refresh every 10 seconds
function paiva() {
    setInterval(paiva, 10000);
    date.innerHTML = (hello);

    var pvm = new Date();
    var tunti = pvm.getHours();
    var minuutti = pvm.getMinutes();
    var tanaan = pvm.getDate();
    var kuukausi = pvm.getMonth() + 1;
    
    //fixes the minutes to display correctly
    if (minuutti < 10) {
      minuutti = "0" + minuutti;
    }

    var hello = "Hei, tänään on " + tanaan + "." + kuukausi + " ja kello on " + tunti + ":" + minuutti + ".";
    document.getElementById("date").innerHTML = hello;

}

//Loads saved files from local storage and stringifies them from JSON
function loadFromSave() {
    if (localStorage.getItem("memorycard") == null) return;
    var loadSave = Array.from(JSON.parse(localStorage.getItem("memorycard")));

    //loops through the array
    for (let element of loadSave) {

        //shows them on the itemlist by creating an li node and adding the note to it
        const node = document.createElement("li");
        const textnode = document.createTextNode(element);
        //adds the text node to the node list
        node.appendChild(textnode);

        //adds the created li node to the ul list
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("❌");
        span.className = "close";
        span.appendChild(txt);
        node.appendChild(span);
        document.getElementById("ul").appendChild(node);
    }
}

//clears up the local Storage on command
function btn1() {
    localStorage.clear();
    document.location.reload(true);

}