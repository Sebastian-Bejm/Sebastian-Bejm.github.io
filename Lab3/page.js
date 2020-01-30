
// creating a start variable so it checks if the form to add new people exists, so its not duplicated
var start = 0;

/*
* creates the input form for adding a new person
*/
function createForm() { 
    let name = document.createElement("input");
    name.id = "pName";
    name.style.width="99%";
    name.type="text";
    name.placeholder = "Artist Name";

    let about = document.createElement("input");
    about.id = "pAbout";
    about.style.width="99%";
    about.type = "text";
    about.placeholder = "About artist";

    let imageURL = document.createElement("input");
    imageURL.id = "pURL";
    imageURL.style.width="99%";
    imageURL.type = "text";
    imageURL.placeholder = "Image URL";

    let addBtn = document.createElement("button");
    addBtn.id = "add";
    addBtn.style.width = "40%";
    addBtn.innerText="Add";

    let form = document.createElement("div");
    form.id = "inputForm";
    form.appendChild(name);
    form.appendChild(about);
    form.appendChild(imageURL);
    form.appendChild(addBtn);

    if (start === 0) {
        start++;
        document.getElementById("people").appendChild(form);
    }

    addBtn.addEventListener("click", createPerson);
}

// adds the event listener to the Add button
document.getElementById("addNewArtist").addEventListener("click", createForm);

/*
* creates a new person after entering information and image url
*/
function createPerson() {
    var name = document.getElementById("pName").value;
    var about = document.getElementById("pAbout").value;
    var imageURL = document.getElementById("pURL").value;

    var nameLength = name.length;
    var aboutLength = about.length;

    let person = document.createElement("div");
    person.id = "person";

    let paraName = document.createElement("p");
    paraName.className = "name";
    paraName.innerText = name;

    let paraAbout = document.createElement("p");
    paraAbout.className = "about";
    paraAbout.innerText = about;

    let text = document.createElement("div");
    text.id = "text";
    text.appendChild(paraName);
    text.appendChild(paraAbout);

    let image = document.createElement("img");
    image.src = imageURL;
    image.className = "img";

    let deleteBtn = document.createElement("button");
    deleteBtn.id = "deleteBtn";
    deleteBtn.innerText = "Delete";

    deleteBtn.addEventListener("click", deletePerson, false);

    if (!(nameLength > 40 || aboutLength > 40)) {
        person.appendChild(image);
        person.appendChild(text);
        person.appendChild(deleteBtn);
        document.getElementById("people").appendChild(person);
    } else {
        alert("Name or About length is greater than 40");
    } 

}

/*
* deletes the parent of where the "Delete" button is, which removes the person
*/
function deletePerson() {
    document.getElementById("people").removeChild(this.parentNode);
}