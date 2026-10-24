// ===== Part 1. Task 1: Personal info object =====
const userProfile = {
  name: "Madiyar",                                   
  birthYear: 2005,                                   
  isDeveloper: true,                                 
  hobbies: ["reading", "sports", "music"]           
};



// ===== Part 1. Task 2: Arithmetic calculations =====
function calculateAge() {
  const currentYear = new Date().getFullYear();
  return currentYear - userProfile.birthYear;
}

function calculateMonths() {
  return calculateAge() * 12;
}

function showProfile() {
  const age = calculateAge();
  const months = calculateMonths();
  const hobbiesCount = userProfile.hobbies.length;

  document.getElementById("outName").textContent = userProfile.name;
  document.getElementById("outBirthYear").textContent = userProfile.birthYear;
  document.getElementById("outDeveloper").textContent = userProfile.isDeveloper ? "Yes" : "No";
  document.getElementById("outHobbies").textContent = userProfile.hobbies;
  document.getElementById("outAge").textContent = age;
  document.getElementById("outMonths").textContent = months;
  document.getElementById("outHobbiesCount").textContent   = hobbiesCount;

  console.log("Age:", age);
  console.log("Age in months:", months);
  console.log("Total hobbies:", hobbiesCount);
}

// ===== Part 2. Task 3 and Task 4: Form and event listener =====
const profileForm = document.getElementById("profileForm");
const usernameInput = document.getElementById("username");
const birthYearInput = document.getElementById("birthYear");

profileForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  userProfile.name = usernameInput.value.trim();
  userProfile.birthYear = Number(birthYearInput.value);

  console.log("Profile updated:", userProfile);
  showProfile();
});

// ===== Part 3. Task 5: Creating and removing elements =====
const hobbyList = document.getElementById("hobbyList");
const newItemInput = document.getElementById("newItem");

function addListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  hobbyList.appendChild(li);
}

// Fill the list with the hobbies from the object
userProfile.hobbies.forEach(addListItem);

document.getElementById("addBtn").addEventListener("click", function () {
  const text = newItemInput.value.trim();
  if (text === "") {
    return;
  } 
  addListItem(text);
  userProfile.hobbies.push(text);
  newItemInput.value = "";
  showProfile();
});

document.getElementById("removeBtn").addEventListener("click", function () {
  if (hobbyList.lastElementChild) {
    hobbyList.removeChild(hobbyList.lastElementChild);
    userProfile.hobbies.pop();
    showProfile();
  }
});

showProfile();
