export class Banner extends Component {
    state = {
    count: 0,
    };
    updateState = () => {
    this.setState({
    count: this.state.count + 1,
    });
    };
    componentDidMount() {
    console.log("Boom");
    }
    componentDidUpdate() {
    console.log("Boom");
    }
    render() {
    return (
    <div>
    <button onClick={this.updateState}>State: {this.state.count}</button>
    </div>
    );
    }
   }