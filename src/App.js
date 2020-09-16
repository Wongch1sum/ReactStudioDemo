import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';

const exactMatch = true; // 精准匹配路由
const pathSensitive = true; // 路径大小写敏感

const RouterList = [
    { path: '/', key: '/', children: <Home /> },
    { path: '/About', key: '/About', children: <About /> },
    { path: '/Dashboard', key: '/Dashboard', children: <Dashboard /> },
];

const App = () => {
    return (
        <div className="root">
            <Router>
                <Switch>
                    {RouterList.map((route) => {
                        const { children, ...rest } = route;
                        console.log('');
                        return (
                            <Route {...rest} sensitive={pathSensitive} exact={exactMatch}>
                                {children}
                            </Route>
                        );
                    })}
                </Switch>
            </Router>
        </div>
    );
};

export default App;
