import React, { Component } from 'React'
import Details from './Details';

const URL = 'https://newsapi.org/v2';
const APIKEY = 'd732a358126e4759a5d6917e0f8b03bb';

export default class News extends Component {
  constructor (props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      selectedItem: null
    }
  }

  showDetail = param => e => {
      this.setState ({
          selectedItem: param
      })
  }

  showNews = () => {
      this.setState({
          selectedItem: null
      })
  }

  componentDidMount () {
    const criteria = 'top-headlines?country=us&category=business'
    const address = URL + '/' + criteria + '&apikey=' + APIKEY
    fetch(address)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            error: null,
            items: result.articles,
            isLoaded: true
          })
        },
        error => {
          this.setState({
            error,
            items: [],
            isLoaded: true
          })
        }
      )
  }

  render () {
    const { error, isLoaded, items } = this.setState;
    
    if(selectedItem === null) {
    if (error) {
      return <p>{error.message}</p>
    } else if (!isLoaded) {
      return <p>Loading...</p>
    } else {
      return (
        <div>
          <h2>Top headlines from US</h2>
          {items.map(item => (
            <div key={item.title} onClick={this.showDetail(item)}>
              <h3>{item.title}</h3>
              <img src={item.urlToImage}></img>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      )
    }
  } else {
      return <Details title={selectedItem.title}
      image={selectedItem.urlToImage}
      description={selectedItem.description}
      show={this.showNews} />
  }
  }
}
