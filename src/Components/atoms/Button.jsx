export default function Button(props) {
    return (

<button
className= {`
${props.type === 'rounded' && 'h-9 rounded-full border border-gray-400 text-black'}
${props.type === 'default'&& 'px-8 py-5 rounded border border-gray-400 text-black '}
${props.color === 'blue' && 'bg-blue-700 border-blue-700 text-white'}
${props.color === 'green' && 'bg-green-700 border-green-800 text-black'}
uppercase
text-base
`}
>
{props.title}
</button>
   )
}