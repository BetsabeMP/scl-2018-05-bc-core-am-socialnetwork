//Funcionalidad del sidemenu
function toggleMenu() { //Se agrega la función onclick="toggleMenu()" al nav bar y al botón cerrar.
  if (sideMenu.className.indexOf("menu_closed") >= 0) { //Ésto revisa si el menú está cerrado.
    openMenu();  //Si la clase está presente, el menú está cerrado así que se cambia la clase para abrirlo
  } else {
    closeMenu(); //Si no esta la clase, le indicamos que cierre el menu o que se mantenga cerrado.
  }
}

function openMenu() {
  sideMenu.classList.remove('menu_closed'); //Se quita la clase display-none para que se vea.
  sideMenu.classList.add('menu_open');
}

function closeMenu() {
  sideMenu.classList.add('menu_closed'); //Se añade la clase display-none para que se oculte.
  sideMenu.classList.remove('menu_open');
}