import { render } from 'preact';
import './index.less';
import { Login } from './Login';

let theme = localStorage["theme"];
if (theme) {
    document.documentElement.classList.toggle('theme-light', theme === "light");
}

function App() {
    return <Login />;
}

render(<App />, document.getElementById('app'));
