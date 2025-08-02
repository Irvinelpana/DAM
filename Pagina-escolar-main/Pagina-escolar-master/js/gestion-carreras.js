import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";

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

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Referencias
const btnAgregar = document.getElementById('btnAgregarCarrera');
const btnCerrar = document.getElementById('btnCerrarModalCarrera');
const btnGuardar = document.getElementById('btnGuardarCarrera');
const modalCarrera = document.getElementById('modalAgregarCarrera');
const contenedorCarreras = document.querySelector('.career-list');

// Abrir y cerrar modal
btnAgregar.addEventListener('click', () => modalCarrera.style.display = 'flex');
btnCerrar.addEventListener('click', () => {
  modalCarrera.style.display = 'none';
  limpiarCampos();
});

// Limpiar inputs
function limpiarCampos() {
  document.getElementById('inputNombreCarrera').value = '';
  document.getElementById('inputJefeCarrera').value = '';
  document.getElementById('inputUbicacionCarrera').value = '';
  document.getElementById('inputDescripcionCarrera').value = '';
}

// Guardar en Firebase
btnGuardar.addEventListener('click', async () => {
  const nombre = document.getElementById('inputNombreCarrera').value.trim();
  const jefe = document.getElementById('inputJefeCarrera').value.trim();
  const ubicacion = document.getElementById('inputUbicacionCarrera').value.trim();
  const descripcion = document.getElementById('inputDescripcionCarrera').value.trim();

  if (nombre === '') {
    alert("Debes ingresar el nombre de la carrera.");
    return;
  }

  const carreraObj = { nombre, jefe, ubicacion, descripcion };

  try {
    await addDoc(collection(db, "CARRERAS - Super Usuario"), carreraObj);
    alert("¡Carrera guardada!");
    agregarCarreraVisual(carreraObj);
    modalCarrera.style.display = 'none';
    limpiarCampos();
  } catch (error) {
    alert("Error al guardar en Firebase: " + error.message);
  }
});

// Mostrar visualmente la carrera
function agregarCarreraVisual(carrera) {
  const div = document.createElement('div');
  div.className = 'career-item';
  div.textContent = carrera.nombre;
  div.addEventListener('click', () => mostrarDatosCarrera(carrera));
  contenedorCarreras.appendChild(div);
}

// Mostrar en modal
function mostrarDatosCarrera(carrera) {
  document.getElementById('verNombreCarrera').textContent = carrera.nombre;
  document.getElementById('verJefeCarrera').textContent = carrera.jefe;
  document.getElementById('verUbicacionCarrera').textContent = carrera.ubicacion;
  document.getElementById('verDescripcionCarrera').textContent = carrera.descripcion;
  document.getElementById('modalVerCarrera').style.display = 'flex';
}

// Cerrar modal visual
document.getElementById('btnCerrarModalVerCarrera').addEventListener('click', () => {
  document.getElementById('modalVerCarrera').style.display = 'none';
});

// Cargar carreras al iniciar
async function cargarCarrerasFirebase() {
  const querySnapshot = await getDocs(collection(db, "CARRERAS - Super Usuario"));
  querySnapshot.forEach(doc => {
    const datos = doc.data();
    agregarCarreraVisual(datos);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  cargarCarrerasFirebase();
});
