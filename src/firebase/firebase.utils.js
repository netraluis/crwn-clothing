import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAaf76U43fzaLFjlqn59LnlZ8J06eiBfCw",
    authDomain: "crwn-db-f05ce.firebaseapp.com",
    databaseURL: "https://crwn-db-f05ce.firebaseio.com",
    projectId: "crwn-db-f05ce",
    storageBucket: "crwn-db-f05ce.appspot.com",
    messagingSenderId: "427819194532",
    appId: "1:427819194532:web:0eb4d94f08958576332e31",
    measurementId: "G-MBPMPCZKHT"
  };

  export const createUserProfileDocument = async (userAuth, additionalData)=>{
    if (!userAuth) return; 

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();


    // const collectionRef = firestore.collection('users')
    // const collectionSnapshot = await collectionRef.get()
    // console.log('lo1',{collectionSnapshot})
    // console.log('lo2',collectionSnapshot)

    if (!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message)
        }
    }
    return userRef;

    };

    export const addCollectionAndDocuments = async(collectionKey, objectsToAdd) =>{
        const collectionRef = firestore.collection(collectionKey);

        const batch = firestore.batch();

        objectsToAdd.forEach(obj=>{
            const newDocRef = collectionRef.doc();
            batch.set(newDocRef,obj);
        })

        return await batch.commit()
    }

    export const convertCollectionsSnapshotToMap = (collections) => {
        const transformedCollection = collections.docs.map(doc=>{
            const {title, items} = doc.data();

            return {
                routeName: encodeURI(title.toLowerCase()),
                id: doc.id,
                title,
                items
            }
        })
        // console.log(transformedCollection)
        return transformedCollection.reduce((accumulator, collection)=>{
            accumulator[collection.title.toLowerCase()] = collection;
            return accumulator;
        }, {})
    }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;



  /* 

  GET DATA
  firestore.collection('users').doc('sdfsknmdlkfjvh').collection('item').doc('manaolo')
  firestore.doc('users/sdfsknmdlkfjvh/item/manaolo')
  
  Query Reference QuerySnapshot
  document reference CRUD METHOD documentRef.get() en el docSnapshot propieedad exis si existe 
  lo que devuleve firestore.doc('path') lo usamos como document reference
  Collection reference
   

  documentRef.onSnapshot(sna=>{sna})
  Document snapshot .exist .data()
  */






