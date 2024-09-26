import { useState } from "preact/hooks";
import "./Login.less";
import { TextInput } from "./TextInput/TextInput";

export function Login() {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [displayName, setDisplayName] = useState("");
    let [register, setRegister] = useState(false);

    const toggleTheme = () => {
        const currentTheme = localStorage["theme"];
        const newTheme = currentTheme === "light" ? "" : "light";
        localStorage["theme"] = newTheme;
        document.documentElement.classList.toggle('theme-light', newTheme === "light");
    };

    return (
        <div class="Login">
            <span class="logo" onClick={toggleTheme}>🗪</span>
            <TextInput type="email" placeholder="Email (someone@example.com)" value={email} onChange={setEmail} autofocus={true} />
            {register && <input type="text" placeholder="Display Name (Agent Smith)" value={displayName} onChange={e => setDisplayName(e.currentTarget.value)} />}
            <input type="password" placeholder="Password" onChange={e => setPassword(e.currentTarget.value)} />
            <button type="button">{register ? "Register" : "Login"}</button>
            <p>{register ? "Switch back to " : "Have no account yet? Go and "}<a href="" onClick={e => { e.preventDefault(); setRegister(!register); }}>{register ? "Login" : "Register"}</a></p>
        </div>
    );
}