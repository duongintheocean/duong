let arr=[{
    name:"hei",
    tuoi:18,
    luong:"xxxx",
},
{
    name:"quang",
    tuoi:18,
    luong:"xxxx",
},
{
    name:"cuong",
    tuoi:18,
    luong:"xxxx",
}];
function render(){
    let renderThing
    for(i=0;i<arr.length;i++){
    renderThing+=`
    <tr>
    <td>
        ${arr[i].name}
    </td>
    <td>
        ${i+1}
    </td>
    <td>
        ${arr[i].tuoi}
    </td>
    <td>
        ${arr[i].luong}
    </td>
    <td>
        <button onclick="deleteButton(${i})">
            delete
        </button>
    </td>
    <td>
        <button onclick="editButton(${i})" >
            edit
        </button>
    </td>
</tr>
    `
}
document.getElementById("RenderHere").innerHTML=renderThing;
}
render()
function deleteButton(id){
    arr.splice(id,1)
    render()
}
function editButton(id){
    arr.splice
}