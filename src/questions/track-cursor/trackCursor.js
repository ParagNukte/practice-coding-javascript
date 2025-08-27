const coords = document.querySelector(".coords");

function handleMouseMove(e) {
    coords.innerHTML = `${e.clientX} --- ${e.clientY}`;
}

window.addEventListener("mousemove", handleMouseMove);

//track the cursor coordinates. create a html page and add a element with class name coords. rest the script will take care /