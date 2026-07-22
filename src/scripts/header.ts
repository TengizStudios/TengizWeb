const accountsNavBtn = document.getElementById("accounts-nav-but");
const accountsNavMenu = document.getElementById("accounts-dropdown-menu");

const gamesNavBtn = document.getElementById("games-nav-but");
const gamesNavMenu = document.getElementById("dropdown-games-menu");

const header = document.getElementById("header");

accountsNavBtn?.addEventListener("click", () => {
    accountsNavMenu?.classList.toggle("open");
    // header?.classList.toggle("nav-open");
        }
);

gamesNavBtn?.addEventListener("click", () => {
    gamesNavMenu?.classList.toggle("open");
        }
);