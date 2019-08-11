import React, { Component } from 'react'
import SearchBar from '../components/SearchBar'
import CompanyTilesList from '../components/CompanyTilesList'

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
    const { companies } = this.state
    return (
      <div className='companies-page'>
        <SearchBar
          updateCompanies={this.updateCompanies}
        />
        <CompanyTilesList
          companies={companies}
          removeCompany={this.removeCompany}
        />
      </div>
    )
  }
}

export default CompaniesPage