import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {activeId: countryAndCapitalsList[0].id}

  selectedCountry = event => {
    this.setState({activeId: event.target.value})
  }

  getSelectedCountry = () => {
    const {activeId} = this.state
    const filteredItem = countryAndCapitalsList.find(
      eachItem => eachItem.id === activeId,
    )
    return filteredItem.country
  }

  render() {
    const {activeId} = this.state
    const country = this.getSelectedCountry(activeId)

    console.log(activeId)
    console.log(country)

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading">Countries And Capitals</h1>
          <p className="description">
            <select
              className="selected-container"
              onChange={this.selectedCountry}
              value={activeId}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </p>
          <p className="country-name">{country}</p>
        </div>
      </div>
    )
  }
}
export default Capitals
