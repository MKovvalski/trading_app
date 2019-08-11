import React, { Component } from 'react'
import Loader from "../Loader";
import bemCx from "bem-modifiers";

class CompanyTileView extends Component {

  shouldDisplay = state => this.props.loadingState === state

  render () {
    const { // TODO: change before prod
      '1. symbol': symbol = 'GOOG',
      '2. name': name = 'Alphabet Inc.',
      '4. region': region = 'United States',
      '5. marketOpen': marketOpen = '0900',
      '6. marketClose': marketClose = '1600',
      '7. timezone': timeZone = 'UTC-5',
      retryLoading,
      loadingState
    } = this.props
    return (
      <div className={bemCx('company-tile-wrapper', loadingState )}>
        {this.shouldDisplay('loading') && <Loader /> }
        {this.shouldDisplay('overload') &&
        <div
          onClick={retryLoading}
          className='company-tile-wrapper__try-again'
        >
          Try again
        </div>
        }
        {this.shouldDisplay('success') &&
        <div className='company-tile'>
          <div className='company-tile__row'>
            <div className='company-tile__name'>{name}</div>
            <div className='company-tile__symbol'>{symbol}</div>
          </div>
          <div className='company-tile__row'>
            <div className='company-tile__region'>{region}</div>
            <div className="company-tile__hours">{marketOpen} - {marketClose}</div>
            <div className="company-tile__timezone">{timeZone}</div>
          </div>
        </div>
        }
      </div>
    )
  }
}

export default CompanyTileView