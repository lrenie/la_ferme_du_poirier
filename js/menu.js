const btn_burgers = document.querySelectorAll('.burger-menu');
const background = document.querySelector('.background-color-jaune-menu');

// AFFICHER ET RETIRER MENU

btn_burgers.forEach( btn_burger =>
  btn_burger.addEventListener("click", (event) => {
    // savoir si le menu est ouvert ou non
      menu_active = document.querySelector('.menu-active')
    // burger menu
      svg_1s = document.querySelectorAll('.svg-burger-menu-1')
      svg_2s = document.querySelectorAll('.svg-burger-menu-2')
      svg_3s = document.querySelectorAll('.svg-burger-menu-3')

    if (menu_active === null) {
    // position de la page
      scroll_position = window.scrollY;
    // afficher le menu déroulant
      background.classList.add('menu-active');
    // modifier le burger menu => croix
      svg_1s.forEach(svg_1 =>
        svg_1.classList.add('svg-burger-menu-1-active'));
      svg_2s.forEach(svg_2 =>
        svg_2.classList.add('svg-burger-menu-2-active'));
      svg_3s.forEach(svg_3 =>
        svg_3.classList.add('svg-burger-menu-3-active'));
    } else {
    // replacer la page en cas de scroll
      window.scrollTo({
        top: `${scroll_position}`
      });
    // retirer le menu déroulant
      background.classList.remove('menu-active');
    // modifier le burger menu => burger menu
      svg_1s.forEach(svg_1 =>
        svg_1.classList.remove('svg-burger-menu-1-active'));
      svg_2s.forEach(svg_2 =>
        svg_2.classList.remove('svg-burger-menu-2-active'));
      svg_3s.forEach(svg_3 =>
        svg_3.classList.remove('svg-burger-menu-3-active'));
    }
  }));
