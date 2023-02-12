import signIn from './pages/sign-in-page';
import signUp from './pages/sign-up-page';
import chat from './pages/chat-page';
import profile from './pages/profile-page';
import changeProfile from './pages/change-profile-page';
import changePassword from './pages/change-password-page';
import error404 from './pages/error-404-page';
import error500 from './pages/error-500-page';

export const ROUTES = {
    '/sign-in': signIn,
    '/sign-up': signUp,
    '/chat': chat,
    '/profile': profile,
    '/change-profile': changeProfile,
    '/change-password': changePassword,
    '/error-404': error404,
    '/error-500': error500,
};
