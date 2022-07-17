// getting dom reffarence

const toogeler = document.getElementById(`menu-toogeler`);
const navRight = document.querySelector(`.nav-right`);

toogeler.addEventListener(`click`, () => {
    navRight.classList.toggle(`show`);
});