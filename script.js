function c(val) {
  let t = val;
  document.getElementById("con").style.display = "block";

  let p = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${t}`);
  p.then((res) => {
    return res.json();
  })
    .then((data) => {
      let a = document.getElementById("aud");
      a.src = data[0].phonetics[0].audio;
      document.getElementById("def").innerHTML =
        data[0].meanings[0].definitions[0].definition;
      document.getElementById("ex").innerHTML =
        data[0].meanings[0].definitions[0].example;
    })
    .catch((err) => {
      document.getElementById("def").innerHTML = "Not found in database";
      document.getElementById("ex").innerHTML = "Not found in database";

      let b = document.getElementById("aud");
      b.src = "#";
    });
}
