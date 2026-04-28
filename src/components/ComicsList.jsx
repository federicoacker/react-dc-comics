import comics from '../utility/comics.js';
import Col from 'react-bootstrap/Col';

function ComicsList(){
    return (
    <>
    {comics.map(comic =>{
        return ( <Col xs={12} sm = {12} md = {4} lg ={2} className="comic" key={ comic.id }>
            <figure className="comic-thumb text-white" >
                <img src = { comic.thumb } className="img-fluid" alt={ comic.title }></img>
            </figure>
            <h5 className="text-white">{ comic.series} </h5>
        </Col>
        
        );
    })}
    </>
    );
}

export default ComicsList;