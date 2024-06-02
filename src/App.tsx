import { ReactNode, useState } from "react"
import CompA from "./components/CompA"
import Counter from "./components/Counter"
import SectionWrapper from "./components/SectionWrapper"
import List from "./components/List";
import UseStateHook from "./components/hooks/UseStateHook";
import UseEffectHook from "./components/hooks/UseEffectHook";
import CommonHooks from "./components/hooks/CommonHooks";
import UseReducer from "./components/hooks/UseReducer";
import UseContextHook from "./components/hooks/UseContextHook";

export interface PRODUCT {
  name: string,
  price: number
}

const PRODUCT_DATA: PRODUCT[] = [
  { name: "shirt", price: 10 },
  { name: "pent", price: 20 },
  { name: "shorts", price: 30 }
]

function App() {
  const [count, setCount] = useState<number>(0)

  const listRenderFunc = (item: PRODUCT): ReactNode => {
    return (
      <div>
        <span>{item.name}{item.price}</span>
      </div>
    )
  }



  return (
    <>
      {/* ======= general practice */}
        {/* <CompA heading="Hello World" />
        <SectionWrapper title="I am Wrapper" >
          <h2>I am new </h2>
        </SectionWrapper>

        <Counter count={count} setCount={setCount} />
        <List items={PRODUCT_DATA} render={listRenderFunc} /> */}
      {/* ======== general practice */}
      
      {/* ======= hooks */}
        {/* <CommonHooks /> */}
        {/* <UseReducer /> */}
       <UseContextHook />
      {/* =======hooks */}
    </>
  )
}

export default App
