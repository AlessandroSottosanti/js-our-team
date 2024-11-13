const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const cardsMembersElem = document.getElementById("cards-members");
console.log(cardsMembersElem);

// input form
const formElem = document.getElementById("form");

// Richiamo funzione per caricare le card
renderTeamMembers(teamMembers);


let newMember = {};

// Add Member event
formElem.addEventListener("submit", function (event) {

  // Preveniamo il ricaricamento della pagina
  event.preventDefault();


  // Ottengo i valori dell'input
  const nameValue = document.getElementById("name").value.trim();
  const roleValue = document.getElementById("role").value.trim();
  const emailValue = document.getElementById("email").value.trim();
  const imgValue = document.getElementById("img").value.trim() || "./img/zoro.png";

  // creo il nuovo membro
  newMember = {
    name: nameValue,
    role: roleValue,
    email: emailValue,
    img: imgValue
  }

  console.log(newMember);

  // aggiungo il membro all'array
  teamMembers.push(newMember);

  // Richiamo la funzione per rigenerare e mostrare le card con il nuovo membro
  renderTeamMembers();

  // Resetto i campi del form dopo l'invio
  formElem.reset();

});

console.log(teamMembers);







cardsMembersElem.innerHTML = injectedHtml;

