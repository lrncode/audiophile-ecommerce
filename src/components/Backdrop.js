import '../css/Backdrop.css'


export default function Backdrop({zIndexValue=19}) {
  return (
    <div  style={{zIndex:zIndexValue}}
          className='backdrop'>      
    </div>
  )
}
