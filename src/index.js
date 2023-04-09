const init = () => {
  let form = document.querySelector("form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let formData = new FormData(form);
    let id = formData.get("searchByID");

    fetch(`http://localhost:3000/movies?id=${id}`, {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        for (let i = 0; i < data.length; i++) {
          console.log(data[i].title);
          let titleMovie = document.querySelector("h4");
          let sum = document.querySelector("p");

          titleMovie.textContent=data[i].title;
          sum.textContent=data[i].summary;

        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
