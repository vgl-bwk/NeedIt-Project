import React, { useState , useRef} from "react";
// import { Link } from "react-router-dom";
// import SearchIcon from '@mui/icons-material/Search';

function Donate() {
//   const [productInfo, setProductInfo] = useState("");
  const [product, setProduct] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");
  const [cathegory, setCathegory] = useState("");
  const [pictures, setPictures] = useState([]);

  const selectedFile = useRef()
  const uploader = async ()=> {
// console.log(name);
console.log(selectedFile);
  }

  return (
    <div className="container">
      <form className="loginmember d-flex flex-column">
        <h1>Donate your product</h1>
        <label for="product" class="form-label">
          Nombre del producto:
        </label>
        <input
          className="form-control"
          type="title"
          placeholder="Nombre del producto"
          required
          onChange={(e) => {
            setProduct(e.target.value);
            console.log(product)
          }}
        //   value={productInfo}
        ></input>
<label for="status" class="form-label">
          Status:
        </label>
        <input
          className="form-control"
          type="status"
          placeholder="Status"
          required
          onChange={(e) => {
            setStatus(e.target.value);
            console.log(status);
          }}
        ></input>
        <label for="cathegory" class="form-label">
          Categoria:
        </label>
        <input
          className="form-control"
          type="text"
          placeholder="Categoria"
          required
          onChange={(e) => {
            setCathegory(e.target.value);
            console.log(cathegory);
          }}
        ></input>
        <label for="description" class="form-label">
          Descripción:
        </label>
        <input
          className="form-control"
          type="description"
          placeholder="descripción"
          required
          onChange={(e) => {
            setDescription(e.target.value);
            console.log(description);

          }}
        ></input>
        <label for="pic" class="form-label">
          Imagen:
        </label>
        <input 
          className="form-control"
          type="file"
          ref={selectedFile}
          placeholder="sube tus fotos"
          required
          onChange={(e) => {
            setPictures(e.target.value);
            console.log(pictures);
          }}
        ></input>
        {/* <h2>{productInfo}</h2> */}
        <button type="submit" onClick={uploader}>Donate</button>

        {/* <Link to="/Register">Not member yet? signup here</Link> */}
      </form>
    </div>
  );
}

export default Donate;