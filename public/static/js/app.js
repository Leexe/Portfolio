const sidebarBtn = document.getElementById('sidebar-btn');
const sidebar = document.getElementById('sidebar');
const mediaQuery = window.matchMedia("(min-width: 600px)");
sidebarBtn.addEventListener('click', toggleSideBar);

mediaQuery.addEventListener("change", closeSideMenu);

// Toggles the dropdown in the sidebar when the drop down button is pressed
function toggleSidebarDropDown(button) {
    if (!button.nextElementSibling.classList.contains('show')) {
        closeAllSubMenus();
    }

    button.nextElementSibling.classList.toggle('show');
    button.classList.toggle('rotate');

    // If the sidebar is closed and the dropdown button is pressed, open the sidemenu 
    if (sidebar.classList.contains('close')) {
        sidebar.classList.toggle('close');
        sidebarBtn.classList.toggle('rotate');
    }
}

// Toggles the sidebar when the sidebar button is pressed 
function toggleSideBar() {
    sidebar.classList.toggle('close');
    sidebarBtn.classList.toggle('rotate');

    closeAllSubMenus();
}

// Closes all the dropdown submenus  
function closeAllSubMenus() {
    Array.from(sidebar.getElementsByClassName('show')).forEach(ul => {
        ul.previousElementSibling.classList.remove('rotate');
        ul.classList.remove('show');
    })
}

function closeSideMenu() {
    sidebar.classList.remove('close');
    sidebarBtn.classList.remove('rotate');
}