import firebase from "firebase/app"
import "firebase/auth"

firebase.initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
})

const loginProviders = {
  github: new firebase.auth.GithubAuthProvider(),
  google: new firebase.auth.GoogleAuthProvider(),
}

export { firebase, loginProviders }
