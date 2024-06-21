let myStuff = ['buy eggs', 'buy milk', 'buy bread'];

let myTODOList = document.getElementById("myToDOList");

// Toggle the "checked" class on a list item when clicked
let toggleChecked = (ev) => {
    // ev.target is the clicked element
}

// Create a new list item when clicking on the "Add" button
let addItem = (ev) => {
    // Get the value of the input field and make sure its not empty
    // else alert()
    // Create a new <li> element and append it to the <ul>
    // append a text <p></p>
    
    // append a close button <span className="close"></span> avec un <p></p> texte \u00D7
    // et son onclick
}

let removeItem = (ev, id) => {
    // Get the <li> element with the given id
    // Remove it from the list
}

// Initialise the list
for (let i = 0; i < myStuff.length; i++) {
    myStuff.map((item) => {
        addItem({target: {value: item}});
    });
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