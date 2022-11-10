import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
// import { newApiService } from './NewApiService/NewApiService';

export class App extends Component {
  state = {
    name: '',
  };

  handleFormSubmit = aaa => {
    console.log('введенное значение', aaa);
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
      </div>
    );
  }
}
