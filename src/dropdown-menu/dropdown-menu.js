import dropDownMenuListener from "./dropDownMenuListener";

export default function dropDownMenuMaker(words) {
  const dropDownContainer = document.createElement("section");
  dropDownContainer.classList.add("dropDownContainer");

  const dropDownButton = document.createElement("button");
  dropDownButton.classList.add("dropDownButton");
  dropDownButton.setAttribute(
    "style",
    "background-color: white; display: flex; align-items: center; justify-content: flex-start; column-gap: 0.5rem; padding: 0.6rem; border-radius: 5px; border: none; box-shadow: rgba(0,0,0,0.05) 0px 6px 10px 0px, rgba(0, 0,0,0.1) 0px 0px 0px 1px;; position: relative;"
  );
  dropDownButton.setAttribute("id", "dropDownButton");
  dropDownButton.textContent = "Drop Down Menu";

  dropDownButton.addEventListener("click", dropDownMenuListener);

  const dropDownMenu = document.createElement("section");
  dropDownMenu.setAttribute(
    "style",
    "position: absolute; width: 250px;box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 10px 0px,rgba(0, 0, 0, 0.1) 0px 0px 0px 1px;; border-radius: 5px; margin-top: 0.3rem; background-color: white; transform: translateY(0.5rem); visibility: hidden; opacity: 1;"
  );
  dropDownMenu.setAttribute("id", "dropDownMenu");
  dropDownMenu.classList.add("dropDownMenu");

  for (let i = 0; i < words.length; i += 1) {
    console.log(words[i]);
    const wordContainer = document.createElement("a");
    wordContainer.classList.add("wordElement");
    wordContainer.setAttribute(
      "style",
      " display: flex; align-items: center; column-gap: 0.5rem; padding: 0.8rem 1rem; text-decoration:  none; color: black;"
    );
    wordContainer.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
      e.target.style.color = "white";

      setTimeout(() => {
        e.target.style.color = "black";
        e.target.style.backgroundColor = "white";
      }, 300);
    });
    wordContainer.href = `#${words[i]}`;
    wordContainer.textContent = words[i];

    dropDownMenu.appendChild(wordContainer);
  }

  dropDownContainer.appendChild(dropDownButton);
  dropDownContainer.appendChild(dropDownMenu);

  return dropDownContainer;
}

// In order to make our drop down menu, we essentially want to take in as many words as possible

// Perhaps an array as argument is better

// We need to create the structure

/* 

[section = "container"]
[][button = "btn"]
[][section = "dropdownMenu"]
[][][]TEXT
[]
*/
