import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "./../firebase.config";
import { toast, Bounce } from "react-toastify";

const UserContext = createContext();
// toastify

// import firebase password auth
const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  // const [loading, setLoading] = useState(false);

  const PASSWORD_Regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;
  const EMAIL_Regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const notify = ()=> toast.success("successfully create the account")
  function notify(type, massage) {
    if (type === "success") toast.success(massage);
    if (type === "error") toast.error(massage);
  }

  // eta email er jonno
  const addUser = (email, password) => {
    if (email === "" && password === "") {
      notify("error", "do not allow empty space");
      return;
    }
    if (EMAIL_Regex.test(email)) {
      if (PASSWORD_Regex.test(password)) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user;
            notify("success", "successfully create the account");
          })
          .catch((error) => {
            const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorMessage);
            notify("error", errorCode);
          });
      } else {
        notify(
          "error",
          "At least 6 chars incl. uppercase, lowercase, number and special.",
        );
      }
    } else {
      notify("error", "Email dont match");
    }
  };

  // eta login er jonno
  const logIn = async (email, password) => {
   await signInWithEmailAndPassword(auth, email, password);
   try {
     notify("success", "login successfully");
   }
   catch(error) {
    notify("error", error)
   };
  };

  useEffect(() => {
    console.log("current user", currentUser);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    });
    return () => unsubscribe();
  }, [currentUser]);

  async function logout() {
  await signOut(auth)
    try{
      notify("success", "successfully logout")
    }
    catch(err) {
     console.log(err)
    }
  }

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, addUser, logIn, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
export const useUser = () => useContext(UserContext);
