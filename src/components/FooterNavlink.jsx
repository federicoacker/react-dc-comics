

function FooterNavlink({name, url}){

    return (
    <a href="" className="footer-navbar-links">
        <figure className="d-flex gap-1 align-items-center">
            <img src={ url } className="footer-navbar-img-fluid"></img>
            <figcaption>{ name }</figcaption>
        </figure>
    </a>
    );
}

export default FooterNavlink