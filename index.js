var code = "primeiracompra"
var spanElement = document.getElementById("code_");
spanElement.innerText = code.toLocaleUpperCase();

var req_code = document.getElementById("code_")
req_code.addEventListener("click", copiarCode)
var tooltip = document.getElementById("tooltip")
function copiarCode() {
    var codigo = req_code.innerText
    navigator.clipboard.writeText(codigo)
        .then(function () {
            console.log(codigo)
            tooltip.style.visibility = "visible"
            setTimeout(function () {
                tooltip.style.visibility = "hidden"
            }, 3500);
        })
        .catch(function (error) {
            console.error("Falha ao copiar o cupom: " + error);
        });
}

if (!getCookie("popUpShown")) {
    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("popUp").style.display = "flex"
    });
    document.getElementById("fecharPopUp").addEventListener("click", function () {
        document.getElementById("popUp").style.display = "none"
        setCookie("popUpShown", true, 1)
    });
}
function getCookie(cookie_name) {
    var name = cookie_name + "="
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length)
        }
    }
    return "";
}
function setCookie(cookie_name, cookie_value, ex_mins) {
    var date = new Date();
    date.setTime(date.getTime() + (ex_mins * 60 * 1000))
    var expires = "expires=" + date
    document.cookie = cookie_name + "=" + cookie_value + "; " + expires + "; SameSite=Strict"
}