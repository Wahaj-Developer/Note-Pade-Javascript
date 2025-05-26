
const addBtn = document.querySelector("#addBtn")
const main = document.querySelector("#main")
addBtn.addEventListener(
    "click",
    function() {
        addNote()
    }
)
const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
