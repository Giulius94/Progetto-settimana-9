import React, { Component } from 'react';
import { urlApi } from '../data/data';

export default class TrendingNow extends Component {

    state = { 
        objReleases : [],
    }
    
    componentDidMount() {
        this.props.filmId.forEach((movie, index) => {
          fetch(urlApi + '&i=' + movie)
            .then((response) => {
              if (response.ok) {
                return response.json();
              }
              throw new Error('Something went wrong');
            })
            .then((responseJson) => {

              const Duplicate = this.state.objReleases.some(item => item.imdbID === responseJson.imdbID);

              if (!Duplicate) {
                this.setState((prevState) => ({
                  objReleases: [...prevState.objReleases, responseJson],
                }));
              }
              
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
      
    render() {
        return (
            this.state.objReleases.map((e, index) => (
              <div key={index} className="col mb-2 px-1">
                <img className="img-fluid" src={e.Poster} alt={e.Plot} />
              </div>
            ))
          );
        }
}