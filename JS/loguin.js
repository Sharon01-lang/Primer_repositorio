document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const user = document.getElementById('usuario').value.trim();
        const password = document.getElementById('password').value.trim();

        // Obtener usuarios del localStorage
        const usuarios = JSON.parse(localStorage.getItem('USUARIOS')) || [];

        // Buscar el usuario por nombre y password
        const currentUser = usuarios.find((u) => u.user === user && u.password === password);

        if (currentUser) {
            // Guardar el usuario en localStorage como el usuario actual
            localStorage.setItem('CURRENT_USUARIO', JSON.stringify(currentUser));

            window.location.href = 'proyecto.html'; 
        } else {
            alert("Usuario o contraseña incorrectos.");
        }
    });
});
