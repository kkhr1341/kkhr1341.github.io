for (const link of document.querySelectorAll("#site-navigation a")) {
  link.onclick=close;
}
function close() {
  console.log("aaa");
  document.getElementById("hamburger").checked = false;
};
