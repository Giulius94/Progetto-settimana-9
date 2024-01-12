import React, { Component } from 'react'
import TrendingNow from './TrendingNow'
import WatchComp from './WatchComp'
import ReleasesComp from './ReleasesComp'


export default class Body extends Component {

    state = {
       trendingNow : ['tt9663764','tt21807222','tt10160976','tt10366206'],
        Watch : ['tt0993846','tt7286456','tt15398776','tt4154796'],
        NewReleases : ['tt0816692','tt0120669','tt1119646','tt0107290'],
    }
    

  render() {
    return (
        <div className="container-fluid px-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4">TV Shows</h2>
            <div className="dropdown ms-4 mt-1">
              <button
                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ backgroundColor: '#221f1f' }}
              >
                Genres &nbsp;
              </button>
            </div>
          </div>
          <div>
            <i className="fa fa-th-large icons"></i>
            <i className="fa fa-th icons"></i>
          </div>
        </div>
        <h4>Trending Now</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around">
            <TrendingNow filmId={this.state.trendingNow}/>
        </div>
        <h4>Watch it Again</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around">
            <WatchComp filmId={this.state.Watch}/>
        </div>
        <h4>New Releases</h4>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center d-flex justify-content-around">
            <ReleasesComp filmId={this.state.NewReleases}/>
        </div>
      </div>
    )
  }
}
