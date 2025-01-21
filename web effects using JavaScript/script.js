const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    };
};

const centerElement = document.querySelector('#center');

centerElement.addEventListener(
    "mousemove",
    throttleFunction((dets) => {
        const div = document.createElement("div");
        div.classList.add("imagediv");
        div.style.left = `${dets.clientX}px`;
        div.style.top = `${dets.clientY}px`;

        const img = document.createElement("img");
        img.setAttribute("src", "https://static.vecteezy.com/system/resources/thumbnails/041/166/062/small/ai-generated-hawk-high-quality-image-free-photo.jpg");
        div.appendChild(img);

        document.body.appendChild(div);

        const tl = gsap.timeline();
        tl.to(img, {
            y: "0",
            ease: Power1.easeOut,
            duration: 0.6
        }).to(img, {
            y: "100%",
            ease: Power2.easeOut,
            delay: 0.6
        });

        setTimeout(() => {
            div.remove();
        }, 2000);
    }, 400)
);