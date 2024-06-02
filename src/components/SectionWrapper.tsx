import React, { ReactNode } from 'react'

type SectionWrapperProps = {
    title: string,
    children?: ReactNode
}

const SectionWrapper = (props: SectionWrapperProps) => {
    const { title, children } = props
    return (
        <>
        <section>
            <h1>{title}</h1>
            {children}
        </section>
        </>
    )
}

export default SectionWrapper