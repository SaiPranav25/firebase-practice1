import { auth, googleProvider } from "../config/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword , signInWithPopup, signOut} from "firebase/auth";

export const Auth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            
        } catch (error) {
            console.error(error);
        }
    };
    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error(error);
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
            <button onClick={signIn}>Sign In</button><br />
            <button onClick={signInWithGoogle}>Google Sign In</button><br />
            <button onClick={logout}>Logout</button><br />
        </div>
    )
}