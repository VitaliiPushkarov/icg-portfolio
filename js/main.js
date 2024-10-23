document.addEventListener('DOMContentLoaded', function() {
    var mobBurger = document.querySelector('.js-mob-burger');
    var mainHeader = document.querySelector('.js-main-header');
    var headerSections = document.querySelectorAll('.js-main-header a');

    mobBurger.addEventListener('click', function() {
        mainHeader.classList.toggle('is-active');
        mobBurger.classList.toggle('is-active')
    });

    headerSections.forEach(function(section) {
        section.addEventListener('click', function() {
            mainHeader.classList.remove('is-active');
            mobBurger.classList.remove('is-active');
        });
    });
});
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
    } else {
        // Redirect to the thank you page
        window.location.href = "thanks.html";
    }
});

const cookieBox = document.querySelector(".cookie-wrapper"),
  buttons = document.querySelectorAll(".cookie-button");

  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      cookieBox.classList.add("hidden");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
