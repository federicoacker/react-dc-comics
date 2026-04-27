function FooterList({name, listArray}){
    return (
    <>
    <h4>{ name }</h4>
    <ul className = 'footer-list'>
        {listArray.map(singleString => <li key={listArray.indexOf(singleString)}> { singleString }</li>)}
    </ul>
    </>
    );

}

export default FooterList;