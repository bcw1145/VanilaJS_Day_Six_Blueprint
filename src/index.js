// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>
const select = document.querySelector("select");
const SELECT_LS = "country";

function saveSelectChange(obj) {
  localStorage.setItem("country", JSON.stringify(obj));
}

function selectChange(e) {
  var key = e.target.selectedIndex;
  var value = select.options[key].value;
  var text = select.options[key].text;
  const selectObj = {
    key: value,
    text
  };
  saveSelectChange(selectObj);
  changeSelect(value);
}

function changeSelect(num) {
  const option = select.querySelector(`option[value=${num}]`);
  option.selected = true;
  console.log(option);
}

function loadSelect() {
  const loadedSelect = localStorage.getItem(SELECT_LS);
  if (loadedSelect === null) {
  } else {
    const parseSelect = JSON.parse(loadedSelect);
    var keys = parseSelect.key;
    console.log(keys);
    changeSelect(keys);
  }
}

function init() {
  loadSelect();
  select.addEventListener("change", selectChange);
}

init();
