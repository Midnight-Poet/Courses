import { GiWhiteBook } from "react-icons/gi"


let Div = (prop) => {
    return (
        <div>
            <header>
                {prop.header}
            </header>
            <ul>
                {
                    prop.details.map(items => {
                        return (
                            <li>
                                <items.icon />
                                {items.text}
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}
export let Sidenav = (prop) => {
    return (
        <section className="sidenav">

            <h1 className="text-[40px] flex justify-center items-center capitalize font-semibold gap-2">
                <GiWhiteBook className="text-primary-500" /> Courses.
            </h1>
            <div>
                <Div details={prop.arr[0]} header={'general'} />
                <Div details={prop.arr[1]} header={'courses'} />
                <Div details={prop.arr[2]} header={'other'} />
            </div>
        </section>
    )
}