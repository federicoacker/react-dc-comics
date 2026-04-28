function FooterList({name, listArray}){
    return (
    <>
    <h4 className = "text-white fs-5">{ name }</h4>
    <ul className = 'footer-list'>
        {listArray.map(listObject => <li key={listArray.indexOf(listObject)} className ="text-white"> <a href={ listObject.url } className="link-secondary fs-8">{ listObject.name }</a> </li>)}
    </ul>
    </>
    );

}

export default FooterList;