import React, { Component } from 'react';
import { urlApi } from '../data/data';

export default class TrendingNow extends Component {

    state = { 
        objTrending : []
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

              const Duplicate = this.state.objTrending.some(item => item.imdbID === responseJson.imdbID);

              if (!Duplicate) {
                this.setState((prevState) => ({
                  objTrending: [...prevState.objTrending, responseJson],
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
            this.state.objTrending.map((e, index) => (
              <div key={index} className="col mb-2 px-1">
                <img className="img-fluid" src={e.Poster} alt={e.Plot} />
              </div>
            ))
          );
        }
}