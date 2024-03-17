var add_btn = document.querySelector(".submit");
var tbody = document.querySelector(".tbody");



    add_btn.onclick = function () {


        // 创建tr的dom对象
        var tr = document.createElement("tr"); // <tr></tr>
        var inps = document.querySelectorAll("#name,#age,#dep");
        // console.log(inp);

        for(var i=0;i<inps.length;i++){
            var td = document.createElement("td");  // <td></td>
            td.innerHTML = inps[i].value;
            console.log(td);
            tr.appendChild(td);

        }

        // 添加删除按钮
        td = create_td("删除","del_btn(this)");
        tr.appendChild(td);
        // 添加编辑按钮
        td = create_td("编辑","edit_btn(this)");
        tr.appendChild(td);

        // tbody添加 tr标签
        console.log(tr);
        tbody.appendChild(tr);



    };

    // 创建td标签
    function create_td(text,attr_val) {

        td = document.createElement("td");
        var button = document.createElement("button");
        button.innerHTML = text;  //
        button.setAttribute("onclick",attr_val);
        td.appendChild(button);
        return td;
    }


   //删除事件

    function del_btn(self){
      console.log(self);
      var del_tr = self.parentElement.parentElement;
      tbody.removeChild(del_tr);

    }

    // 编辑事件
    function edit_btn(self) {

        // 文本处理
        self.innerHTML = "保存";
        self.setAttribute("onclick","keep_btn(this)");

        var children_td = self.parentElement.parentElement.children;

        for (var i= 0;i<children_td.length-2;i++){

            var input = document.createElement("input");
            input.setAttribute("type","text");
            input.value = children_td[i].innerHTML;
            children_td[i].innerHTML = "";
            children_td[i].appendChild(input);

        }
    }

    // 保存事件
    function keep_btn(self) {
     var children_td = self.parentElement.parentElement.children;

     for (var i= 0;i<children_td.length-2;i++){
         var val =  children_td[i].firstElementChild.value;
         children_td[i].innerHTML = val;
     }
     // 文本赋值为编辑
     self.innerHTML = "编辑";
     self.setAttribute("onclick","edit_btn(this)");

    }
