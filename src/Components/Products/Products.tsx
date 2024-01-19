import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import './Products.css'

import photo from '../../assets//images/cat.jpg'

function Product(props: any) {
  return (
    <div className="col m-1">
      <a className="green">
        <div className="card">
          <img src={props.image} className="card-img-top card-width" alt="..." />
          <div className="card-body">
            <p className="card-text">{props.text}</p>
          </div>
        </div>
      </a>
    </div>
  )
}

export default function Products() {
  return (
    <>
      <div className="container-content">
        <div className="row row-cols-auto justify-content-left">
          <Product image={photo} text="Большой текст" />
          <Product image={photo} text="Большой текст" />
          <Product image={photo} text="Большой текст" />
          <Product image={photo} text="Большой текст" />
        </div>
      </div>
    </>
  )

}