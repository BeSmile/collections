# 路由嵌套

const Topics = ({ match }) => (
    <div>
        <Route path={`${match.url}/field`} component={VenueField} />
        <Route
            exact
            path={match.url}
            component={HomePage}
        />
    </div>
);

<Route  path="/topic"  component={Topics}/>

嵌套路由内部路由需要填写完整的路由,否则无法匹配;
如上其实是匹配
<pre><Route path={`/topic/field`} component={VenueField} />
        <Route
            exact
            path={'/topic'}
            component={HomePage}
        /></pre>
