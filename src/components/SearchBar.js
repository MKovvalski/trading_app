import React, { Component } from 'react'
import bemCx from 'bem-modifiers'
import { getSearchResults } from '../utils/api'

import ControlledInput from '../components/ControlledInput'
import SearchDropdown from '../components/SearchDropdown'

class SearchBar extends Component {
  state = {
    inputValue: '',
    searchResults: [],
    companyToTrack: null,
    displayDropdown: false,
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const { inputValue, companyToTrack } = this.state
    const valuesDiffer = prevState.inputValue !== inputValue
    const companyNotDiffer = prevState.companyToTrack === companyToTrack
    const inputNotEmpty = inputValue !== ''

    if (valuesDiffer && inputNotEmpty && companyNotDiffer) {
      this.getSearches(inputValue)
    }

    if (valuesDiffer && !inputNotEmpty) {
      this.setState({ searchResults: [], companyToTrack: null })
    }
  }

  resetCompanyToTrackState = () => this.state.companyToTrack && this.setState({ companyToTrack: null })

  getSearches = async () => {
    this.resetCompanyToTrackState()

    try {
      const res = await getSearchResults(this.state.inputValue)

      if (res && res.data && res.data.bestMatches && res.data.bestMatches.length) {
        this.setState({
          searchResults: res.data.bestMatches,
          displayDropdown: true
        })
      }

    } catch (err) {
      console.log(err)
    }
  }

  manageInputValueChange = e => this.setState({ inputValue: e.target.value })

  setCompanyToTrack = company =>
    this.setState({
      inputValue: company['2. name'],
      companyToTrack: company['1. symbol'],
      searchResults: [],
      displayDropdown: false,
    })

  render () {
    const { updateCompanies } = this.props
    const { inputValue, searchResults, displayDropdown, companyToTrack } = this.state

    return (
      <div className='search-bar'>
        <div className='search-bar__search-wrapper'>
          <ControlledInput
            className='search-bar__input'
            value={inputValue}
            onChange={this.manageInputValueChange}
          />
          {displayDropdown &&
          <div className='search-bar__dropdown'>
            <SearchDropdown
              searches={searchResults}
              onClick={company => this.setCompanyToTrack(company)}
            />
          </div>
          }
        </div>
        <div
          className={bemCx('search-bar__track-button', { 'active': companyToTrack })}
          onClick={() => updateCompanies(companyToTrack)}
        >
          Track
        </div>
      </div>
    )
  }
}

export default SearchBar