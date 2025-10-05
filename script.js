document.addEventListener("keydown",e => {
    if (e.ctrlKey && e.key === "u") {
        alert("🙅‍♂️ ver codigo fuente no permitido");
        e.preventDefault();
    }
})