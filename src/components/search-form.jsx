import React from 'react';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  handleInputChange = event => {
    this.setState({
      searchText: event.target.value,
    });
  };

  handleSubmit = () => {
    this.props.onLocationSelect(this.state.searchText);
  };

  render() {
    return (
      <div>
        <input 
          type="text" 
          onChange={this.handleInputChange}
          value={this.state.searchText}
        />
        <button onClick={this.handleSubmit}>Search</button>
      </div>
    );
  }
}

export default SearchForm;
