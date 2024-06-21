let myStuff = ['buy eggs', 'buy milk', 'buy bread'];
let counter = 0;

// Create a new list item when clicking on the "Add" button
let addItem = (ev) => {
    let myTODOList = document.getElementById("myToDOList");

    // Get the value of the input field and make sure its not empty
    const maValeur = document.getElementById("myInput").value;

    if(maValeur === "") {
        // alert the user
        alert("Vous devez saisir un titre !");
        return;
    }
    else if( myTODOList.childElementCount >= 5) {
        // alert the user
        alert("Vous ne pouvez pas ajouter plus de 5 items !");
        return;
    }

    // Create a new <li> element and append it to the <ul>
    const myNewItem = document.createElement("li");
    const id = "myNewItem" + counter++;
    myNewItem.id = id;
    myNewItem.addEventListener("click", toggleChecked);

    const myText = document.createTextNode(maValeur);

    myNewItem.appendChild(myText);    
    // append a close button <span className="close"></span> avec un \u00D7
    const myCloseButton = document.createElement("span");
    myCloseButton.appendChild(document.createTextNode("I will be removed"));
    myCloseButton.innerHTML = "\u00D7"; //? InnerHTML removes every child and replace it with the given text
    myCloseButton.className = "close";
    let removeItemWithID = (ev) => removeItem(ev, id);
    myCloseButton.addEventListener("click", removeItemWithID);
    myNewItem.appendChild(myCloseButton);
    myTODOList.appendChild(myNewItem);

    // empty the input field
    document.getElementById("myInput").value = "";

    //! Ajouter une limit de TODO avec un alert()
    //! avec de la validiter
}

// Toggle the "checked" class on a list item when clicked
let toggleChecked = (ev) => {
    // ev.target is the clicked element
    //? Classlist offer different methods to add, remove and toggle classes
    //? https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
    ev.target.classList.toggle('checked')

    // Equivaled to the following
    // if (ev.target.classList.contains('checked')) {
    //     ev.target.classList.remove('checked');
    // } else {
    //     ev.target.classList.add('checked');
    // }
}

let removeItem = (ev, id) => {
    // Get the <li> element with the given id
    // Remove it from the list
    document.getElementById(id).remove();
    console.log("Removed item with id " + id);
}

//? SECTION EXERCISES
// Exercise 1: Prendre tous les éléments actifs (class="checked") 
// puis les afficher avec console.log()

function showChecked() {
    // Get all the checked items
    // Loop through them
    // console.log(item)
}

// Exercise 2: Prendre tous les éléments actifs (class="checked") 
// puis les supprimer

function removeChecked() {
    // Get all the checked items
    // Loop through them
    // remove them
}

// Exercise 3: Modifier la fonction newItem pour qu'il ajoute la date de création
// de l'élément à la fin de son texte. "- Date de création: xx/xx/xxxx"

function newItemWithDate() {
    
}