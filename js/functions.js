function renderTeamMembers(array) {
  let injectedHtml = ``;
  for (let i = 0; i < array.length; i++) {
    let curMemb = array[i];
    injectedHtml += `
         <div class="col-12 col-md-6 my-3">
          <div class="card card-member bg-dark text-white flex-row">
            <div class="card-image" style="width: 40%; display: flex; align-items: center;">
             <img src="${curMemb.img}" alt="${curMemb.name}" style="width: 100%; object-fit: cover;">
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
