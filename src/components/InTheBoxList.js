import InTheBox from "./InTheBox"

export default function InTheBoxList({includes}) {
  return (
    <div>
      {includes.map((item,index) => <InTheBox key={index} item={item}/>)}
    </div>
  )
}
