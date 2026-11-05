const typingText = document.getElementById("typingText");

const words = [
    "IT Student",
    "Web Developer",
    "JavaScript Developer",
    "Future Full-stack Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const word = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            word.slice(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            word.slice(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1) % words.length;
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 45 : 90
    );
}

typingEffect();


const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        themeBtn.textContent = "☾";
    } else {
        themeBtn.textContent = "☀";
    }

});


const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }


    const sections =
        document.querySelectorAll("section");

    const links =
        document.querySelectorAll(".nav a");

    let current = "";


    sections.forEach(section => {

        const top =
            section.offsetTop - 150;

        if (window.scrollY >= top) {
            current =
                section.getAttribute("id");
        }

    });


    links.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (!name || !email || !message) {

        alert("Vui lòng nhập đầy đủ thông tin.");

        return;
    }


    alert(
        "Cảm ơn bạn! Tin nhắn đã được ghi nhận."
    );

    contactForm.reset();

});