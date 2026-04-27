

function FooterNavlink({name, url}){

    return (
    <figure className="d-flex">
        <img src={ url } className="img-fluid"></img>
        <figcaption>
            { name }
        </figcaption>
    </figure>
    );
}

export default FooterNavlink