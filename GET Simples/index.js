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
      <div class="user">
        <p><img src="${user.avatar}" alt="${user.first_name}" /></p>
        <p>Nome: ${user.first_name}</p>
        <p>Email: ${user.email}</p>
      </div>
      `;
      })
      .join("");
    console.log(html);
    document.querySelector("#data").insertAdjacentHTML("afterbegin", html);
  } catch (e) {
    console.log(e);
  }
}
