function changeButtonColor(button) {
    // Удаляем класс у всех кнопок
    var buttons = document.getElementsByClassName("btn1")[0].getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("blue-button");
    }

    // Добавляем класс к нажатой кнопке
    button.classList.add("blue-button");

    // Показываем форму form2
    document.getElementsByClassName("form2")[0].style.display = "block";
}
function changeButtonColor_1(button) {
    // Удаляем класс у всех кнопок
    var buttons = document.getElementsByClassName("btn2")[0].getElementsByTagName("button");
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("blue-button");
    }

    // Добавляем класс к нажатой кнопке
    button.classList.add("blue-button");}