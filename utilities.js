
function clickotron() {
    alert('hello');
  }
  window.onload = function() {
  const click = document.getElementById('click');

  click.addEventListener("click", (event) => {
    clickotron();
});
  };