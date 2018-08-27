#### Sublime-React快捷键
<pre>cdm→  componentDidMount: fn() { ... }

   cdup→  componentDidUpdate: fn(pp, ps) { ... }

     cs→  var cx = React.addons.classSet;

    cwm→  componentWillMount: fn() { ... }

    cwr→  componentWillReceiveProps: fn(np) { ... }

    cwu→  componentWillUpdate: fn(np, ns) { ... }

   cwun→  componentWillUnmount: fn() { ... }

     cx→  cx({ ... })

    fdn→  React.findDOMNode(...)

    fup→  forceUpdate(...)

    gdp→  getDefaultProps: fn() { return {...} } 

    gis→  getInitialState: fn() { return {...} } 

    ism→  isMounted()

  props→  this.props.

     pt→  propTypes { ... }

    rcc→  component skeleton

   refs→  this.refs.

    ren→  render: fn() { return ... }

    scu→  shouldComponentUpdate: fn(np, ns) { ... }

    sst→  this.setState({ ... })

  state→  this.state.</pre>
  #### sublime jsx高亮提示
  安装<code>babel</code>插件,设置view->syntax->open all with ...->jsx