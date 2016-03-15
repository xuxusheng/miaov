


var roleFlag = true;	// roleFlag为角色标志位，为true时是ds，false时是th
var editRole, editBtn,inform;

window.onload=function(){
	editRole = document.getElementById("edit_role");
	editBtn = document.getElementById("edit_btn");
	inform = document.getElementById("inform");

	editRole.onclick = changRole;
	editBtn.onclick = enterText;
}

// 改变角色
function changRole() {
	if ( roleFlag ){
		editRole.style.backgroundImage = "url(images/role_th.jpg)";
		roleFlag = false;
	}else{
		editRole.style.backgroundImage = "url(images/role_ds.jpg";
		roleFlag = true;
		
	}
}

// 给inform中插入新的信息
function enterText() {
	// 创建新的节点
	var newInform = document.createElement("div");
	var newP = document.createElement("p");
	var newText = document.createTextNode("");
	var flag = roleFlag?"left_text":"right_text";	//根据标志位设置属性

	// 设置节点相应的属性
	// 插入文本时是nodeValue属性，不是value，要注意
	newText.nodeValue = document.getElementById("edit_text").value;
	newInform.setAttribute("class",flag);

	// 将节点插入到文档流中
	newP.appendChild(newText);
	newInform.appendChild(newP);
	inform.appendChild(newInform);

}