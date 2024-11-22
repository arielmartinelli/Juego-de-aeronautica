// Función para redirigir
function goToPage(page) {
    window.location.href = page;
}

// Función para opción incorrecta
function wrongChoice() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Intenta otra vez',
        confirmButtonText: 'OK',
    });
}

function wrongChoiceMal() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'tas loca, como vas a elegir mal',
        confirmButtonText: 'Intentar de nuevo',
    });
}


function wrongChoice1() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'No me gusta esta respuesta, intenta otra vez',
        confirmButtonText: 'OK',
    });
}

function wrongChoice2() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta tampoco me gusta',
        confirmButtonText: 'OK',
    });
}

function wrongChoice3() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta tampoco me gusta',
        confirmButtonText: 'OK',
    });
}

function wrongChoice4() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta tampoco me gusta',
        confirmButtonText: 'OK',
    });
}

function wrongChoice5() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta tampoco me gusta',
        confirmButtonText: 'OK',
    });
}

function wrongChoice6() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta tampoco me gusta',
        confirmButtonText: 'OK',
    });
}

function wrongChoice7() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Ya nos vamos acercando pero no es la mejor',
        confirmButtonText: 'OK',
    });
}

function wrongChoice8() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Un poco mejor, pero puede ser mejor',
        confirmButtonText: 'OK',
    });
}

function wrongChoice9() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Esta respuesta me gusta un poco mas, pero no es la mejor',
        confirmButtonText: 'OK',
    });
}

function wrongChoice10() {
    Swal.fire({
        icon: 'error',
        title: '¡Ups!',
        text: 'Casi le pegas, proba una vez más',
        confirmButtonText: 'OK',
    });
}

// Redirigir a la página externa
function goToExternal(page) {
    window.open('https://qlokura.tv/evento/18aniversario_EstadioKempes/8180', '_blank');
    window.location.href = page;
}

// Enviar mensaje por WhatsApp
function sendWhatsApp() {
    const input = document.getElementById("customMessage").value.trim(); // Obtiene el mensaje del campo de texto
    if (input === "") {
        // SweetAlert para avisar que el mensaje está vacío
        Swal.fire({
            title: 'Error',
            text: 'Por favor, escribe un mensaje antes de enviarlo.',
            icon: 'error',
            confirmButtonText: 'OK'
        });
        return;
    }
    const message = encodeURIComponent(input); // Codifica el mensaje para URL
    const phoneNumber = "3516121498";
    
    // Abre el enlace de WhatsApp en una nueva pestaña
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank'); 
    
    // Redirige a otra página dentro del mismo sitio
    window.location.href = 'pagina9.html'; // Cambia 'otra-pagina.html' por el nombre de la página a la que deseas redirigir
}

function checkAnswers() {
    // Obtiene las respuestas seleccionadas
    const q1 = document.getElementById("q1").value;
    const q2 = document.getElementById("q2").value;
    const q3 = document.getElementById("q3").value;

    // Respuestas correctas: 
    const correctAnswers = {
        q1: "2", // Asegurar la seguridad de los pasajeros
        q2: "2", // International Air Transport Association
        q3: "3"  // 35,000 pies
    };

    let correctCount = 0;

    // Validar las respuestas
    if (q1 === correctAnswers.q1) correctCount++;
    if (q2 === correctAnswers.q2) correctCount++;
    if (q3 === correctAnswers.q3) correctCount++;

    // Mostrar resultado
    if (correctCount === 3) {
        Swal.fire({
            title: '¡Perfecto!',
            text: '¡Respondiste todo correctamente! Serás redirigido en breve.',
            icon: 'success',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 4000 // Duración del SweetAlert en milisegundos (3 segundos)
        }).then(() => {
            window.location.href = "juego.html"; // Redirige a juego.html después de 3 segundos
        });
    } else {
        Swal.fire({
            title: '¡Inténtalo de nuevo!',
            text: `Acertaste ${correctCount} de 3 preguntas.`,
            icon: 'error',
            confirmButtonText: 'Intentar de nuevo'
        });
    }
}

function wrongChoice(option) {
    Swal.fire({
        title: 'Incorrecto',
        text: `Elegiste ${option}. Inténtalo de nuevo.`,
        icon: 'error',
        confirmButtonText: 'OK'
    });
}

function correctChoice() {
    Swal.fire({
        title: '¡Correcto!',
        text: 'Has elegido la opción correcta.',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
    }).then(() => {
        window.location.href = "pagina8.html"; // Redirige a la página correcta
    });
}


