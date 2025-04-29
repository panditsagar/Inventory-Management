
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes.jsx';
import Sidebar from './components/layout/Sidebar';

function App() {
    return (
        <Router>
            <div className="flex">
                <Sidebar />
                <div className="flex-1 p-4">
                    <Routes>
                        {routes.map((route, idx) => (
                            <Route key={idx} path={route.path} element={route.element} />
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;