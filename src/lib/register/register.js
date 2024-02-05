import { toast } from "react-toastify";
import { auth } from "../configs/firebase";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";


export const HandleRegister = async (e, person, setIsLoading, router) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        person.email,
        person.password
      );
      if (res) {
        toast.success("Sign up successfull");
        await updateProfile(auth.currentUser, {
          displayName: person.name,
          photoURL: null,
        });
        setIsLoading(false);
        return router("/login");
      }
    } catch (error) {
      setIsLoading(false);
      return toast.error(error.message);
    }
  };