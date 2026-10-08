import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Ganti teks di dalam tanda kutip ini nanti dengan konfigurasi dari Firebase Console Bapak
const firebaseConfig = {
  apiKey: "AIzaSyDqwXAn7E87TBr6xym9vKTsxK9itV5gbHg",
  authDomain: "lms-fisika-xi---fluida.firebaseapp.com",
  projectId: "lms-fisika-xi---fluida",
  storageBucket: "lms-fisika-xi---fluida.firebasestorage.app",
  messagingSenderId: "172117950297",
  appId: "1:172117950297:web:9b77b0c2dc8c4bbb7cd648",
  measurementId: "G-9ZPWP82VRF"
};

// Menginisialisasi aplikasi Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);