function FooterList({name, listArray}){
    return (
    <>
    <h4 className = "text-white fs-5">{ name }</h4>
    <ul className = 'footer-list'>
        {listArray.map(singleString => <li key={listArray.indexOf(singleString)} className ="text-white"> <a href="" className="link-secondary fs-8">{ singleString }</a> </li>)}
    </ul>
    </>
    );

}

export default FooterList;