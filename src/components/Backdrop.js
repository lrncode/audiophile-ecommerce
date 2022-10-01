import '../css/Backdrop.css'


export default function Backdrop({ zIndexValue= 19 , formBackdrop= false }) {
  return (
    <div  style={{zIndex:zIndexValue}}
          className={`${formBackdrop ? 'backdrop form-backdrop' : 'backdrop'}`}>      
    </div>
  )
}
