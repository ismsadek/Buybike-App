import Home from './components/Home'
import First from './components/First'
import Second from './components/Second'
import Third from './components/Third'
import Fourth from './components/Fourth'
import Fifth from './components/Fifth'
import Result	from './components/Result'


export const routes = [
  { path: '/', name:"homeLink", component: Home },
  { path: '/first', name:"firstLink", component: First },
  { path: '/second', name:"secondLink", component: Second },
  { path: '/third', name:"thirdLink", component: Third },
  { path: '/fourth', name:"fourthLink", component: Fourth },
  { path: '/fifth', name:"fifthLink", component: Fifth },
  { path: '/result', name:"resultLink", component: Result },
  { path: '*', redirect: '/' }	
  
]
