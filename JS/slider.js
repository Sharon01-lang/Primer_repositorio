(function() {
    const sliders = document.querySelectorAll('.sobreUno_body');
    const buttonNext = document.getElementById("next");
    const buttonBefore = document.getElementById("before");
    let value = 1;  // Inicializamos 'value' con el primer slide.

    // Mostrar el primer slide
    sliders[0].classList.add('sobreUno_body--show');

    buttonNext.addEventListener('click', () => {
        changePosition(1);
    });

    buttonBefore.addEventListener('click', () => {
        changePosition(-1);
    });

    const changePosition = (add) => {
        // Eliminamos la clase 'sobreUno_body--show' del slide actual
        sliders[value - 1].classList.remove('sobreUno_body--show');

        // Actualizamos la posición
        value += add;

        // Si 'value' excede los límites (mayor que el número de sliders o menor que 1), lo ajustamos
        if (value > sliders.length) {
            value = 1;  // Volver al primer slide si se pasa
        } else if (value < 1) {
            value = sliders.length;  // Volver al último slide si se va por debajo de 1
        }

        // Añadimos la clase 'sobreUno_body--show' al nuevo slide
        sliders[value - 1].classList.add('sobreUno_body--show');
    }
})();
