// from data.js
let tableData = data;

// YOUR CODE HERE!

// reference to the table body which holds the table 
let tbody = d3.select("tbody");
// print out on console within webpage return array
console.log(tableData);

// updates our cells with data values
tableData.forEach((record) => {
    let row = tbody.append("tr"); // make new row
    Object.entries(record).forEach(([kay, value]) => { // inner loop adding their values into the page the keys are reflected by headers
        let cell = row.append("td"); // insert table data
        cell.text(value);   // we only need values to be called header will do for our keys

    });
});

// create filter
// select the button type #
let button = d3.select("#button");

// click handler for form
button.on("click", function() {

    // id = "datatime"
    let inputElement = d3.select("#datetime");

    // get value from input
    let inputValue = inputElement.property("value");

    //set filter tableData => inputValue or user input
    let filteredData = tableData.filter((tableData) => tableData.datetime === inputValue);
    
    let ages = filteredData.map((tableData) => tableData.datetime);
    
});