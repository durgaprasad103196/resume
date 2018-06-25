function loadJSON(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadJSON("data.json", function (text) {
  let data=JSON.parse(text);
  console.log(data);
  fun_education(data.education);

});

var div2=document.getElementById('child2');
function fun_education(edu) {
  var heading=document.createElement("h2");
  heading.textContent="Education QUalification"
  div2.appendChild(heading);
  var ul=document.createElement("ul");
  div2.appendChild(ul);
  for(var i=0; i<edu.length; i++){
  var list=document.createElement("li");
  list.textContent=edu[i].degree;
  ul.appendChild(list);
  var list=document.createElement("li");
  list.textContent=edu[i].institute;
  ul.appendChild(list);
  var list=document.createElement("li");
  list.textContent=edu[i].data;
  ul.appendChild(list);
}
}
function fun_skills(tech){
  var heading=document.createElement("h2");
  heading.textContent="technical skills";
  div2.appendChild(heading)
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var tr="";
  var table=document.createElement("table");
  div2.appendChild(table);
  for(var i=0; i<tech.length; i++)
  {
    tr=""<tr><td>"+"tech[i].name+"</td><td>";


  }
  table.innerHTML=tr;
  table.border="1";
}
