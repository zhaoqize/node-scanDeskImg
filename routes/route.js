import { Router, 
         Route, 
         hashHistory, 
         IndexRoute } from 'react-router';

//import { AppContainer } from 'react-hot-loader';

import IndexLayout from '../components/index.jsx'

//蛋疼的UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const Main = () => (
  
    <MuiThemeProvider>
      <IndexLayout />
    </MuiThemeProvider>
  
);

var router = (
	<Router history={hashHistory}>

		<Route path="/">
			<IndexRoute component={Main} />

		</Route>

	</Router>
)

export default router;








