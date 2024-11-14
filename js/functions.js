function renderTeamMembers(array) {
    let injectedHtml = ``;
    for (let i = 0; i < teamMembers.length; i++) {
      let curMemb = teamMembers[i];
      injectedHtml += `
           <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3 ">
            <div class="card bg-dark text-white">
              <div class="card-header d-flex justify-content-center">
               <img src="${curMemb.img}" alt="${curMemb.img}">
              </div>
              <div class="card-body">
                <h3>${curMemb.name}</h3>
                <p>${curMemb.role}</p>
                <p>Email: ${curMemb.email}</p>
              </div>
            </div>
          </div>`;
    }
    cardsMembersElem.innerHTML = injectedHtml;
  }
  