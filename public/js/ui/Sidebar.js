/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const sidebarMini = document.querySelector(".sidebar-mini");
    const sidebarToggle = document.querySelector(".sidebar-toggle");
    sidebarToggle.addEventListener("click", (e) => {
      e.preventDefault();
      sidebarMini.classList.toggle("sidebar-open");
      sidebarMini.classList.toggle("sidebar-collapse");
    });
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const menuItemRegister = document.querySelector(".menu-item_register");
    const menuItemLogin = document.querySelector(".menu-item_login");
    const menuItemLogout = document.querySelector(".menu-item_logout");

    menuItemRegister.addEventListener("click", (e) => {
      e.preventDefault();
      App.getModal("register").open();
    });

    menuItemLogin.addEventListener("click", (e) => {
      e.preventDefault();
      App.getModal("login").open();
    });

    menuItemLogout.addEventListener("click", (e) => {
      e.preventDefault();
      User.logout(() => {
        App.getModal("register").open();
      });
    });
  }
}