import {setDarkMode} from "./switchDarkMode";
import {darkMode} from "../layout";

export function toggleDarkMode() {
    const newDarkMode = !darkMode
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
    setDarkMode(newDarkMode);
}