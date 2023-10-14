import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

<Router>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route component={NotFound} />
  </Switch>
</Router>


