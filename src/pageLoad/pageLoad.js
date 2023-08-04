import dropDownMenuMaker from "../dropdown-menu/dropdown-menu";

export default function pageLoad() {
  const content = document.querySelector("#content");
  const testArray = [
    "Create",
    "Random Stuff",
    "Profile Settings",
    "Notifications",
    "Settings",
  ];

  content.appendChild(dropDownMenuMaker(testArray));

  // We will call our drop down menu from here
}
