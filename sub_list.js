function new_li(str,code){
	var _li=document.createElement("li");
	var _a=document.createElement("a");
	var _str=document.createTextNode(str);
	_a.appendChild(_str);
	_a.addEventListener("click",function(){sub_list(code);});
	//_a.href="https://github.com/AkiyamaYummy";
	_li.appendChild(_a);
	return _li;
}
var List,StrList,is_open;
//例如：Arr=[-1,0,0];则“0”为根节点，
//“1”“2”的父节点为“0”
function list_init(Arr,str_arr){
	var size=Arr.length;
	List=new Array(size);
	StrList=new Array(size);
	is_open=new Array(size);
	for(var i=0;i<size;i++){
		List[i]=new Array(); is_open[i]=false;
	}
	for(var i=0;i<size;i++){
		StrList[i]=new_li(str_arr[i],i);
		if(0 <= Arr[i])List[Arr[i]].push(i);
	}
	/*
	for(var i=0;i<List.length;i++){
		document.getElementById("screen").innerHTML+=(i+' \'s son is:');
		for(var j=0;j<List[i].length;j++)
			document.getElementById("screen").innerHTML+=(' '+List[i][j]);
		document.getElementById("screen").innerHTML+='<br/>';
	}
	*/
}
function _init(pr,Arr,str_arr,sty){
	var new_ul=document.createElement('ul');
	new_ul.style=sty;
	pr.appendChild(new_ul);
	list_init(Arr,str_arr);
	for(var i=0;i<Arr.length;i++)
		if(Arr[i] == -1)new_ul.appendChild(StrList[i]);
}
function sub_list(code){
	var obj=StrList[code];
	if(is_open[code]){
		while(1<obj.childNodes.length)
			obj.removeChild(obj.childNodes[1]);
		is_open[code]=false;
	} else {
		var SubList=List[code];
		var new_ul=document.createElement('ul');
		obj.appendChild(new_ul);
		for(var i=0;i<SubList.length;i++)
		new_ul.appendChild(StrList[SubList[i]]);
		is_open[code]=true;
	}
}
