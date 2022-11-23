async function submitForm(e, form) {
  e.preventDefault();
  const btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.disabled = true;
  const jsonFormData = {};
  for (const pair of new FormData(form)) {
    jsonFormData[pair[0]] = pair[1];
  }
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer TOKEN_MISSING",
      },
      body: JSON.stringify(jsonFormData),
    });
    const content = await response.json();
  } catch (e) {
    console.error("Erro no POST" + e);
    throw e;
  }
}

const simpleForm = document.querySelector("#simpleForm");
if (simpleForm) {
  simpleForm.addEventListener("submit", function (e) {
    submitForm(e, this);
  });
}
