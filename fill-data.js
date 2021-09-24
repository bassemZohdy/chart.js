const { addHours } = require("date-fns");
const fs = require("fs");

// try {
//   const jsonString = fs.readFileSync("data/db.json");
//   const data = JSON.parse(jsonString);
//   data.dataList1.push({ id: 5, x: '2020-09-21 09:10', y: 13 });
//   console.log("data:", data);
// } catch (error) {
//   console.log("Error parsing JSON string:", error);
// }

var i=0;
var data=[];
for (
  var d = new Date("2020-06-24");
  d <= new Date("2020-07-25");
  d = addHours(d, 1)
) {
    data.push({
    id: i++,
    x: d.toISOString(),
    y: Math.floor(Math.random() * 10)
  });
}
fs.writeFileSync('data/data.json',JSON.stringify({"close":data}));