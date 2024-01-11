import React, { Component } from 'react';
import { urlApi } from '../data/data';

export default class TrendingNow extends Component {

    state = { 
        objWatch : [],
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

              const Duplicate = this.state.objWatch.some(item => item.imdbID === responseJson.imdbID);

              if (!Duplicate) {
                this.setState((prevState) => ({
                  objWatch: [...prevState.objWatch, responseJson],
                }));
              }
      
              console.log(this.state);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      }
      
    render() {
        console.log(this.state)
        return (
            this.state.objWatch.map((e, index) => (
              <div key={index} className="col mb-2 px-1">
                <img className="img-fluid" src={e.Poster} alt={e.Plot} />
              </div>
            ))
          );
        }
}