export default function dropDownMenuListener(e) {
  const dropDownMenu = document.getElementById("dropDownMenu");

  const toggleDropDown = function () {
    dropDownMenu.classList.toggle("show");
  };

  e.stopPropagation();
  toggleDropDown();

  document.documentElement.addEventListener("click", () => {
    if (dropDownMenu.classList.contains("show")) {
      toggleDropDown();
    }
  });
}
