{
    const domElemtnts = {
        panels: document.querySelectorAll(".panel")
    };

    // domElemtnts.panels.forEach(panel => {
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

    domElemtnts.panels.forEach(panel => {
        panel.addEventListener("click", active);
    });
    domElemtnts.panels.forEach(panel => {
        panel.addEventListener("transitionend", open);
    });
}