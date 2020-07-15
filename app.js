// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
class GroceryListItem extends React.Component {

  // A `constructor` method is expected on all ES6 classes
  // When React instantiates the component,
  // it will pass `props` to the constructor
  constructor(props) {
    // Equivalent to ES5's React.Component.call(this, props)
    super(props);

    // `state` is just an object literal
    this.state = {
      done: false
    };
  }

  // When a list item is clicked, we will toggle the `done`
  // boolean, and our component's `render` method will run again
  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }
  // Every class component must have a `render` method
  // Stateless functional components are pretty much just this method
  render() {
    // Making the style conditional on our `state` lets us
    // update it based on user interactions.
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };

    return (
      // You can pass inline styles using React's `style` attribute to any component
      // snake-cased css properties become camelCased this this object
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.item}</li> /* `props` is no longer passed as an argument, but instead accessed with `this.props` */
    );
  }
}

// Update our `TodoList` to use the new `TodoListItem` component
// This can still be a stateless function component!
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
    <h2>My Grocery List</h2>
    <GroceryList items={['steak', 'dog food']}/>
  </div>
);

ReactDOM.render(
  <App />,
  document.getElementById('app')
);