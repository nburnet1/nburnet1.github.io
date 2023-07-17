const togMenu = ev => {
    const menu = document.querySelector('.settings');
    if (menu.style.display == "none" || menu.style.display == "") {
        menu.style.display = "inherit";
    }
    else {
        menu.style.display = "none";
    }
};
const windough = ev => {
    console.log("Applying Windough Theme");
    // Body
    document.querySelector("body").className = 'start';
    // Icons
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(element => {
        element.className = "theme-icon"
    });
    // Topic Headers
    const headers = document.querySelectorAll('.topic-header');
    headers.forEach(element => {
        element.className = "topic-header";
    });
    // Card Headers
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach(element => {
        element.className = 'card-header';
    });
    // Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(element => {
        element.className = 'card';
    });

    // Information
    const infos = document.querySelectorAll('.information');
    infos.forEach(element => {
        element.className = 'information';
    });

    // Section
    const sections = document.querySelectorAll('.card-section');
    sections.forEach(element => {
        element.className = "card-section";
    });

    togMenu();

}

const eco = ev => {
    const root = document.documentElement;
    root.style.setProperty("--default-color","#2a4b41");
    root.style.setProperty("--default-gradient", "#4b7467");
    root.style.setProperty("--default-secondary-color","#c7c6c1");
    togMenu();


}

const charcoal = ev => {
    const root = document.documentElement;
    root.style.setProperty("--default-color","black");
    root.style.setProperty("--default-gradient", "#15191d");
    root.style.setProperty("--default-secondary-color","#15191d");
    root.style.setProperty("--default-tertiary-color","#6f6f6f")
    root.style.setProperty("--default-font-color", "white");
    togMenu();

}
