import "./App.css";
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    hits: []
  };

  componentDidMount() {
    const options = {
      method: "GET",
      url: "https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi",
      params: {
        q: '{query}-!1900,2020-!4,10-!3,8-!0-!movie-!english-!english-!gt100-!{downloadable}',

        t: "ns",
        audio:"english",
        cl: "all",
        vtype:"movie",
        st: "adv",
        gt:"1000",
        ob: "Relevance",
        p: "1",
        sa: "and",
      },
      headers: {
        "x-rapidapi-key": "70aa9d5184msh24f489409866b23p1ff84cjsn5832992d4f80",
        "x-rapidapi-host": "unogs-unogs-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then( response => {
        console.log(response.data.ITEMS);
        this.setState({ hits: response.data.ITEMS.slice(0,20) });
      })
      .catch(function (error) {
        console.error(error);
      });
  }



  render() {
    let movie = this.state.hits.map(x => {
      return <> <li> {x.title}   </li>
      <img src={x.image} />
      <p> {x.runtime} </p>
      <p> {x.movie} </p>
        <p> Rating: {x.rating} </p>
        <p> {x.released} </p>


        <p> {x.synopsis} </p>
      </>
    })

     return <> {this.state.hits.length > 0 ? movie : "empty"} </>

  }
}

export default App;
