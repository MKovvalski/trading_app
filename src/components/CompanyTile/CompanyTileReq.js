import React, { Component } from 'react'
import { getSearchResults as getCompanyData } from '../../utils/api'

import CompanyTileView from './CompanyTileView'

const hasMatches = res => res && res.data && res.data.bestMatches && res.data.bestMatches.length

const usedAllSlots = res => res && res.data && res.data['Note']

class CompanyTileReq extends Component {
  state = {
    companyData: null,
    loadingState: false,
  }

  componentDidMount() {
    this.getCompanyData()
  }

  findExactCompany = (companies, symbol) => companies.find(company => company['1. symbol'] === symbol)

  getCompanyData = async () => {
    const { symbol } = this.props

    this.setState({ loadingState: 'loading' })

    try {
      const res = await getCompanyData(symbol)

      if (usedAllSlots(res)) {
        this.setState({ loadingState: 'overload' })
      }

      if (hasMatches(res)) {
        const companies = res.data.bestMatches
        this.setState({
          companyData: this.findExactCompany(companies, symbol),
          loadingState: 'success',
        })
      }

    } catch (err) {
      console.log(err)
      this.setState({ loadingState: 'failure' })
    }
  }

  render () {
    const { companyData, loadingState } = this.state
    return (
      <CompanyTileView
        retryLoading={this.getCompanyData}
        loadingState={loadingState}
        {...companyData}
      />
    )
  }
}

export default CompanyTileReq