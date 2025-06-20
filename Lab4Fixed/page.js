
// creating a start variable so it checks if the form to add new people exists, so its not duplicated
var start = 0;

/*
* creates the input form for adding a new person
*/
function createForm() { 
    let name = document.createElement("input");
    name.id = "pName";
    name.style.width="65%";
    name.type="text";
    name.placeholder = "Artist Name";

    let about = document.createElement("input");
    about.id = "pAbout";
    about.style.width="65%";
    about.type = "text";
    about.placeholder = "About artist";

    let imageURL = document.createElement("input");
    imageURL.id = "pURL";
    imageURL.style.width="65%";
    imageURL.type = "text";
    imageURL.placeholder = "Image URL";

    let addBtn = document.createElement("button");
    addBtn.id = "add";
    addBtn.style.width = "25%";
    addBtn.innerText="Add";

    let form = document.createElement("div");
    form.id = "inputForm";
    form.appendChild(name);
    form.appendChild(about);
    form.appendChild(imageURL);
    form.appendChild(addBtn);

    if (start === 0) {
        start++;
        document.getElementById("directory").appendChild(form);
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
        var artists = [];
        var p = {artistName: name, artistDesc: about, artistImage: imageURL};

        if ("artists" in localStorage) {
            var artists = JSON.parse(localStorage.getItem("artists"));
            for (let i = 0; i < artists.length; i++) {
                if (artists[i].artistName === name) {
                    alert("Names are the same");
                    return;
                }
            }
            person.appendChild(image);
            person.appendChild(text);
            person.appendChild(deleteBtn);
            document.getElementById("people").appendChild(person);

            artists.push(p);
            localStorage.setItem("artists", JSON.stringify(artists));
        } else {
            artists.push(p);
            localStorage.setItem("artists", JSON.stringify(artists));
        }
    } else {
        alert("Name or About length is greater than 40");
    } 

}

//test
/*
* Search up the person by characters included in the name
*/
function searchPerson() {
    var searchStr = document.getElementById("searchArtist").value;
    if (searchStr.length === 0) {
        alert("Nothing entered in search bar");
        return;
    }

    var artists = JSON.parse(localStorage.getItem("artists"));
    for (let i = 0; i < artists.length; i++) {
        if (artists[i].artistName.toUpperCase().includes(searchStr.toUpperCase())) {
            addPerson(artists[i]);
        }
    }
}

/*
* Adds a new person as an item to the array
*/
function addPerson(item) {
    var name = item.artistName;
    var about = item.artistDesc;
    var imageURL = item.artistImage;

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

    person.appendChild(image);
    person.appendChild(text);
    person.appendChild(deleteBtn);
    document.getElementById("people").appendChild(person);
}

// adds the event listener to the Search button
document.getElementById("searchBtn").addEventListener("click", searchPerson);

/*
* deletes the parent of where the "Delete" button is, which removes the person
*/
function deletePerson() {
    var thisPerson = this.parentNode;
    var artists = JSON.parse(localStorage.getItem("artists"));

    let children = thisPerson.childNodes;
    var text = children[1];
    var paraName = text.firstChild.innerText;

    for (let i = 0; i < artists.length; i++) {
        if (artists[i].artistName === paraName) {
            alert(artists[i].artistName);
            artists.splice(i, 1);
            localStorage.setItem("artists", JSON.stringify(artists));
            document.getElementById("people").removeChild(thisPerson);
        }
    }
}