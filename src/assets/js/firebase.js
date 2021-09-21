// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCCtwe3PjtMkftqCgc0GC2k3cbKb9vYdGk",
	appId: "1:451350706276:web:b8dcaa0d46ce2aca058771",
	authDomain: "crepesjs-com.firebaseapp.com",
	databaseURL: "https://crepesjs-com.firebaseio.com",
	measurementId: "G-M0G8VCVKY4",
	messagingSenderId: "451350706276",
	projectId: "crepesjs-com",
	storageBucket: "crepesjs-com.appspot.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const performance = getPerformance(app);
