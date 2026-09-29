/* =========================
   SCROLL ANIMATION
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const observer =
    new IntersectionObserver(
        function(entries) {

            entries.forEach(function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(function(element) {

    observer.observe(element);

});


/* =========================
   3D FOTO
========================= */

const cards =
    document.querySelectorAll(".tilt");


cards.forEach(function(card) {

    card.addEventListener("mousemove", function(e) {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.02)`;

    });


    card.addEventListener("mouseleave", function() {

        card.style.transform = "";

    });

});


/* =========================
   BACKGROUND MENGIKUTI MOUSE
========================= */

document.addEventListener("mousemove", function(e) {

    const x =
        e.clientX / window.innerWidth - 0.5;

    const y =
        e.clientY / window.innerHeight - 0.5;


    const glow1 =
        document.querySelector(".glow1");

    const glow2 =
        document.querySelector(".glow2");


    glow1.style.marginLeft =
        `${x * 30}px`;

    glow1.style.marginTop =
        `${y * 30}px`;


    glow2.style.marginLeft =
        `${x * -30}px`;

    glow2.style.marginTop =
        `${y * -30}px`;

});


/* =========================
   MENU AKTIF
========================= */

const sections =
    document.querySelectorAll("section[id]");

const links =
    document.querySelectorAll(".navbar nav a");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 200;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    links.forEach(function(link) {

        link.style.color = "#888";

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.style.color =
                "#ff6a00";

        }

    });

});