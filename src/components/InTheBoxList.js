import InTheBox from "./InTheBox"

export default function InTheBoxList({includes}) {
  return (
    <div>
      {includes.map(item => <InTheBox item={item}/>)}
    </div>
  )
}
