import styled from "styled-components";
function CardItem({ data }) {
    const { img_url, id, name, rating, description, cast, genre } = data;
    const isHit = rating >= 9.0 ? "hit" : "average";
    const cardTitle = {
        fontSize : "1.2rem",
        marginBottom : "6px",
        backgroundColor : `${rating >= 9.0 ? "rgb(90, 255, 90)" : "rgb(255, 244, 90)"}`,
        color : "black"
    };
    // const H1Title = styled.h1({
    //     fontSize : "1.2rem",
    //     marginBottom : "6px",
    //     backgroundColor : `${rating >= 9.0 ? "rgb(90, 255, 90)" : "rgb(255, 244, 90)"}`,
    //     color : "black"
    // });
return (
    <div className="card">
        <div className="card-body">
            <img className="card-img" src={img_url} alt={id} height={400} />
            <h1 style={cardTitle}>Name: {name}</h1>
            {/* <H1Title>Name: {name}</H1Title> */}
            <h3 className="card-rating">Rating:<span className={`rating ${isHit}`}> {rating}</span></h3>
            <p className="card-desc">Details: {description}</p>
            <p className="card-meta">Cast: {cast}</p>
            <p className="card-meta ">Genre: {genre}</p>
            <button className="card-btn">Watch Now</button>
            
        </div>
    </div>
);
}
export default CardItem;