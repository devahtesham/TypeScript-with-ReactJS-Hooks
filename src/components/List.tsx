import { ReactNode } from "react"

type List<T> = {
    items: T[],
    render: (item: T) => ReactNode
}

const List = <T,>({ items, render }: List<T>) => {
    return (
        <>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {render(item)}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List