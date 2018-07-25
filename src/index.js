import ReactDOM from 'react-dom';
import { makeMainRoutes } from './routes';

require('./assets/favicon.ico');


const routes = makeMainRoutes();


ReactDOM.render(
    routes,
    document.getElementById('root'),
);

// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App', () => {
        render(
            routes,
            document.getElementById('root'),
        );
    });
}
