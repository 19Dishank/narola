import Data from "../apis/Data.json";
import CardItem from "./CardItem";
function Card() {

    return (
        <>
            {Data.map((ele) => {
                return <CardItem key={ele.id} data={ele} />
            })}        
        </>
    );
}

export default Card;