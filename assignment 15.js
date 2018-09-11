function add() {

    var batsman = document.getElementById('batsman').value;
    var wicket = document.getElementById('wicket').value;
    var run = document.getElementById('run').value;
    var ball = document.getElementById('ball').value;
    var four = document.getElementById('four').value;
    var six = document.getElementById('six').value;
    var table = document.getElementById('table').childNodes[1];
    var create_tr1 = document.createElement('tr');
    //debugger;
    //adding batsman
    var create_td1 = document.createElement('td');
    create_td1.setAttribute('class', 'border');
    create_tr1.appendChild(create_td1);
    create_tr1.setAttribute("id", Math.random());
    create_tr1.setAttribute("onClick", "edit_Item(event)");
    create_td1.innerHTML = batsman;

    var create_btn = document.createElement('input');
    create_btn.setAttribute('value', 'Edit');
    create_btn.setAttribute('type', 'button');
    //create_td1.appendChild(create_btn);
    create_tr1.appendChild(create_td1);


    //adding wicket
    var create_td2 = document.createElement('td');
    create_td2.setAttribute('class', 'border');
    create_tr1.appendChild(create_td2);
    create_td2.innerHTML = wicket;
    table.appendChild(create_tr1);

    //Adding run
    var create_td3 = document.createElement('td');
    create_td3.setAttribute('class', 'border');
    create_tr1.appendChild(create_td3);
    create_td3.innerHTML = run;
    table.appendChild(create_tr1);

    //Adding ball
    var create_td4 = document.createElement('td');
    create_td4.setAttribute('class', 'border');
    create_tr1.appendChild(create_td4);
    create_td4.innerHTML = ball;
    table.appendChild(create_tr1);

    //Adding 4s
    var create_td5 = document.createElement('td');
    create_td5.setAttribute('class', 'border');
    create_tr1.appendChild(create_td5);
    create_td5.innerHTML = four;
    table.appendChild(create_tr1);

    //Adding 6s
    var create_td6 = document.createElement('td');
    create_td6.setAttribute('class', 'border');
    create_tr1.appendChild(create_td6);
    create_td6.innerHTML = six;
    table.appendChild(create_tr1);

    //Adding Strike rate
    var strike = +((run * 100) / ball).toFixed(2);
    var create_td7 = document.createElement('td');
    create_td7.setAttribute('class', 'border');
    create_td7.setAttribute('id', 'strike');
    create_tr1.appendChild(create_td7);
    create_td7.innerHTML = strike;
    table.appendChild(create_tr1);

    //Adding Edit
    var create_td8 = document.createElement('td');
    create_td8.setAttribute('class', 'border');
    // var create_btn = document.createElement('input');
    // create_btn.setAttribute('value','Edit');
    // create_btn.setAttribute('type','button');
    // create_td8.appendChild(create_btn);
    // create_tr1.appendChild(create_td8);
    // //create_td8.innerText = "Edit";
    // table.appendChild(create_tr1);

    /*var create_btn = document.createElement('input');
    create_btn.setAttribute('value', 'Edit');
    create_btn.setAttribute('type', 'button');
    create_td8.appendChild(create_btn);
    create_tr1.appendChild(create_td8);
    create_tr8.appendChild(create_td8);
    */

    // var edt_button = document.createElement('button');
    // edt_button.innerHTML = "Edit";
    // edt_button.setAttribute("onClick", "edit_Item(event)");
    // create_li.appendChild(edt_button);

    //debugger;

    //Clearing input
    document.getElementById('batsman').value = "";
    document.getElementById('wicket').value = "";
    document.getElementById('run').value = "";
    document.getElementById('ball').value = "";
    document.getElementById('four').value = "";
    document.getElementById('six').value = "";

    var get_btn = document.getElementById('update');

    if (get_btn) {
        update_btn.remove();
    }

    //        table.appendChild(create_td);
}

var update_btn = document.createElement("button");

function edit_Item(event) {

    var get_btn = document.getElementById('update');

    if (get_btn) {
        update_btn.remove();
    }

    var current_item = event.currentTarget;
    //debugger;
    console.log('currentItem.id*****');
    console.log(current_item.id);
    var text = current_item.childNodes[0].textContent;
    var text1 = current_item.childNodes[1].textContent;
    var text2 = current_item.childNodes[2].textContent;
    var text3 = current_item.childNodes[3].textContent;
    var text4 = current_item.childNodes[4].textContent;
    var text5 = current_item.childNodes[5].textContent;

    document.getElementById('batsman').value = text;
    document.getElementById('wicket').value = text1;
    document.getElementById('run').value = text2;
    document.getElementById('ball').value = text3;
    document.getElementById('four').value = text4;
    document.getElementById('six').value = text5;

    //debugger;
    update_btn.setAttribute('id', 'update');
    update_btn.setAttribute('class', 'btn');
    update_btn.setAttribute('onClick', 'update_item(' + current_item.id + ')');
    update_btn.innerHTML = "Update";
    var body = document.getElementById('list1');
    var ol = document.getElementById('aaa');
    body.insertBefore(update_btn, ol);
}


function update_item(id) {
    //console.log(id);
    console.log('id');
    console.log(id);
    var input = document.getElementById("batsman").value;
    var input1 = document.getElementById("wicket").value;
    var input2 = document.getElementById("run").value;
    var input3 = document.getElementById("ball").value;
    var input4 = document.getElementById("four").value;
    var input5 = document.getElementById("six").value;

    var item = document.getElementById(id);
    // item.childNodes[0].textContent = input5;
    item.childNodes[0].textContent = input;
    item.childNodes[1].textContent = input1;
    item.childNodes[2].textContent = input2;
    item.childNodes[3].textContent = input3;
    item.childNodes[4].textContent = input4;
    item.childNodes[5].textContent = input5;

    /*
    var create_tr1 = document.createElement('tr');

    //adding batsman
    var create_td1 = document.createElement('td');
    var create_btn = document.createElement('input');
    create_btn.setAttribute('value', 'Edit');
    create_btn.setAttribute('type', 'button');
    create_td1.appendChild(create_btn);
    create_tr1.appendChild(create_td1);*/
    // debugger;

    /*
     create_td1.setAttribute('class', 'border');
     create_tr1.appendChild(create_td1);
     create_tr1.setAttribute("id", Math.random());
     create_tr1.setAttribute("onClick", "edit_Item(event)");
     create_td1.innerHTML = batsman;

     var create_btn = document.createElement('input');
     create_btn.setAttribute('value', 'Edit');
     create_btn.setAttribute('type', 'button');
     create_td1.appendChild(create_btn);
     create_tr1.appendChild(create_td1);
     */

    var get_sr = document.getElementById('strike');
    var sr = ((input2 * 100) / input3).toFixed(2);
    get_sr.innerHTML = sr;

    //Clearing input
    document.getElementById('batsman').value = "";
    document.getElementById('wicket').value = "";
    document.getElementById('run').value = "";
    document.getElementById('ball').value = "";
    document.getElementById('four').value = "";
    document.getElementById('six').value = "";
}
