# Resume Website with Comments
Built on React.js, react-bootstrap and firebase

Deployed website: https://hongchew-kaliber-labs.firebaseapp.com/

## Addtional Instructions to Run
Create ```base.js``` in the ```/client/src``` folder

Add the following code to ```base.js```: 
```
import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: ""
});

const db = firebase.database(firebaseApp);
const base = Rebase.createClass(db);

export const providers = {
  google: new firebase.auth.GoogleAuthProvider()
};

export const auth = firebaseApp.auth();
export default base;
```

Add in your own firebase configuration information in ```const firebaseApp```
