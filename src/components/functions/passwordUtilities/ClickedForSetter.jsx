export default function clickedForSetter(clickedForName) {
  const masterPassUI = document.getElementById('masterPassUI');
  masterPassUI.setAttribute('clicked-for', clickedForName);
  console.log(masterPassUI.getAttribute('clicked-for'));
  return true;
}
