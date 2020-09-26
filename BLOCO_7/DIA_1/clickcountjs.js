const paragraph = document.getElementById('valueParagraph');
let contador = 0;

// 1º jeito
/* clickButton.addEventListener('click', () =>{
    contador += 1;
    paragraph.innerHTML = contador;;
}) */

//2º jeito
document.getElementById("buttonClick")
.addEventListener("click", () => paragraph.innerHTML = contador += 1)
