import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDLFHsnGAJkdDyCWCAQmgpQer3WbuREj-o",
    authDomain: "spacex-pwa-1398e.firebaseapp.com",
    projectId: "spacex-pwa-1398e",
    storageBucket: "spacex-pwa-1398e.appspot.com",
    messagingSenderId: "208399948410",
    appId: "1:208399948410:web:6a1e675ccdc01266d5f9c3",
    measurementId: "G-ZM5QG0B9H0"
  };

firebase.initializeApp(config);
const messaging = firebase.messaging();

export function configNotification() {
    
  Notification.requestPermission().then((permission) => {
      messaging.getToken().then((currentToken) => {
        alert(currentToken);
        prompt('token', currentToken);
        console.log(currentToken)
        
        if (currentToken) {
        } else {
          // Show permission request.
          console.log('No registration token available. Request permission to generate one.');

        }
      }).catch((err) => {
        console.log('An error occurred while retrieving token. ', err);

      });
  
  
  })

}