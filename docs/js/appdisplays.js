//Funciones para que sólo se muestren las páginas elegidas en el sidebar. 
wall = () => {
  logIn.style.display = "none";
  profile.style.display = "none";
  articlesDisplay.style.display = "none";
  professionalSupportDisplay.style.display = "none";
  talksDisplay.style.display = "none";
  complaintsDisplay.style.display = "none";
  wallDisplay.style.display = "block";
}

articles = () => {
  logIn.style.display = "none";
  profile.style.display = "none";
  professionalSupportDisplay.style.display = "none";
  talksDisplay.style.display = "none";
  complaintsDisplay.style.display = "none";
  wallDisplay.style.display = "none";
  articlesDisplay.style.display = "block";
}

professionalSupport = () => {
  logIn.style.display = "none";
  profile.style.display = "none";
  articlesDisplay.style.display = "none";
  talksDisplay.style.display = "none";
  complaintsDisplay.style.display = "none";
  wallDisplay.style.display = "none";
  professionalSupportDisplay.style.display = "block";
}

talks = () => {
  logIn.style.display = "none";
  profile.style.display = "none";
  articlesDisplay.style.display = "none";
  professionalSupportDisplay.style.display = "none";
  complaintsDisplay.style.display = "none";
  wallDisplay.style.display = "none";
  talksDisplay.style.display = "block";
}

complaints = () => {
  logIn.style.display = "none";
  profile.style.display = "none";
  articlesDisplay.style.display = "none";
  professionalSupportDisplay.style.display = "none";
  talksDisplay.style.display = "none";
  wallDisplay.style.display = "none";
  complaintsDisplay.style.display = "block";
}

profileGo = () => {
  profile.style.display = "block";
  articlesDisplay.style.display = "none";
  professionalSupportDisplay.style.display = "none";
  talksDisplay.style.display = "none";
  wallDisplay.style.display = "none";
  complaintsDisplay.style.display = "none";
}
