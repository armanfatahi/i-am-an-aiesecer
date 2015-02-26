//Install
InstallFunction(server, 'member_body');
//function
function member_body(member) {
    server.member_body(member, show);
}
//return     
// sample
function show_member_set_home(content) {
    $$('committee_set_home').innerHTML = content;
}
