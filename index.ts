// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (let i = 0; i < myNodelist.length; i++) {
  let button: HTMLButtonElement = document.createElement("button");
  let txt = document.createTextNode("\u00D7");
  button.className = "close";
  button.appendChild(txt);
  myNodelist[i].appendChild(button);
}

function createDiv() : void {
  for (let i = 0; i < closeButtons.length; i++) {
    let closeButton: HTMLButtonElement = closeButtons[i]
    closeButton.onclick = function () {
      let div = closeButton.parentElement;
      if (div !== null) {
        div.style.display = "none";
      }
    }
  }
}

// Click on a close button to hide the current list item
let closes: HTMLCollectionOf<Element> = document.getElementsByClassName("close");
let closeButtons: HTMLCollectionOf<HTMLButtonElement> = closes as HTMLCollectionOf<HTMLButtonElement>;
createDiv()

// Add a "checked" symbol when clicking on a list item
let list: HTMLUListElement | null = document.querySelector('ul');
if (list !== null) {
  list.addEventListener('click', function (ev) {
    if (ev.target instanceof HTMLElement) {
      if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
    }
  }, false);
}


// Create a new list item when clicking on the "Add" button
function newElement() {
  let li = document.createElement("li");
  let inputValue: string = "";
  let input: HTMLElement | null = document.getElementById("myInput");
  if (input instanceof HTMLInputElement) {
    inputValue = input.value
  }
  let t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    let myUL: HTMLElement | null = document.getElementById("myUL")
    if (myUL !== null) {
      myUL.appendChild(li);
    }
  }
  if (input instanceof HTMLInputElement) {
    input.value = ""
  }

  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  createDiv()
}