import "./index.css";
import React from 'react';
import axios from "axios";
import { Link } from "react-router-dom";

function MainPageComponent(){
    const [products, setProducts] = React.useState([]);
    React.useEffect(function () {
      axios
        .get("https://0b587ea9-86fd-4159-99ed-6e7a7d323446.mock.pstmn.io/products")
        .then(function (result) {
            console.log(result);
          const products = result.data.products;
          setProducts(products);
        })
        .catch(function (error) {
          console.error("에러발생 : ", error);
        });
    }, []);

return(
<div>
    <div>
        <div id="banner">
          <img src="images/logo.png" alt="배너사진대신넣어봄" title="배너사진자리에요" />
        </div>
    </div>
    <div id="중간쪽">
        <div className="중간쪽사진">
                {products&&products.map(function(product,index){
                    return (
                    <Link to={`/products/${product.id}`}>    
                        <div className="중간쪽사진넣을곳">
                            <img src={product.imageUrl} alt="물건사진" title="물건사진자리에요" />
                        </div>
                    </Link>
                    );
                })}
        </div>    
    </div>
</div>
);
}

export default MainPageComponent;