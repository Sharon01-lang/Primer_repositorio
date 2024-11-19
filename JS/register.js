document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('register-form');

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();  // Evita que el formulario se envíe de la manera tradicional
        
        // Obtener los valores de los campos del formulario
        const user = document.getElementById('usuario').value.trim();
        const genero = document.getElementById('genero').value.trim();
        const email = document.getElementById('correo').value.trim();
        const password = document.getElementById('password').value.trim();

        // Validación de los campos
        if (!user || !genero || !email || !password) {
            alert("Por favor, complete todos los campos.");
            return;  // Si algún campo está vacío, no guarda los datos
        }

        // Crear el objeto de usuario
        const users = {
            user,
            genero,
            email,
            password
        };

        console.log(users);  // Para verificar los datos antes de guardarlos

        // Obtener los usuarios guardados en el localStorage (si existen)
        const usuarios = JSON.parse(localStorage.getItem('USUARIOS')) || [];

        // Verificar si el usuario ya existe
        if (usuarios.some(u => u.email === email)) {
            alert("Este correo electrónico ya está registrado.");
            return;  // Si el email ya existe, no guarda el nuevo usuario
        }

        // Agregar el nuevo usuario al array
        usuarios.push(users);

        // Guardar el array actualizado en el localStorage
        localStorage.setItem('USUARIOS', JSON.stringify(usuarios));


        //  redirigir al usuario a pag de inicio
        window.location.href = "iniciarsesion.html";
    });
});
