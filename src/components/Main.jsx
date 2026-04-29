import Row from "react-bootstrap/Row";
import ComicsList from "./ComicsList";

function Main({ comics }){
    return(
        <main>
            <Row className="g-5 justify-content-center comics-list">
                <ComicsList comics={ comics }/>
            </Row>
            <div className="pt-5">
                <button className="btn btn-primary rounded-0 text-center d-block mx-auto px-5">Load More</button>
            </div>
        </main>
    )
}
export default Main