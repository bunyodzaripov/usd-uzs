const uzs = document.querySelector("#uzs");
const usd = document.querySelector("#usd");

uzs.addEventListener("input", (e) => {
  const request = new XMLHttpRequest();

  request.open("GET", "current.json");
  request.setRequestHeader("Content-Type", "application/json; charset=utf-8");
  request.send();

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const date = JSON.parse(request.response);
      usd.value = (+uzs.value / date.current.usd).toFixed(2);
    } else {
      usd.value = "error";
    }
  });
});
