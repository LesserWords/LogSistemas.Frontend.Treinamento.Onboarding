interface IApiReponseSuport{
  url: string
  text: string
}
interface IUser {
  id: number
  email: string
  first_name:string
  last_name: string
  avatar: string
}
interface IApiReponse<T> { 
  page: number
  per_page:number
  total : number
  total_pages: number
  data: Array<T>
  support: IApiReponseSuport
}

function triggerOnClick() {
  getData();
}
async function getData() {
  try {
    const response:Response = await fetch("https://reqres.in/api/users");
    if (!response.ok) throw await response.json();

    const responseObject:IApiReponse<IUser> = await response.json();
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
    const dataElement: Element | null = document.querySelector("#data")
    if (dataElement) {
      dataElement.insertAdjacentHTML("afterbegin", html);
    }
  } catch (e:any) {
    console.log(e);
  }
}
function selectUser(element: HTMLElement) {

  if (element.parentNode && element.parentNode.parentNode && element.parentNode.parentNode) {
    const grandParentNode: any = element.parentNode.parentNode
    const grandParentNodeAsHTMLElement: HTMLElement = grandParentNode
    if (grandParentNodeAsHTMLElement.classList.contains("user-card-selected")) {
      grandParentNode.classList.remove("user-card-selected");
    } else {
      grandParentNode.classList.add("user-card-selected");
    }
  }
}
