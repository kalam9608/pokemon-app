import React from "react";
import "./pokemon.css"
// import PokemonD from "./PokemonD";
import {Link} from "react-router-dom";


class Pokemon extends React.Component {
  constructor() {
    super();

    this.state = { pokemons: [] };
  }

  async componentDidMount() {
    let url = "https://api.pokemontcg.io/v2/cards?page=1&pageSize=100";

    let data = await fetch(url);

    const parseData = await data.json();

    console.log(parseData.data);

    this.setState({ pokemons: parseData.data });
  }
  render() {
    return (
      <>
        <div className="container my-2">

          <div className="row">

            {this.state.pokemons.map((element) => {
              return (

                <div key={element.id} className="col-sm-3 my-2">

               
                <div className="card" id="cardbody" style={{ width:"16rem" }}>
                  <img
                    src={element.images.large}
                    className="card-img-top"
                    id="row_img"
                    alt="..."
                  />
                  <div className="card-body">
                    {/* <a href={element.cardmarket.url} id="name"> <h5 className="card-title" id="name">{element.name} </h5></a> */}
                    {/* <h5 className="card-title" id="name">{element.name} </h5> */}

                    <Link className="nav-link"  id="name" to="/about"><h5>{element.name} </h5></Link>
                    


                  </div>
                </div>

                </div>
              );
            })}

          </div>

        </div>
      </>
    );
  }
}

export default Pokemon;
