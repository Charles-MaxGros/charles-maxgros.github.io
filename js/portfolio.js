function showPopup(event, popupId) {
  event.preventDefault();

  let popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "block";
  }
}

function closePopup(popupId) {
  let popup = document.getElementById(popupId);
  if (popup) {
    popup.style.display = "none";
  }
}

  


  // function enregistrerDonnees() {
  //   // Récupérez les valeurs des champs du formulaire
  //   const nom = document.getElementById("nom").value;
  //   const email = document.getElementById("email").value;
  //   const message = document.getElementById("message").value;
  
  //   // Créez un objet JSON avec les données du formulaire
  //   const donnees = {
  //     nom: nom,
  //     email: email,
  //     message: message,
  //   };
  
  //   // Convertissez l'objet JSON en une chaîne JSON
  //   const donneesJSON = JSON.stringify(donnees);
  
  //   // Créez un objet Blob contenant le JSON
  //   const blob = new Blob([donneesJSON], { type: "application/json" });
  
  //   // Créez un lien pour le téléchargement du fichier JSON
  //   const a = document.createElement("a");
  //   a.href = URL.createObjectURL(blob);
  //   a.download = "donnees.json";
  //   a.textContent = "Télécharger le fichier JSON";
  
  //   // Ajoutez le lien à la page
  //   document.body.appendChild(a);
  
  //   // Cliquez automatiquement sur le lien pour déclencher le téléchargement
  //   a.click();
  
  //   // Supprimez le lien après le téléchargement
  //   document.body.removeChild(a);
  // }

  
  


