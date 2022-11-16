async function triggerOnClick() {
  fetch("https://reqres.in/api/users")
    //   fetch("https://poetrydb.org/linecount/5")
    .then((response) => response.json())
    .then((data) => console.log(data));
}
