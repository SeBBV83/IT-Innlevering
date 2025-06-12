//viruspopup
function FalskKonkurranse(event) {
    event.preventDefault();

    for (let i = 0; i < 3; i++) {
        let boks = document.createElement("div");

        boks.innerText = "⚠️ Du har fått VIRUS!";
        boks.style.position = "fixed";
        boks.style.top = Math.random() * 80 + "%";
        boks.style.left = Math.random() * 80 + "%";
        boks.style.background = "red";
        boks.style.color = "white";
        boks.style.padding = "30px";
        boks.style.fontSize = "24px";
        boks.style.fontWeight = "bold";
        boks.style.borderRadius = "10px";

        document.body.appendChild(boks);

        setTimeout(function () {
        boks.remove();
        }, 3000);
    }
    }

    //passordtest
    let passord = document.getElementById("passord");
    let melding = document.getElementById("melding");
  
    passord.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        let tekst = passord.value;
        let poeng = 0;
  
        if (tekst.length >= 8) poeng++;
        if (/[a-z]/.test(tekst)) poeng++;
        if (/[A-Z]/.test(tekst)) poeng++;
        if (/[0-9]/.test(tekst)) poeng++;
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(tekst)) poeng++;
  
        if (tekst.length === 0) {
          melding.textContent = "";
        } else if (poeng <= 2) {
          melding.textContent = "🔴 Svakt passord";
          melding.style.color = "red";
        } else if (poeng === 3 || poeng === 4) {
          melding.textContent = "🟡 Medium passord";
          melding.style.color = "orange";
        } else {
          melding.textContent = "🟢 Sterkt passord";
          melding.style.color = "green";
        }
      }
    });