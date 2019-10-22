import React from "react"

// imports 


// component
export const medProfDashboard = () => {
    //console.log(props)

    //are we going to want diff classNames in medProfDashboard return divs than patientDashboard
    return (
        <div>
            <div className="header"> 
                <h1>The medProfDashboard header goes here.</h1>
            </div>
            <div className="body">
                <h2>The medProfDashboard body goes here.</h2>
            </div>
            <div className="footer">
                <h2>The medProfDashboard footer goes here.</h2>
            </div>
        </div>
    )
}

//export
export default medProfDashboard