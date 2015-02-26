//Install
InstallFunction(server, 'committee_body');
InstallFunction(server, 'committee_set_home');
InstallFunction(server, 'committee_experience_part');
InstallFunction(server, 'committee_experience_join');
InstallFunction(server, 'committee_experience_leave');
InstallFunction(server, 'committee_experience_approve');
//function
function committee_body(committee) {
    server.committee_body(committee, show);
    var myVar = setInterval(function () { server.committee_experience_part(committee, show_committee_experience_part); clearInterval(myVar); }, 50);

}
function committee_set_home(committee) {
    server.committee_set_home(committee, show_committee_set_home);
}
function committee_experience_part(committee) {
    server.committee_experience_part(committee, show_committee_experience_part);
}
function committee_experience_join(committee) {
    var role = $$('committee_experience_join_select').options[$$('committee_experience_join_select').selectedIndex].value;
    var department = $$('committee_experience_join_department').value;
    show_committee_experience_part(loader());
    server.committee_experience_join(committee, role, department, show_committee_experience_part);
    publish_committee_join_request(committee);
}
function committee_experience_leave(committee, message) {
    if (confirm(message) == true) {
        show_committee_experience_part(loader());
        server.committee_experience_leave(committee, show_committee_experience_part);
    }
}
function committee_experience_approve(experience, result) {
    server.committee_experience_approve(experience, result, show_committee_experience_approval);
}
//return     

function simplemaps_worldmap_click(id) {
    alert(simplemaps_worldmap_mapdata_state_specific[id].name);
}

function show_committee_experience_approval(content) {
    $$(content).innerHTML = "<h5>Thanks... Noted!</h5>";
    clean_up(content);
}

function show_committee_set_home(content) {
    $$('committee_set_home').innerHTML = content;
}
function show_committee_experience_part(content) {
    $$('committee_experience_part').innerHTML = content;
}