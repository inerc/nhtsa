import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './containers/App';
import Decoder from './containers/Decoder';
console.log('')
const Routes = (
    <Route path="/" component={App}>
        <Route path="/decoder" component={Decoder}/>
    </Route>
);

export default Routes;
