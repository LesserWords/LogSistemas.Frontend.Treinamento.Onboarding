interface IFormData {
  FistName: string;
  Email: string;
  Password: string;
}
interface IResponseContent extends IFormData {
  id: number;
}

async function submitForm(e: Event, form: HTMLFormElement) {
  (e as SubmitEvent).preventDefault();
  const btnSubmit: HTMLButtonElement = document.getElementById(
    "btnSubmit"
  ) as HTMLButtonElement;
  btnSubmit!.disabled = true;
  const formDataFull = new FormData(form);
  const jsonFormData: IFormData = {
    FistName: formDataFull.get("FirstName")?.toString() || "",
    Email: formDataFull.get("Email")?.toString() || "",
    Password: formDataFull.get("Email")?.toString() || "",
  };
  try {
    const response: Response = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer TOKEN_MISSING",
        },
        body: JSON.stringify(jsonFormData),
      }
    );
    const content: IResponseContent = await response.json();
    if (content) {
      alert("Sucesso, seu ID: " + content.id);
    }
  } catch (e: any) {
    console.error("Erro no POST" + e);
    throw e;
  }
}

const simpleForm: Element | null = document.querySelector("#simpleForm");
if (simpleForm) {
  simpleForm.addEventListener("submit", handleFormEvent);
}

function handleFormEvent(this: HTMLFormElement, e: Event) {
  submitForm(e, this);
}
