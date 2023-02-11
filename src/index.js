import { ROUTES } from './routes';

import './components/index';

function render(html) {
    const root = document.querySelector('#root');
    root.innerHTML = html;
}

window.navigate = function (name) {
    const page = ROUTES[name];
    render(page());
};

window.addEventListener('DOMContentLoaded', () => {
    render(ROUTES['/sign-in']());
});
