{
    const domElements = {
        panels: document.querySelectorAll(".panel")
    };

    // domElements.panels.forEach(panel => {
    //     panel.addEventListener("click", (e) => {
    //         panel.classList.toggle("active");
    //     });
    // });

    function active() {
        this.classList.toggle("active");
    }

    function open(e) {
        if (e.propertyName.includes("flex")) {
            this.classList.toggle("open");
        }

    }

    domElements.panels.forEach(panel => {
        panel.addEventListener("click", active);
    });
    domElements.panels.forEach(panel => {
        panel.addEventListener("transitionend", open);
    });
}