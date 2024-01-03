import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.js';
import './Products.css'


function Product(image: any, text: string) {
  return (
    <div className="col m-1">
      <a className="green">
        <div className="card ">
          <img src={image} className="card-img-top" alt="..." />
          <div className="card-body">
            <p className="card-text">{text}</p>
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
          <Product image="../../assets/images/cat.jpg" text="хуй" />
        </div>
      </div>
    </>
  )

}