import React from 'react'

class PokemonD extends React.Component {
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
    
                    <div class="card mb-3" style={{maxWidth:"840px"}}>
                    <div class="row g-0">
                      <div class="col-md-4">
                        <img src={element.images.large} class="img-fluid rounded-start" alt="..."/>
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" >{element.name} <strong>hp-{element.hp}</strong></h5>
        
                          <p class="card-text"><small class="text-muted"><span style={{color:"blue"}}><h6>Artist:-{element.artist}</h6></span> </small></p>

                            <a href={element.cardmarket.url} id="name1"> <h5 className="card-title" id="name1">Check... </h5></a>

                          
                        </div>

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

export default PokemonD




