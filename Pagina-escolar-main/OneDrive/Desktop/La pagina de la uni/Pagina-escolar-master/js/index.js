// INICIO DE SESIÓN DE DIRECTOR
document.getElementById('btnDirectorLogin').addEventListener('click', async () => {
  const numEmpleado = document.getElementById('inputNumEmpleadoDirector').value;
  const password = document.getElementById('inputPassDirector').value;

  if (!numEmpleado || !password) {
    mostrarNotificacion("Número de empleado y contraseña son requeridos.");
    return;
  }

  try {
    // Buscar director por número de empleado en la colección "Directores"
    const q = query(collection(db, "Directores"), where("Num_Empleado", "==", numEmpleado));
    const querySnapshot = await getDocs(q);
    let directorData = null;
    if (!querySnapshot.empty) {
      directorData = querySnapshot.docs[0].data();
    }
    if (!directorData) {
      mostrarNotificacion("Número de empleado no encontrado.");
      document.getElementById('inputNumEmpleadoDirector').value = '';
      document.getElementById('inputPassDirector').value = '';
      return;
    }
    // Validar contraseña
    if (directorData.contraseña === password) {
      mostrarNotificacion(`Bienvenido, ${directorData.nombre}`);
      document.getElementById('director-login-section').style.display = 'none';
      btnLogOut.style.display = 'block';
      document.getElementById('inputNumEmpleadoDirector').value = '';
      document.getElementById('inputPassDirector').value = '';
    } else {
      mostrarNotificacion("Contraseña incorrecta.");
      document.getElementById('inputPassDirector').value = '';
    }
  } catch (error) {
    mostrarNotificacion("Error al iniciar sesión: " + error.message);
  }
});
// Mostrar menú Director (solo login)
document.getElementById('accederDirector').addEventListener('click', (e) => {
  e.preventDefault();
  // Ocultar todos los frames de login antes de mostrar el de director
  document.getElementById('docente-login-section').style.display = 'none';
  document.getElementById('superusuario-login-section').style.display = 'none';
  document.getElementById('director-login-section').style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  docenteSection.style.display = 'none';
  document.getElementById('docente-main-menu').style.display = 'none';
  recuperarSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  document.getElementById('loginFrame').style.display = 'block';
  mainButtons.style.display = 'none';
  document.getElementById('director-login-section').style.display = 'block';
  document.getElementById('back-arrow').style.display = 'block';
  // Ocultar superlinks
  document.getElementById('superlinks').style.display = 'none';
});

// Botón regresar en login de Director
document.getElementById('btnBackDirectorLogin').addEventListener('click', () => {
  document.getElementById('director-login-section').style.display = 'none';
  document.getElementById('loginFrame').style.display = 'none';
  document.getElementById('inputNumEmpleadoDirector').value = '';
  document.getElementById('inputPassDirector').value = '';
  document.getElementById('back-arrow').style.display = 'none';
});
// INICIO DE SESIÓN DE SUPERUSUARIO
document.getElementById('btnSuperUsuarioLogin').addEventListener('click', () => {
  const clave = document.getElementById('inputClaveSuperUsuario').value;
  const password = document.getElementById('inputPassSuperUsuario').value;

  if (!clave || !password) {
    mostrarNotificacion("Clave y contraseña son requeridas.");
    return;
  }
  if (clave === '9510' && password === '10101') {
    mostrarNotificacion("Bienvenido, SuperUsuario");
    document.getElementById('loginFrame').style.display = 'none';
    btnLogOut.style.display = 'block';
    document.getElementById('frameSuperUsuario').style.display = 'block';
    document.getElementById('inputClaveSuperUsuario').value = '';
    document.getElementById('inputPassSuperUsuario').value = '';
  } else {
    mostrarNotificacion("Clave o contraseña incorrecta.");
    document.getElementById('inputClaveSuperUsuario').value = '';
    document.getElementById('inputPassSuperUsuario').value = '';
  }
});
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, doc, setDoc,query, where } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import { datos } from "./datos.js"; 

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBD_gTYWxZX5g_Dftn_HWgyPQDw3FVScQk",
  authDomain: "b-tiid---idia.firebaseapp.com",
  projectId: "b-tiid---idia",
  storageBucket: "b-tiid---idia.appspot.com",
  messagingSenderId: "726121139996",
  appId: "1:726121139996:web:8f6d99f7286c17e581f4d9",
  measurementId: "G-W3QN1MSPLC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);



// Mostrar menú SuperUsuario (solo login)
document.getElementById('accederSuperUsuario').addEventListener('click', (e) => {
  e.preventDefault();
  // Ocultar todos los frames de login antes de mostrar el de superusuario
  document.getElementById('docente-login-section').style.display = 'none';
  document.getElementById('superusuario-login-section').style.display = 'none';
  document.getElementById('director-login-section').style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  docenteSection.style.display = 'none';
  document.getElementById('docente-main-menu').style.display = 'none';
  recuperarSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  document.getElementById('loginFrame').style.display = 'block';
  mainButtons.style.display = 'none';
  document.getElementById('superusuario-login-section').style.display = 'block';
  document.getElementById('back-arrow').style.display = 'block';
  // Ocultar superlinks
  document.getElementById('superlinks').style.display = 'none';
});

// Botón regresar en login de SuperUsuario
document.getElementById('btnBackSuperUsuarioLogin').addEventListener('click', () => {
  document.getElementById('superusuario-login-section').style.display = 'none';
  document.getElementById('loginFrame').style.display = 'none';
  document.getElementById('inputClaveSuperUsuario').value = '';
  document.getElementById('inputPassSuperUsuario').value = '';
  document.getElementById('back-arrow').style.display = 'none';
});
//boton para regresar al login desde el frame de SuperUsuario
function regresarAlLogin() {
  document.getElementById('frameSuperUsuario').style.display = 'none';
  document.getElementById('loginFrame').style.display = 'block';
}

// INICIO DE SESIÓN DE DOCENTE
document.getElementById('btnDocenteLoginIniciar').addEventListener('click', async () => {
  const numEmpleado = document.getElementById('inputNumEmpleadoLogin').value;
  const password = document.getElementById('inputPassDocenteLogin').value;

  if (!numEmpleado || !password) {
    mostrarNotificacion("Número de empleado y contraseña son requeridos.");
    return;
  }
  

  try {
    // Buscar email por número de empleado en la colección "profesores"
    const q = query(collection(db, "profesores"), where("numEmpleado", "==", numEmpleado));
    const querySnapshot = await getDocs(q);
    let docenteData = null;
    if (!querySnapshot.empty) {
      docenteData = querySnapshot.docs[0].data();
    }
    if (!docenteData) {
      mostrarNotificacion("Número de empleado no encontrado.");
      document.getElementById('inputNumEmpleadoLogin').value = '';
      document.getElementById('inputPassDocenteLogin').value = '';
      return;
    }
    const email = docenteData.email;
    // Iniciar sesión con email y contraseña
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    mostrarNotificacion(`Bienvenido, ${docenteData.nombre}`);
    // Mostrar botón de cerrar sesión y ocultar login docente
    document.getElementById('docente-login-section').style.display = 'none';
    btnLogOut.style.display = 'block';
    document.getElementById('inputNumEmpleadoLogin').value = '';
    document.getElementById('inputPassDocenteLogin').value = '';
  } catch (error) {
    mostrarNotificacion("Error al iniciar sesión: " + error.message);
  }
});

// Elementos del DOM
const mainButtons = document.getElementById('main-buttons');
const registroSection = document.getElementById('registro-section');
const loginSection = document.getElementById('login-section');
const btnLogOut = document.getElementById('btnLogOut');
const recuperarSection = document.getElementById('recuperar-section');
const linkRecuperar = document.getElementById('linkRecuperar');
const btnRecuperar = document.getElementById('btnRecuperar');
const btnBackRecuperar = document.getElementById('btnBackRecuperar');
const docenteSection = document.getElementById('docente-section');
const btnBackDocente = document.getElementById('btnBackDocente');

// Al cargar la página, ocultar todos los frames excepto los superlinks
window.addEventListener('DOMContentLoaded', () => {
  mainButtons.style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  docenteSection.style.display = 'none';
  recuperarSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  document.getElementById('loginFrame').style.display = 'none';
  document.getElementById('back-arrow').style.display = 'none';
  document.getElementById('modalContacto').style.display = 'none';
});

// NUEVA FUNCIONALIDAD: Acceder como Alumno
document.getElementById('accederAlumno').addEventListener('click', (e) => {
  e.preventDefault();
  // Ocultar todos los frames de login antes de mostrar el de alumno
  document.getElementById('docente-login-section').style.display = 'none';
  document.getElementById('superusuario-login-section').style.display = 'none';
  document.getElementById('director-login-section').style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  docenteSection.style.display = 'none';
  document.getElementById('docente-main-menu').style.display = 'none';
  recuperarSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  document.getElementById('loginFrame').style.display = 'block';
  mainButtons.style.display = 'flex';
  document.getElementById('back-arrow').style.display = 'block';
  // Ocultar superlinks
  document.getElementById('superlinks').style.display = 'none';
});

// Mostrar menú Docente
document.getElementById('accederDocente').addEventListener('click', (e) => {
  e.preventDefault();
  // Ocultar todos los frames de login antes de mostrar el de docente
  document.getElementById('docente-login-section').style.display = 'none';
  document.getElementById('superusuario-login-section').style.display = 'none';
  document.getElementById('director-login-section').style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  docenteSection.style.display = 'none';
  recuperarSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  document.getElementById('loginFrame').style.display = 'block';
  mainButtons.style.display = 'none';
  document.getElementById('docente-main-menu').style.display = 'block';
  document.getElementById('back-arrow').style.display = 'block';
  // Ocultar superlinks
  document.getElementById('superlinks').style.display = 'none';
});

// Botones del menú principal docente
document.getElementById('docenteShowReg').addEventListener('click', () => {
  document.getElementById('docente-main-menu').style.display = 'none';
  docenteSection.style.display = 'block';
  document.getElementById('docente-login-section').style.display = 'none';
});
document.getElementById('docenteShowLogin').addEventListener('click', () => {
  document.getElementById('docente-main-menu').style.display = 'none';
  docenteSection.style.display = 'none';
  document.getElementById('docente-login-section').style.display = 'block';
});

// Botón regresar en login de docente
document.getElementById('btnBackDocenteLogin').addEventListener('click', () => {
  document.getElementById('docente-login-section').style.display = 'none';
  document.getElementById('docente-main-menu').style.display = 'block';
  document.getElementById('inputNumEmpleadoLogin').value = '';
  document.getElementById('inputPassDocenteLogin').value = '';
  document.getElementById('back-arrow').style.display = 'block';
});

// Botón "Registrarse" - mantiene la funcionalidad existente para alumnos
document.getElementById('showReg').addEventListener('click', () => {
  mainButtons.style.display = 'none';
  registroSection.style.display = 'block';
  loginSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  document.getElementById('back-arrow').style.display = 'block';
});

// Botón "Iniciar sesión" - mantiene la funcionalidad existente para alumnos
document.getElementById('showLogin').addEventListener('click', () => {
  mainButtons.style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'block';
  btnLogOut.style.display = 'none';
  document.getElementById('back-arrow').style.display = 'block';
});

// Enlace "¿Perdiste tu contraseña?"
linkRecuperar.addEventListener('click', (e) => {
  e.preventDefault();
  mainButtons.style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  recuperarSection.style.display = 'block';
  btnLogOut.style.display = 'none';
  document.getElementById('back-arrow').style.display = 'block';
});

// Botones de regresar
btnBackDocente.addEventListener('click', () => {
  docenteSection.style.display = 'none';
  document.getElementById('docente-main-menu').style.display = 'block';
  // Limpiar campos del docente
  document.getElementById('inputNombreDocente').value = '';
  document.getElementById('inputNumEmpleado').value = '';
  document.getElementById('inputEmailDocente').value = '';
  document.getElementById('inputPassDocente').value = '';
  document.getElementById('back-arrow').style.display = 'block';
});

btnBackRecuperar.addEventListener('click', () => {
  recuperarSection.style.display = 'none';
  mainButtons.style.display = 'flex';
  document.getElementById('inputRecuperarEmail').value = '';
  document.getElementById('back-arrow').style.display = 'block';
});
// Flecha para regresar a la selección de superlinks
document.getElementById('btnBackSuperlink').addEventListener('click', () => {
  document.getElementById('loginFrame').style.display = 'none';
  document.getElementById('back-arrow').style.display = 'none';
  mainButtons.style.display = 'none';
  registroSection.style.display = 'none';
  loginSection.style.display = 'none';
  docenteSection.style.display = 'none';
  recuperarSection.style.display = 'none';
  btnLogOut.style.display = 'none';
  // Mostrar superlinks
  document.getElementById('superlinks').style.display = 'block';
});

// Funciones para limpiar campos
function limpiarRegistro() {
  document.getElementById('inputNombre').value = '';
  document.getElementById('inputEmail').value = '';
  document.getElementById('inputPass').value = '';
  document.getElementById('inputMatriculaReg').value = '';
  document.getElementById('inputCarrera').value = '';
}

function limpiarLogin() {
  document.getElementById('inputMatriculaLogin').value = '';
  document.getElementById('inputPassLogin').value = '';
}

document.getElementById('btnBackReg').addEventListener('click', () => {
  registroSection.style.display = 'none';
  mainButtons.style.display = 'flex';
  limpiarRegistro();
});

document.getElementById('btnBackLogin').addEventListener('click', () => {
  loginSection.style.display = 'none';
  mainButtons.style.display = 'flex';
  limpiarLogin();
});

// Función para mostrar notificaciones
function mostrarNotificacion(mensaje, tiempo = 2500) {
  const noti = document.getElementById('notificacion');
  noti.textContent = mensaje;
  noti.classList.add('mostrar');
  noti.style.display = 'block';
  setTimeout(() => {
    noti.classList.remove('mostrar');
    noti.style.display = 'none';
    noti.textContent = '';
  }, tiempo);
}

// REGISTRO DE DOCENTE (funcionalidad existente)
document.getElementById('btnDocenteLogin').addEventListener('click', async () => {
  const nombre = document.getElementById('inputNombreDocente').value;
  const numEmpleado = document.getElementById('inputNumEmpleado').value;
  const email = document.getElementById('inputEmailDocente').value;
  const password = document.getElementById('inputPassDocente').value;

  // Validaciones básicas
  if (!nombre || !numEmpleado || !email || !password) {
    mostrarNotificacion("Todos los campos son requeridos.");
    return;
  }
  
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    mostrarNotificacion("El correo no es válido.");
    return;
  }
  
  if (password.length < 6) {
    mostrarNotificacion("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Validar número de empleado único
  const q = query(collection(db, "profesores"), where("numEmpleado", "==", numEmpleado));
  const snap = await getDocs(q);
  if (!snap.empty) {
    mostrarNotificacion("El número de empleado ya está registrado. Usa otro.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, "profesores", user.uid), {
      nombre,
      numEmpleado,
      email,
      uid: user.uid
    });
    mostrarNotificacion(`¡Docente registrado! Número de empleado: ${numEmpleado}`);
    docenteSection.style.display = 'none';
    mainButtons.style.display = 'block';
    // Limpiar campos
    document.getElementById('inputNombreDocente').value = '';
    document.getElementById('inputNumEmpleado').value = '';
    document.getElementById('inputEmailDocente').value = '';
    document.getElementById('inputPassDocente').value = '';
  } catch (error) {
    mostrarNotificacion(`Error en el registro: ${error.code} - ${error.message}`);
  }
});

// REGISTRO DE ALUMNO (funcionalidad existente - usa colección "users")
document.getElementById('btnReg').addEventListener('click', async () => {
  const nombre = document.getElementById('inputNombre').value;
  const email = document.getElementById('inputEmail').value;
  const password = document.getElementById('inputPass').value;
  const matricula = document.getElementById('inputMatriculaReg').value;
  const carrera = document.getElementById('inputCarrera').value;

  // Validaciones básicas
  if (!email || !password || !matricula) {
    mostrarNotificacion("Correo, contraseña y matrícula son requeridos.");
    return;
  }
  
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    mostrarNotificacion("El correo no es válido.");
    return;
  }
  
  if (password.length < 6) {
    mostrarNotificacion("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  // Validar matrícula única en la colección "users" (alumnos)
  const q = query(collection(db, "users"), where("matricula", "==", matricula));
  const snap = await getDocs(q);
  if (!snap.empty) {
    mostrarNotificacion("La matrícula ya está registrada. Usa otra.");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await setDoc(doc(db, "users", user.uid), {
      nombre,
      email,
      matricula,
      carrera,
      uid: user.uid
    });
    mostrarNotificacion(`¡Alumno registrado! Tu matrícula es: ${matricula}`);
    // Regresar a pantalla principal y limpiar campos
    registroSection.style.display = 'none';
    mainButtons.style.display = 'block';
    document.getElementById('showReg').style.display = 'none';
    limpiarRegistro();
  } catch (error) {
    console.error("Error Firebase:", error);
    mostrarNotificacion(`Error en el registro: ${error.code} - ${error.message}`);
  }
});

// INICIO DE SESIÓN DE ALUMNO (funcionalidad existente - usa colección "users")
document.getElementById('btnLogin').addEventListener('click', async () => {
  const matricula = document.getElementById('inputMatriculaLogin').value;
  const password = document.getElementById('inputPassLogin').value;

  if (!matricula || !password) {
    mostrarNotificacion("Matrícula y contraseña son requeridos.");
    return;
  }

  try {
    // Buscar email por matrícula en la colección "users" (alumnos)
    const q = query(collection(db, "users"), where("matricula", "==", matricula));
    const querySnapshot = await getDocs(q);
    let userData = null;
    if (!querySnapshot.empty) {
      userData = querySnapshot.docs[0].data();
    }
    if (!userData) {
      mostrarNotificacion("Matrícula no encontrada.");
      limpiarLogin();
      return;
    }
    const email = userData.email;
    // Iniciar sesión con email y contraseña
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    mostrarNotificacion(`Bienvenido, ${userData.nombre}`);
    // Mostrar botón de cerrar sesión y ocultar login
    loginSection.style.display = 'none';
    btnLogOut.style.display = 'block';
    limpiarLogin();
  } catch (error) {
    mostrarNotificacion("Error al iniciar sesión: " + error.message);
  }
});

// CERRAR SESIÓN
document.getElementById('btnLogOut').addEventListener('click', () => {
  signOut(auth)
    .then(() => {
      mostrarNotificacion("Sesión cerrada correctamente.");
      btnLogOut.style.display = 'none';
      mainButtons.style.display = 'block';
    })
    .catch((error) => {
      mostrarNotificacion("Error al cerrar sesión: " + error.message);
    });
});

// RECUPERAR CONTRASEÑA
btnRecuperar.addEventListener('click', async () => {
  const email = document.getElementById('inputRecuperarEmail').value;
  if (!email) {
    mostrarNotificacion('Ingresa tu correo registrado.');
    return;
  }
  try {
    await sendPasswordResetEmail(auth, email);
    mostrarNotificacion('Correo de recuperación enviado. Revisa tu bandeja de entrada.');
    document.getElementById('inputRecuperarEmail').value = '';
    recuperarSection.style.display = 'none';
    mainButtons.style.display = 'flex';
  } catch (error) {
    mostrarNotificacion('Error: ' + error.message);
  }
  
});

// CAMBIO PAGINA PRINCIPAL index.js 
//FUNCIONALIDAD MODAL TÉRMINOS Y CONDICIONES

// Referencias a elementos
const btnTerminos = document.querySelector(".botonterminosycondiciones");
const modalTerminos = document.getElementById("modalTerminos");
const modalDetalles1 = document.getElementById("modalDetalles1");
const modalDetalles2 = document.getElementById("modalDetalles2");

const btnAceptarTerminos = document.getElementById("btnAceptarTerminos");
const btnRechazarTerminos = document.getElementById("btnRechazarTerminos");
const modalVerDetalles = document.getElementById("modalVerDetalles");

const btnCerrarDetalles1 = document.getElementById("btnCerrarDetalles1");
const btnCerrarDetalles2 = document.getElementById("btnCerrarDetalles2");
const btnVerMas = document.getElementById("btnVerMas");
const btnVerMenos = document.getElementById("btnVerMenos");


// Cambiar todas las referencias de classList a style.display
modalTerminos.style.display = 'flex'; // en lugar de classList.add('mostrar')
modalTerminos.style.display = 'none'; // en lugar de classList.remove('mostrar')

// Función para cerrar todos los modales
function cerrarTodosModales() {
  modalTerminos.style.display = "none";
  modalDetalles1.style.display = "none";
  modalDetalles2.style.display = "none";
}

// Mostrar modal original al hacer clic en botón Términos y Condiciones
btnTerminos.addEventListener("click", () => {
  modalTerminos.style.display = "flex";
});

// Ver detalles - abrir primera página de detalles
modalVerDetalles.addEventListener("click", (e) => {
  e.preventDefault();
  modalTerminos.style.display = "none";
  modalDetalles1.style.display = "flex";
});

// Cerrar primera página de detalles con X
btnCerrarDetalles1.addEventListener("click", () => {
  cerrarTodosModales();
});

// Ver más - ir a segunda página de detalles
btnVerMas.addEventListener("click", () => {
  modalDetalles1.style.display = "none";
  modalDetalles2.style.display = "flex";
});

// Cerrar segunda página de detalles con X
btnCerrarDetalles2.addEventListener("click", () => {
  cerrarTodosModales();
});

// Ver menos - regresar a primera página de detalles
btnVerMenos.addEventListener("click", () => {
  modalDetalles2.style.display = "none";
  modalDetalles1.style.display = "flex";
});

// Cerrar modal al presionar Aceptar
btnAceptarTerminos.addEventListener("click", () => {
  cerrarTodosModales();
  alert("Gracias por aceptar los términos.");
});

// Cerrar modal al presionar Rechazar
btnRechazarTerminos.addEventListener("click", () => {
  cerrarTodosModales();
  alert("Has rechazado los términos. Algunas funcionalidades pueden estar limitadas.");
});

// Cerrar modal al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
  if (e.target === modalTerminos) {
    modalTerminos.style.display = "none";
  }
  if (e.target === modalDetalles1) {
    modalDetalles1.style.display = "none";
  }
  if (e.target === modalDetalles2) {
    modalDetalles2.style.display = "none";
 
 
 
  }
});


// FUNCIONES PARA MODAL DE CONTACTO - VERSIÓN CORREGIDA:
