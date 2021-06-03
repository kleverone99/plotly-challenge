//Grab data from samples.json() file

d3.json("data/samples.json").then((all_data) => {

    //display all_data
    console.log(all_data)

    //display all OTU data
    var otu = all_data.samples[0]
    var otu_ids1 = otu.otu_ids
    console.log(otu)

    //display OTU id's
    console.log(otu_ids1)
    
    //display OTU labels
    var otu_labels1 = otu.otu_labels
    console.log(otu_labels1)

    //display OTU values
    var sample_values1 = otu.sample_values

    var otu_ids = otu_ids1.slice(0,10).reverse();

    var otu_labels = otu_labels1.slice(0,10).reverse();

    var sample_values = sample_values1.slice(0,10).reverse()

    var trace1 = {
        x: sample_values,
        y: otu_ids.map((d) => "OTU " + d),
        text: otu_labels,
        marker: {
        color: 'blue'},
        type:"bar",
        orientation: "h",
    };

    var data = [trace1];

    var layout = {
        title: "Top 10 OTU IDs & Values",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "OTU Value"},
        margin: {
            l: 100,
            r: 100,
            t: 50,
            b: 100
        }
    };


    Plotly.newPlot("bar", data, layout);

    var trace2 = {
        x: otu_ids1,
        y: sample_values1,
        mode: "markers",
        marker: {
            size: sample_values1,
            color: otu_ids1
        },
        text: otu_labels1
    };

    var layout2 = {
        title: "Bubble Chart: OTU ID vs Value",
        xaxis: { title: "OTU ID" },
        yaxis: { title: "OTU Value"},
        margin: {
            l: 75,
            r: 5,
            t: 100,
            b: 100
        }
    
    };
    
    var data2 = [trace2];


    Plotly.newPlot('bubble', data2, layout2);
});


//Create a function that initializes dropdownmenu
function init() {
    
    var dropdownMenu = d3.select("#selDataset");
    //Call the json
    d3.json("data/samples.json").then((dropitem) => {
        dropitem.names.forEach((id) => {
            dropdownMenu.append('option').text(id).property("value");

        });
    })

    

}
init();
