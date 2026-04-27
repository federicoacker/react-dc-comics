

function FooterNavlink({name, url}){

    return (
    <figure className="d-flex column-gap-2 align-items-center">
        <img src={ url } className="footer-navbar-img-fluid"></img>
        <figcaption className="text-white">
            { name }
        </figcaption>
    </figure>
    );
}

export default FooterNavlink