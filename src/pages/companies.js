import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'

class CompaniesPage extends Component {
  state = { companies: [] }

  updateCompanies = company => {
    const { companies } = this.state

    const notInArray = !companies.includes(company)

    if (notInArray) {
      this.setState({ companies: [...companies, company]})
    }

  }

  removeCompany = compToRemove => {
    this.setState({
      companies: this.state.companies.filter(company => company !== compToRemove)
    })
  }

  render () {
    return (
      <div className='companies-page'>
        <SearchBar
          updateCompanies={this.updateCompanies}
        />
      </div>
    )
  }
}

export default CompaniesPage