// from data.js
let tableData = data;

// YOUR CODE HERE!

// reference to the table body which holds the table 
let tbody = d3.select("tbody");

//where ever you declaring tbody, put the below in the next line
// print out on console within webpage return array
console.log(tableData);

// updates our cells with data values
// foreach replaces function and the return call
//The forEach() method calls a function once for each element in an array, in order.
tableData.forEach((record) => {
    let row = tbody.append("tr"); // make new row for each element wihtin array
  //  tbody.html('')

    //object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
    Object.entries(record).forEach(([kay, value]) => { // inner loop adding their values into the page the keys are reflected by headers
        let cell = row.append("td"); // insert table data
        cell.text(value);   // we only need values to be called header will do for our keys

    });
});

// create filter
// select the button type # located wihtin the html
// let button = d3.select("#button"); // I was calling the wrong element within the HTML
let button = d3.select("#filter-btn");

// click handler for form
button.on("click", function() {

    // Precent page refreshing
    d3.event.preventDefault();

    // id = "datatime"
    let inputElement = d3.select("#datetime");

    // get value from input
    let inputValue = inputElement.property("value");
    console.log(inputValue);

    //set filter tableData = to inputValue or user input
    //storing filtered data
    let filteredData = tableData.filter(element => element.datetime === inputValue);

    console.log(filteredData);

    // Need to pass new filtered data to tableData
    //button.on("click", function() {
    //let newText = d3.event.target.tableData === filteredData;
    //tableData.map(new_data => filteredData.value);
    
    //d3.selectAll("#filter-btn").on("click", handleClick);
    //let date = filteredData.map((tableData) => tableData.datetime)
    //let list = d3.select('ul.summary');

    //buildTable(tableData);
    // filteredData.forEach(function(data_filtered) {

    // let row = tbody.append("tr");
    // Object.entries(data_filtered).forEach(function([key, value]) {
    //     let cell = row.append("td");
    //     cell.text(value);
    tbody.html('')

    filteredData.forEach((data_filtered) => {
        let row = tbody.append("tr"); // make new row for each element wihtin array
       // where ever you declaring tbody, put the below in the next line
        //tbody.html('')
         //object.entries() method returns an array of a given object's own enumerable string-keyed property [key, value] pairs,
        Object.entries(data_filtered).forEach(([kay, value]) => { // inner loop adding their values into the page the keys are reflected by headers
            let cell = row.append("td"); // insert table data
            cell.text(value);   // we only need values to be called header will do for our keys

    });
});
});

