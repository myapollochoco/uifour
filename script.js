//switch theme
// const themeSwitch = document.getElementById('theme-switch');
// const currentTheme = localStorage.getItem('theme');

// if (currentTheme) {
//     document.body.setAttribute('data-theme', currentTheme);
// }

// themeSwitch.addEventListener('change', () => {
//     let theme = document.body.getAttribute('data-theme');
//     if (theme === 'dark') {
//         document.body.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     } else {
//         document.body.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     }
// });

const themeSwitch = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme');

// Set the initial theme based on local storage, default to light
if (currentTheme) {
    document.body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        themeSwitch.checked = true;
    }
} else {
    document.body.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});
