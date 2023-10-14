function makeInputGroup(refBlock,promptText,inputName,classStyle){
    let prompt = document.createElement("span");
    let textBox = document.createElement("input");
    let group = document.createElement("div");
    textBox.className = "form-control";
    textBox.type = "text";
    prompt.innerText = promptText;
    prompt.className = "input-group-text";
    if (promptText === "From" || promptText === "To")
        textBox.placeholder = "MM/YYYY"

    if (promptText === "Signature" || promptText === "Date") {
        group.className = "input-group input-group-lg"
    } else group.className = "input-group input-group-sm";
    textBox.id = promptText
    textBox.name = inputName

    group.appendChild(prompt);
    group.appendChild(textBox);
    refBlock.className = classStyle;
    refBlock.appendChild(group)
    return refBlock
}

var p_list = document.getElementsByTagName("p");

for(var i = 0; i < p_list.length; i++) {
    p_list[i].className = "d-inline fw-bolder";
    if (p_list[i].innerText === "If yes, explain:") continue;
}

let fuck = document.getElementById("ref_instructions");
fuck.className = "mb-4 fst-italic lead fw-bolder"

let a = document.getElementsByName("name");
let b = document.getElementsByName("relation");
let c = document.getElementsByName("company");
let d = document.getElementsByName("phone");
let e = document.getElementsByName("address");

a.forEach((item,index) => {
    makeInputGroup(item,"Name","Ref_Name_"+(index+1).toString(),"col-6 col-sm-8 mb-2");  
});
b.forEach((item,index) => {
    makeInputGroup(item,"Relation","Ref_Relationship_"+(index+1).toString(),"col-3 col-sm-4 mb-2");
});
c.forEach((item,index) => {
    makeInputGroup(item,"Company","Ref_Company_"+(index+1).toString(),"col-6 col-sm-8 mb-2");
});
d.forEach((item,index) => {
    makeInputGroup(item,"Phone","Ref_Phone_"+(index+1).toString(),"col-3 col-sm-4 mb-2");
});
e.forEach((item,index) => {
    makeInputGroup(item,"Address","Ref_Address_"+(index+1).toString(),"col-9 col-sm-12 mb-4");
});

let edu_loc = document.getElementsByName("edu_loc");
let edu_addr = document.getElementsByName("edu_addr");
let edu_from = document.getElementsByName("edu_from");
let edu_to = document.getElementsByName("edu_to");

let edu_degree = document.getElementsByName("edu_degree");

let eduTypes = ["High School","College","Other"];
makeInputGroup(edu_loc[0],"High School","High_School","col-5");
makeInputGroup(edu_loc[1],"College","College","col-5");
makeInputGroup(edu_loc[2],"Other","Other","col-5");


edu_addr.forEach((item,index) => {
    makeInputGroup(item,"Address","edu_Address_"+(index+1).toString(),"col-7");
});
edu_from.forEach((item,index) => {
    makeInputGroup(item,"From","edu_From_"+(index+1).toString(),"col-2");
});
edu_to.forEach((item,index) => {
    makeInputGroup(item,"To","edu_To_"+(index+1).toString(),"col-2");
});
let first = true
edu_degree.forEach((item) => {
    if (first) makeInputGroup(item,"Diploma","Diploma","col-3 offset-1 ps-0");
    else makeInputGroup(item,"Degree","Diploma","col-3 offset-1 ps-0");
    first = false
});
let names = [["Company", "Phone"],
["Address", "Supervisor"],
["Job Title", "Starting Salary $", "Ending Salary $"],
["Responsibilites"],
["From", "To", "Reason for Leaving"]]
// previous employment col counts per row
// 2
// 2
// 3
// 1
// 3
// 2
let pe_rows1 = document.getElementsByName("pe_row1")
let pe_rows2 = document.getElementsByName("pe_row2")
let pe_rows3 = document.getElementsByName("pe_row3")
let sections = [pe_rows1, pe_rows2, pe_rows3]
let nIndex = 0
sections.forEach((section,index) => {
    nIndex = 0
    section.forEach((row) => {
        let pe_cols = row.children;
        for(let i=0; i < pe_cols.length; i++) {
            makeInputGroup(pe_cols[i],names[nIndex][i],names[nIndex][i]+"_"+(index+1).toString(), "col mb-2")
        }
        if (nIndex === 4) {
            pe_cols[0].className = "col-2 mb-4"
            pe_cols[1].className = "col-2 mb-4"
            pe_cols[2].className = "col mb-4"
        }
        else if (nIndex === 0) {
            pe_cols[0].className = "col-8 mb-2"
        }
        else if (nIndex === 1) {
            pe_cols[0].className = "col-8 mb-2"
        }
        else if (nIndex === 2) {
            pe_cols[0].className = "col-5 mb-2"
        }
        nIndex = (nIndex + 1) % 5
    })
})


let mil_names = [["Branch","From","To"],
["Rank at Discharge","Type of Discharge"],
["If other than honorable, explain"]]

let mIndex = 0;
let mil_rows = document.getElementsByName("mil_row")
mil_rows.forEach(row => {
    let mil_cols = row.children;
    for(let i=0; i < mil_cols.length; i++){
        makeInputGroup(mil_cols[i],mil_names[mIndex][i],mil_names[mIndex][i],"col mb-2")
    } 
    if (mIndex===0) mil_cols[0].className = "col-6 mb-2"
    else if (mIndex===2) mil_cols[0].className = "col mb-4"
    mIndex += 1
})


document.getElementById("sig1").className = "fw-bolder lead fst-italic"
document.getElementById("sig2").className = "fw-bolder lead fst-italic"

let sig3 = document.getElementById("sig3")
let sig4 = document.getElementById("sig4")

makeInputGroup(sig3,"Signature","App_Signed_By","col-8")
makeInputGroup(sig4,"Date","Application_Date","col-4")
