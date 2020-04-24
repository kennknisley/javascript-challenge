// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!
function buildtable(tableData){
    tbody.html("")
    tableData.forEach((value) => {
        const row = tbody.append("tr")
        // console.log(key, value);
        Object.values(value).forEach((value) => {
        let cell = row.append("td");
        cell.text(value);
        });
    });
};

function handleClick() {
    const date=d3.select("#datetime").property("value");
    let filterData = tableData
    if (date) {
        filterData = filterData.filter(row => row.datetime === date);
    }
    buildtable(filterData)    
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildtable(tableData)
