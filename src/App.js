import { BrowserRouter, Switch, Route, Link, useParams } from 'react-router-dom';


const ProductDetail = () => {

  const { product } = useParams();

  return (
    <h1>Product Detail {product}</h1>
  )
}

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h4>Products List</h4>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4>Product 1</h4>
            <Link className="btn btn-primary" to={"/producto1"}>
              More details
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4>Product 2</h4>
            <Link className="btn btn-primary" to={"/producto2"}>
              More details
            </Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h4>Product 3</h4>
            <Link className="btn btn-primary" to={"/producto3"}>
              More details
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/:product">
          <ProductDetail />
        </Route>

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/*">
          <h1>Page Not Found</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
