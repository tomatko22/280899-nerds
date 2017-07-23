
    var button = document.querySelector(".map-btn");
    var popup = document.querySelector(".write");
    var close = popup.querySelector(".write-close");
    var name = popup.querySelector("[name=email]");

    button.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.add("write-show");
        name.focus();
    });

    close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("write-show");
    });

    window.addEventListener("keydown", function(event) {
        if (event.keyCode === 27) {
          if (popup.classList.contains("write-show")) {
            popup.classList.remove("write-show");
          }
        }
      });
