async function submitForm(e, form) {
  e.preventDefault();
  const btnSubmit = document.getElementById("btnSubmit");
  btnSubmit.disabled = true;
  const jsonFormData = {};
  for (const pair of new FormData(form)) {
    jsonFormData[pair[0]] = pair[1];
    // jsonFormData["agora"] = "ontem";
    console.log(jsonFormData);
  }
  // const dollllo = new FormData(form);
  // console.log(...dollllo);

  const headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer TOKEN_MISSING",
  };
  try {
    const rawResponse = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
      {
        method: "POST",
        headers: headers,
        body: JSON.stringify(jsonFormData),
      }
    );
    const content = await rawResponse.json();
    console.log(content);
  } catch (e) {
    console.error(`Erro no POST: ${err}`);
    throw e;
  }
  btnSubmit.disabled = false;
}

const sampleForm = document.querySelector("#sampleForm");
if (sampleForm) {
  sampleForm.addEventListener("submit", function (e) {
    submitForm(e, this);
  });
}
