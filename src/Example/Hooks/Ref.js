import { useRef, useState } from "react"

export default function RefEx() {
  // const [val, setVal] = useState('');
  // const [set, setSet] = useState(false);

  const inputRef = useRef(null);
  console.log(inputRef)

  function handler() {
    // setSet(true);
    inputRef.current.focus()
  }
  return (
    <>
    <input ref={inputRef} />
    <button onClick={handler}>Focus Input</button>
    {/* {set ? <p>{val}</p> : " "}     */}
    </>
  )
}