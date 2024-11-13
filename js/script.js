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

console.log(teamMembers);

let injectedHtml = ``;

for(i = 0; i < teamMembers.length; i++) {
  let curMemb = teamMembers[i];
  injectedHtml += `
         <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3 ">
          <div class="card">
            <div class="card-header d-flex justify-content-center">
             <img src="./${curMemb.img}" alt="${curMemb.img}">
            </div>
            <div class="card-body">
              <h3>${curMemb.name}</h3>
              <p>${curMemb.role}</p>
              <p>Email: ${curMemb.email}</p>
            </div>
          </div>
        </div> `;
}

cardsMembersElem.innerHTML = injectedHtml;