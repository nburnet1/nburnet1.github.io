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
    console.log("Applying Eco Theme");
    // Body
    document.querySelector("body").className = 'eco start';
    // Icons
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(element => {
        element.className = "eco theme-icon"
    });
    // Topic Headers
    const headers = document.querySelectorAll('.topic-header');
    headers.forEach(element => {
        element.className = "eco-header topic-header";
    });
    // Card Headers
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach(element => {
        element.className = 'eco-card-header card-header';
    });
    // Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(element => {
        element.className = 'eco-card card';
    });

    // Information
    const infos = document.querySelectorAll('.information');
    infos.forEach(element => {
        element.className = 'eco-info information';
    });

    // Section
    const sections = document.querySelectorAll('.card-section');
    sections.forEach(element => {
        element.className = "eco-section card-section";
    });

    togMenu();


}

const charcoal = ev => {
    console.log("Applying Night theme");
    // Body
    document.querySelector("body").className = 'charcoal start';
    // Icons
    const icons = document.querySelectorAll('.theme-icon');
    icons.forEach(element => {
        element.className = "charcoal theme-icon"
    });
    // Topic Headers
    const headers = document.querySelectorAll('.topic-header');
    headers.forEach(element => {
        element.className = "charcoal-header topic-header";
    });
    // Card Headers
    const cardHeaders = document.querySelectorAll('.card-header');
    cardHeaders.forEach(element => {
        element.className = 'charcoal-card-header card-header';
    });
    // Cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(element => {
        element.className = 'charcoal-card card';
    });

    // Information
    const infos = document.querySelectorAll('.information');
    infos.forEach(element => {
        element.className = 'charcoal-info information';
    });

    // Section
    const sections = document.querySelectorAll('.card-section');
    sections.forEach(element => {
        element.className = "charcoal-section card-section";
    });

    togMenu();

}
