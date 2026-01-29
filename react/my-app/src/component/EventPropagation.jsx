import React from 'react';
function greenDiv() {
    console.log("Green Div");
}
function yellowDiv() {
    console.log("yellow Div");
}
function redDiv() {
    console.log("red Div");
}

function EventPropagation(props) {
    return (
        <>
            <div style={{
                height: "400px",
                width: "400px",
                backgroundColor: "green",
                display: "flex",           // Enables Flexbox
                justifyContent: "center",  // Centers child horizontally
                alignItems: "center" ,
                border: "solid black 2px"      // Centers child vertically
            }}
                onClick={greenDiv}
            >
                <div style={{
                    height: "250px",
                    width: "250px",
                    backgroundColor: "yellow",
                    display: "flex",       // Enables Flexbox for the inner child
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onClick={yellowDiv}
                >
                    <div style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: "red",
                        display: "flex",       // Centers the "Click me" text
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onClick={redDiv}
                    >
                        Click me (bubble)
                    </div>
                </div>
            </div>
            <div style={{
                height: "400px",
                width: "400px",
                backgroundColor: "green",
                display: "flex",           // Enables Flexbox
                justifyContent: "center",  // Centers child horizontally
                alignItems: "center"       // Centers child vertically
            }}
                onClickCapture={greenDiv}
            >
                <div style={{
                    height: "250px",
                    width: "250px",
                    backgroundColor: "yellow",
                    display: "flex",       // Enables Flexbox for the inner child
                    justifyContent: "center",
                    alignItems: "center"
                }}
                    onClickCapture={yellowDiv}
                >
                    <div style={{
                        height: "100px",
                        width: "100px",
                        backgroundColor: "red",
                        display: "flex",       // Centers the "Click me" text
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                        onClickCapture={redDiv}
                    >
                        Click me (capture)
                    </div>
                </div>
            </div>
        </>
    );
}

export default EventPropagation;