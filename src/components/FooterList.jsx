import FooterListLink from "./FooterListLink";

function FooterList({name, listArray}){
    return (
    <>
    <h4 className = "text-white fs-5">{ name }</h4>
    <ul className = 'footer-list'>
        {listArray.map(listObject => <FooterListLink key={ listObject.id } name={ listObject.name } href={listObject.url} />)}
    </ul>
    </>
    );

}

export default FooterList;