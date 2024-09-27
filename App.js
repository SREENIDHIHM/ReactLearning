/**
 * <div id= "parent">
 * <div id ="child">
 * <h1></h1>
 * </div>
 * </div>
 * ReactElement(object) =>HTML(Browser to understands)
 */
const parent = React.createElement(
"div",
{ id : "parent"} ,[React.createElement(
    "div",
    { id : "child"} ,
[React.createElement("h1" ,{},"iam a h1 tag"),
    React.createElement("h2" ,{},"iam a h1 tag")
]
),
React.createElement(
    "div",
    { id : "child"} ,
[React.createElement("h1" ,{},"iam a h1 tag"),
    React.createElement("h2" ,{},"iam a h1 tag")
]
)]

)

// const heading = React.createElement(
//     "h1" ,
//     {id : "heading",  alt : "heaidng"},
//      "Hi Sreenidhi"
//     );
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);