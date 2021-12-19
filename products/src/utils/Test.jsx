import { useEffect , useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Test(){
    let {id}=useParams()
    const [test,setTest] = useState([])

    useEffect(()=>{
      fetchdata();
    },[])

     var anything 
    const fetchdata = async()=>{
        
        var fetchcall = await axios.get(`http://localhost:2345/productDetail/${id}`)
        
        anything=fetchcall.data.image[0]
        console.log("test");
        console.log(anything);
        setTest(fetchcall.data);
    } 
        return(
    <div>  
       <img src={test.anything} alt="image"></img>
       <p>{test.productName}</p>
    </div>
)
}
export {Test}