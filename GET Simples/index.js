async function triggerOnClick() {
  getData();
}
async function getData() {
  try {
    const response = await fetch("https://reqres.in/api/users");
    if (!response.ok) throw await response.json();

    const responseObject = await response.json();
    const html = responseObject.data
      .map((user) => {
        return `
      <div id="user-${user.id}" class="user-card" >
        <p><img id="userImg" src="${user.avatar}" alt="${user.first_name}" /></p>
        <p class="user-name">${user.first_name}</p>
        <p class="user-email">${user.email}</p>
        <p><button class="select-user-button" onclick="selectUser(this)" >Selecionar</button></p>
      </div>
      `;
      })
      .join("");
    // console.log(html);
    document.querySelector("#data").insertAdjacentHTML("afterbegin", html);
  } catch (e) {
    console.log(e);
  }
}
function selectUser(element) {
  if (element.parentNode.parentNode.classList.contains("user-card-selected")) {
    element.parentNode.parentNode.classList.remove("user-card-selected");
  } else {
    element.parentNode.parentNode.classList.add("user-card-selected");
  }
}
