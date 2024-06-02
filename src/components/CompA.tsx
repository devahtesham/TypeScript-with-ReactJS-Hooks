import { ReactElement } from 'react'

type CompAProps = {
  heading: string
}

const CompA = ({ heading }: CompAProps):ReactElement => {
  return (
    <div>{heading}</div>
  )
}

export default CompA