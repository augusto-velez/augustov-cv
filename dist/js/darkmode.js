function darkMode() {
  console.log("Dark mode clicked!");
  var bod = document.getElementById("page-top");
  bod.classList.toggle("darkmode");
  if (document.getElementById('inputDarkMode').checked) {
    console.log("Checked!");
    document.getElementById("sideNav").style.boxShadow = "2px 1px 6px 2px #3333336e";

  } else {
    console.log("NOT Checked");
    // element.classList.toggle("darkmode");
  }
}