import ModelPage from './pages/ModelPage.jsx';
import MasterPage from './pages/MasterPage.jsx';
const routes = [
    {
        path: '/model',
        element: <ModelPage />
    },
    {
        path: '/masters',
        element: <MasterPage />
    },
];

export default routes;