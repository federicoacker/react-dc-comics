
import Comic from './Comic.jsx'

function ComicsList({ comics }){
    return (
    <>
    {comics.map(comic => <Comic comic={comic}></Comic>)}
    </>
    );
}

export default ComicsList;