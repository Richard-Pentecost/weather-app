import React from 'react';
import '../styles/search-form.scss';

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

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onLocationSelect(this.state.searchText);
    this.setState({
      searchText: '',
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.searchText}
          />
          <button className="search" onClick={this.handleSubmit}>Search</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;
