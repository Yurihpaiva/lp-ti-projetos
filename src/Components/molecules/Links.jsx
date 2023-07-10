import LinkItem from "../atoms/LinkItem"

export default function Links() {
     
    const pathname = window.location.href
    const links = [
        {
            Text:'Our rates',
            url:`${pathname}/#rates ` 
        },
        {
            Text:'Favorite projects',
            url:`${pathname}/#projects ` 
        },
        {
            Text:'Reviews',
            url:`${pathname}/#reviews ` 
        },
        {
            Text:'Contact',
            url:`${pathname}/#contact ` 
        },
     ]
    return(

    <div className="flex gap-8 max-w-fit ">
    {
        links.map((link, index) =>{
            return(
                <LinkItem  key={index} text={link.Text} url={link.url} />
            )
        })
    }
    </div>
)


}