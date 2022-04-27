const menuMobile = document.querySelector('.js-header-menu');
const header = document.querySelector('#header');
let headerHeight = header.clientHeight;
let menuItems = document.querySelectorAll('#nav li a[href*="#"]');

// Đóng mở menu khi click vào biểu tượng menu
function showHideMenuMobile() {
    const isClosed = header.clientHeight === headerHeight;
    if (isClosed) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

menuMobile.addEventListener('click', showHideMenuMobile);


// đóng menu khi click vào link
for (const menuItem of menuItems) {
    menuItem.addEventListener('click', function(event) {
        let isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    })
}

