import Row from "react-bootstrap/Row";
import ComicsList from "./ComicsList";

function Main(){
    return(
        <>
        <Row className="g-5 justify-content-center row-gap-5 comics-list">
            <ComicsList/>
        </Row>
        <div className="pt-5">
            <button className="btn btn-primary rounded-0 text-center d-block mx-auto px-5">Load More</button>
        </div>
        </>
    )
}
export default Main