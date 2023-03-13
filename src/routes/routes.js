//configRoutes
import config from '~/config';

//layouts
import { HeaderOnly } from '~/layouts';
//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
//public routes
const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
    },
    {
        path: config.routes.following,
        component: Following,
    },
    {
        path: config.routes.profile,
        component: Profile,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: HeaderOnly,
    },
    {
        path: config.routes.Search,
        component: Search,
        layout: null,
    },
]; // k cần đnhap vẫn xem được

const privateRoutes = []; // bắt buộc đăng nhập

export { publicRoutes, privateRoutes };
