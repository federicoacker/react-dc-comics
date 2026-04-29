function FooterListLink({href, name}){
    return (
        <li className ="text-white"> <a href={ href } className="link-secondary fs-8">{ name }</a> </li>
    )
}

export default FooterListLink;