import "./index.css";
import {useParams} from 'react-router-dom';
import axios from "axios";
import { useEffect,useState } from "react";

function Productpage(){
    const { id } = useParams();
    const [product, setProducts] = useState([]);
    useEffect(function() {
        axios
        .get(`https://0b587ea9-86fd-4159-99ed-6e7a7d323446.mock.pstmn.io/products/${id}`)
        .then(function(result) {
            console.log(result);
            setProducts(result.data);
        })
        .catch(function(error) {
            console.error(error);
        });},
        []);
    if(product === null){
        return <h1>상품 정보를 받고 있습니다..</h1>;
    }
    return(
        <div>
            <div id="이미지박스">
                <img src={"/"+product.imageUrl} />
            </div>
            <div id="프로필박스">
                <div>
                    <div className="물품정보">김시연이 만든 브랜드</div>
                    <div className="날짜정보">2022년 2월 5일</div>
                    <div className="정보란">아직 정보가 없어요</div>
                    <div className="가격정보">3000원</div>
                </div>
            </div>
        </div>
    );
}

export default Productpage;