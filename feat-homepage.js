const menuList = document.getElementById('content');
const comfyDropdown = document.getElementById('comfyDropdown')

// Toggle the 'active' class to show/hide the menu with animation
comfyDropdown.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

const mode = document.getElementById("mode");

mode.onclick = function () {
    document.body.classList.toggle("dark-theme");
}
