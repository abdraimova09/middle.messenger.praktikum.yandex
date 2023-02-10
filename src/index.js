import signIn from './pages/sign-in/sign-in.hbs';
import signUp from './pages/sign-up/sign-up.hbs';
import chat from './pages/chat/chat.hbs';

import './components/index';

function render(html) {
    const root = document.querySelector('#root');
    root.innerHTML = html;
}

const ROUTES = {
    signIn: signIn,
    signUp: signUp,
    chat: chat,
};

window.goToPage = function (name) {
    const page = ROUTES[name];
    render(page());
};

window.addEventListener('DOMContentLoaded', () => {
    render(ROUTES.signIn());
});
