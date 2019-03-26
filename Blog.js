import React, { Component } from 'react';
import { render } from 'react-dom';

/************** LISTAS ******************/

class Blog extends Component{
 constructor() {
    super();
    this.state = {
      articles: []
    };
  }
//obtengo articulos via ajax
  componentDidMount(){
    console.log('Vale');
    let promesa = fetch('https://jsonplaceholder.typicode.com/posts');

    promesa.then(response=>
      response.json().then(data=>{
        this.setState({
          articles : data
          })
        })
    )
    ;
  }

//usar camelCase---> background-color = backgroundColor
//style inline -> declaracion elemento --> va un elemento json=>
// style= { {backgroundColor : gray}}
  render(){
    return (<div>
      {this.state.articles.map((article)=>{
        return <div style= {{backgroundColor : 'gray', padding:'10px'}}> 
        <p className="list-articles">{article.title}</p>
        </div>
      })
      }
    </div>);
  }
}
export default Blog;