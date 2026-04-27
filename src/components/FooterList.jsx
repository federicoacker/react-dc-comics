function FooterList({name, listArray}){
    return (
    <>
    <h4 className = "text-white">{ name }</h4>
    <ul className = 'footer-list'>
        {listArray.map(singleString => <li key={listArray.indexOf(singleString)} className ="text-white"> { singleString }</li>)}
    </ul>
    </>
    );

}

export default FooterList;