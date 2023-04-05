const menu = document.getElementById('menu')
const menuToggle = document.getElementById('menu-toggle')
menu.classList.add("hidden");
// const navBar= document.getElementById('navbar')
// query mencari semua elemnt a yg ada di nav
// navBar.querySelectorAll("a").forEach((a) => {
//     a.addEventListener("click", () => {
//         menu.classList.add("hidden");
//     });
//   });
menuToggle.addEventListener('click', () => {
    const token = menu.classList
    if(token.contains('hidden')){
        token.remove('hidden')
    } else {
        token.add('hidden')
    }
})


