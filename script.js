document.addEventListener("DOMContentLoaded", function () {
    // Quiz
    const quiz = document.getElementById("quiz");
    const resultat = document.getElementById("resultat");
    const prøvIgjenKnapp = document.getElementById("prøvIgjenKnapp");
  
    if (quiz && resultat && prøvIgjenKnapp) {
      quiz.addEventListener("submit", function (e) {
        e.preventDefault();
        let riktige = 0;
  
        for (let nr = 1; nr <= 5; nr++) {
          let navnPåSpørsmål = "spm" + nr;
          let valgtSvar = document.querySelector('input[name="' + navnPåSpørsmål + '"]:checked');
          let boks = document.getElementById(navnPåSpørsmål);
  
          if (boks) {
            boks.classList.remove("riktig", "feil");
  
            if (valgtSvar) {
              if (valgtSvar.value === "riktig") {
                riktige++;
                boks.classList.add("riktig");
              } else {
                boks.classList.add("feil");
              }
            } else {
              boks.classList.add("feil");
            }
          }
        }
  
        resultat.textContent = "Du fikk " + riktige + " av 5 riktige.";
        resultat.style.color = riktige >= 4 ? "lightgreen" : "orange";
        prøvIgjenKnapp.style.display = "block";
      });
    }
  
    // Passordtest
    const passord = document.getElementById("passord");
    const melding = document.getElementById("melding");
  
    if (passord && melding) {
      passord.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
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
          } else if (poeng <= 4) {
            melding.textContent = "🟡 Medium passord";
            melding.style.color = "orange";
          } else {
            melding.textContent = "🟢 Sterkt passord";
            melding.style.color = "green";
          }
        }
      });
    }
  
    // Virus-popup
    window.FalskKonkurranse = function (event) {
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
        boks.style.zIndex = "9999";
  
        document.body.appendChild(boks);
  
        setTimeout(() => boks.remove(), 3000);
      }
    };
  });  