// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");

tableData.forEach(element=>{
    let row = tbody.append("tr");
    row.append("td").text(element.datetime);
    row.append("td").text(element.city);
    row.append("td").text(element.state);
    row.append("td").text(element.country);
    row.append("td").text(element.shape);
    row.append("td").text(element.durationMinutes);
    row.append("td").text(element.comments);
});

//Filter button
let button = d3.select("#filter-btn");
let form = d3.select("#form");
button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime");
    let inputValue = inputElement.property("value");
    console.log(inputValue);
    let searchData = tableData.filter(tableData => tableData.datetime === inputValue);
    d3.select("tbody").html("");

    let filterResults = searchData.forEach(element => {
        let row = tbody.append("tr");
        row.append("td").text(element.datetime);
        row.append("td").text(element.city);
        row.append("td").text(element.state);
        row.append("td").text(element.country);
        row.append("td").text(element.shape);
        row.append("td").text(element.durationMinutes);
        row.append("td").text(element.comments);
    });

};

