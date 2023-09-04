const jsonString = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonString);
const list = data.list;
const result = {
    list: []
}
for (let elem of list) {
    result.list.push(
        {
            name: elem.name,
            age: Number(elem.age),
            prof: elem.prof
        }
    )
}

console.log(result);

