ReactDOM.render((
    <Router>
    <div>
    <Route path="/" render={Home} />
    <Route path="/login" render={Login} />
    </div>
    </Router>),
    document.getElementById('root')
    );
    