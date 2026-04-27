

function FooterNavlink({name, url}){

    return (
    <a href="" className="d-flex column-gap-2 align-items-center footer-navbar-links">
    <figure className="d-flex column-gap-2 align-items-center">
        <img src={ url } className="footer-navbar-img-fluid"></img>
        <figcaption>
            { name }
        </figcaption>
    </figure>
    </a>
    );
}

export default FooterNavlink