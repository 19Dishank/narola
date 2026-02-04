export const PropsDrillingAndContextAPI = () => {
    return (
        <>
            <h1>hello from component B</h1>
            <ChildComponent data="hello" />
        </>
    );
}

const ChildComponent = (props) => {
    return (
        <>
            <h1>hello from component B</h1>
            <GrandChildComponent data={props.data} />
        </>
    )
}
const GrandChildComponent = (props) => {
    return (
        <>
            <h1>hello from component B</h1>
            <GrandGrandChildComponent data={props.data} />
        </>
    )
}
const GrandGrandChildComponent = (props) => {
    return <h1>{props.data} React</h1>
}