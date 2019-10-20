const nav = document.querySelector(`nav`);
const navOffset = nav.offsetTop;

function fixNavbar(e) {
    if (window.scrollY >= navOffset) {
        document.body.classList.add("fixed-bar");
        document.body.style.paddingTop = `${nav.offsetHeight}px`;

    } else {
        document.body.classList.remove("fixed-bar");
        document.body.style.paddingTop = 0;
    }

}

window.addEventListener('scroll', fixNavbar);