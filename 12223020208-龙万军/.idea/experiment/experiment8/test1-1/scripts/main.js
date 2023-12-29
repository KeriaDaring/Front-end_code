function ajax() {
    let xmlHttpReq = null;

    if (window.ActiveXObject) { //这是什么
        xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttpReq = new XMLHttpRequest();
    }

    if (xmlHttpReq != null) {
        xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
        xmlHttpReq.onreadystatechange = doResult; //回调函数？
        xmlHttpReq.send(null);;
    }

    function doResult() {
        if (xmlHttpReq.readyState === 4) {
            if (xmlHttpReq.status === 200) {
                document.getElementById("resText").innerHTML = xmlHttpReq.responseText;
            }
        }
    }
}