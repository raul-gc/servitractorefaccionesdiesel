//Navbar
let enlaces = document.getElementById("enlaces");
let menuh = document.getElementById("icono");
let contador = 0;

/* menu hamburguer */
menuh.addEventListener("click", function () {
  if (contador == 0) {
    document.getElementById('barsocial').style.display = 'none';
    document.getElementById('areasearch').style.display = 'none';
    enlaces.className = ('enlaces dos');
    contador = 1;
  } else {
    enlaces.classList.remove('dos');
    enlaces.className = ('enlaces uno');
    contador = 0;
    document.getElementById('barsocial').style.display = 'block';
    document.getElementById('areasearch').style.display = 'block';
  }
})

window.addEventListener('resize', function () {
  if (this.screen.width > 850) {
    contador = 0;
    enlaces.classList.remove('dos');
    enlaces.className = ('enlaces uno');
  }
})

/* funciones scroll */
let ubicacionPrincipal = window.pageYOffset;

window.onscroll = function () {
  let Desplazamiento_Actual = window.pageYOffset;
  if (ubicacionPrincipal >= Desplazamiento_Actual) {
    document.getElementById('navbar').style.top = '0';

    $("div.card.show").removeClass("show");
    $("div.cards").removeClass("showing");
    document.getElementById('nosotros').style.opacity = '1';
    document.getElementById('serviciossec').style.opacity = '1';

  } else {
    document.getElementById('navbar').style.top = '-100px';
    document.getElementById('navbar').style.position = 'fixed';
    document.getElementById('navbar').style.width = '100%';
    document.getElementById('navbar').style.zIndex = '1001';
    cover_ctn_search.style.display = 'none';
    inputSearch.value = '';
    box_search.style.display = 'none';

    $("div.card.show").removeClass("show");
    $("div.cards").removeClass("showing");
    document.getElementById('nosotros').style.opacity = '1';
    document.getElementById('serviciossec').style.opacity = '1';
  }
  ubicacionPrincipal = Desplazamiento_Actual;
}

//Buscador
inputSearch = document.getElementById('inputSearch');
box_search = document.getElementById('box-search');
cover_ctn_search = document.getElementById('cover-ctn-search');

inputSearch.addEventListener('click', usar_buscador);
cover_ctn_search.addEventListener('click', ocultar_buscador);

function usar_buscador() {
  cover_ctn_search.style.display = 'block';
  inputSearch.focus();

  if (inputSearch.value === "") {
    box_search.style.display = "none";

    document.getElementById('botonsearch').style.transform = 'translate(0, 0)';
  }
}

function ocultar_buscador() {
  document.getElementById('botonsearch').style.transform = 'translate(-500%, 0)';
  cover_ctn_search.style.display = 'none';
  inputSearch.value = '';
  box_search.style.display = "none";
}

//Funcion busqueda
document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

function buscador_interno() {

  filter = inputSearch.value.toUpperCase();
  li = box_search.getElementsByTagName("li");

  //Recorriendo elementos a filtrar mediante los "li"
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    textValue = a.textContent || a.innerText;
    if (textValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
      box_search.style.display = "block";
      if (inputSearch.value === "") {
        box_search.style.display = "none";
      }
    } else {
      li[i].style.display = "none";
    }
  }
}

//Hacia arriba
$(document).ready(function () {
  irArriba();
});

function irArriba() {
  $(".ir-arriba").click(function () {
    $("body,html").animate({
      scrollTop: "0px"
    }, 1000);
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".ir-arriba").slideDown(600);
    } else {
      $(".ir-arriba").slideUp(600);
    }
  });
  $(".ir-abajo").click(function () {
    $("body,html").animate({
      scrollTop: "1000px"
    }, 1000);
  });
}

//Catalogo
$(document).ready(function () {
  var zindex = 10;

  $("div.card").click(function (e) {
    e.preventDefault();

    var isShowing = false;

    if ($(this).hasClass("show")) {
      isShowing = true;
    }

    if ($("div.cards").hasClass("showing")) {
      // a card is already in view
      $("div.card.show").removeClass("show");
      document.getElementById('nosotros').style.opacity = '1';
      document.getElementById('serviciossec').style.opacity = '1';

      if (isShowing) {
        // this card was showing - reset the grid
        $("div.cards").removeClass("showing");
      } else {
        // this card isn't showing - get in with it
        $(this).css({
          zIndex: zindex
        }).addClass("show");
        document.getElementById('nosotros').style.opacity = '0.6';
        document.getElementById('serviciossec').style.opacity = '0.6';

      }

      zindex++;
    } else {
      // no cards in view
      $("div.cards").addClass("showing");

      $(this).css({
        zIndex: zindex
      }).addClass("show");
      document.getElementById('nosotros').style.opacity = '0.6';
      document.getElementById('serviciossec').style.opacity = '0.6';
      zindex++;
    }
  });
});

//Servicios
const services = document.querySelectorAll(".service");

function transition() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
}

services.forEach((service) => service.addEventListener("click", transition));