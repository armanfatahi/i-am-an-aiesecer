//
// As mentioned at http://en.wikipedia.org/wiki/XMLHttpRequest
//
if (!window.XMLHttpRequest) XMLHttpRequest = function () {
    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0") } catch (e) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0") } catch (e) { }
    try { return new ActiveXObject("Msxml2.XMLHTTP") } catch (e) { }
    try { return new ActiveXObject("Microsoft.XMLHTTP") } catch (e) { }
    throw new Error("Could not find an XMLHttpRequest alternative.")
};

//
// Makes an AJAX request to a local server function w/ optional arguments
//
// functionName: the name of the server's AJAX function to call
// opt_argv: an Array of arguments for the AJAX function
//
function Request(function_name, opt_argv) {

    if (!opt_argv)
        opt_argv = new Array();

    // Find if the last arg is a callback function; save it
    var callback = null;
    var len = opt_argv.length;
    if (len > 0 && typeof opt_argv[len - 1] == 'function') {
        callback = opt_argv[len - 1];
        opt_argv.length--;
    }
    var async = (callback != null);

    // Build an Array of parameters, w/ function_name being the first parameter
    var params = new Array(function_name);
    for (var i = 0; i < opt_argv.length; i++) {
        params.push(opt_argv[i]);
    }
    var body = JSON.stringify(params);

    // Create an XMLHttpRequest 'POST' request w/ an optional callback handler
    var req = new XMLHttpRequest();
    req.open('POST', '/rpc', async);

    req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    //req.setRequestHeader("Content-length", body.length);
    //req.setRequestHeader("Connection", "close");

    if (async) {
        req.onreadystatechange = function () {
            if (req.readyState == 4 && req.status == 200) {
                var response = null;
                try {
                    response = JSON.parse(req.responseText);
                } catch (e) {
                    response = req.responseText;
                }
                callback(response);
            }
        }
    }

    // Make the actual request
    req.send(body);
}

// Adds a stub function that will pass the arguments to the AJAX call
function InstallFunction(obj, functionName) {
    obj[functionName] = function () { Request(functionName, arguments); }
}

// Server object that will contain the callable methods
var server = {};
// Insert 'Add' as the name of a callable method
InstallFunction(server, 'verified');
InstallFunction(server, 'show_page');
InstallFunction(server, 'register_code_sent');
InstallFunction(server, 'register_code_verify');


// Handy "macro"
function $$(id) {
    return document.getElementById(id);
}
function loader() {
    return "<img src='static/loader.gif' width='50px'>";
}
function clean_up(id) {
    var myVar = setInterval(function () {
        element = $$(id);
        parent = element.parentNode;
        parent.removeChild(element);
        clearInterval(myVar);
    }, 3000);
}


// Client function that calls a server rpc and provides a callback
function verified(aiesec_email) {
    server.verified(aiesec_email, show);
}
function register_code_sent() {
    aiesec_email = $$('aiesec_email').value;
    var x = aiesec_email
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    var aiesec_verified = x.indexOf("@aiesec.net");
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= x.length || aiesec_verified < 1) {
        $$('error_message').innerHTML = "Please Enter a valid AIESEC ( @aiesec.net ) email."
        return false;
    }
    $$('error_message').innerHTML = "";
    server.register_code_sent(aiesec_email, show);
}

function register_code_verify() {
    code_entered = $$('code_entered').value;
    if (code_entered.length == 5) {
        $$('error_message').innerHTML = "";
        server.register_code_verify(code_entered, show);
    } else {
        $$('error_message').innerHTML = "Entered code is not valid.";
    }
}


// Callback for after a successful 
function show(content) {
    $$("bd").innerHTML = content;
}