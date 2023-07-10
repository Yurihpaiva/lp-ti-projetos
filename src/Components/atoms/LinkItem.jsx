export default function LinkItem({url, text}) {
    return (
        <a className="
            text-[#030303] 
            text-lg 
            font-normal
            hover:text-[#0053ff]
        " href={url}>
            {text}
        </a>
    )
}