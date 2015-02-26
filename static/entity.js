InstallFunction(server, 'entity_browser_body');
InstallFunction(server, 'entity_browser_entity_part');
InstallFunction(server, 'entity_browser_committee_part');
InstallFunction(server, 'entity_browser_committee_create_part');
InstallFunction(server, 'entity_welcome_body');



function entity_welcome_body() {
    server.entity_welcome_body(show);
}
function entity_browser_body(country) {
    show(loader());
    server.entity_browser_body(country, show_entity_browser_body);
}


function entity_browser_entity_part(country_name) {
    $$("entity_browser_entity_list").innerHTML = loader();
    $$('selector').style.display = 'none';
    $$('show_map').style.display = 'inherit';
    $$('entity_browser_entity_list').style.display = 'inherit';
    $$('entity_browser_committee_list').style.display = 'inherit';
    //var country = $$('country_select').options[$$('country_select').selectedIndex].value;
    server.entity_browser_entity_part(country_name, show_entity_browser_entity_part);
}

function entity_browser_entity_part_select() {
    $$("entity_browser_entity_list").innerHTML = loader();
    var country_name = $$('country_select').options[$$('country_select').selectedIndex].value;
    entity_browser_entity_part(country_name);
}

function show_entity_browser_entity_part(content) {
    $$("entity_browser_entity_list").innerHTML = content;
}
function entity_browser_committee_part(entity) {
    $$("entity_browser_committee_list").innerHTML = loader();
    server.entity_browser_committee_part(entity, show_entity_browser_committee_part);
}
function show_entity_browser_committee_part(content) {
    $$("entity_browser_committee_list").innerHTML = content;
}
function entity_browser_committee_create_part(entity) {
    var year = $$('entity_browser_committee_create_select').options[$$('entity_browser_committee_create_select').selectedIndex].value;
    server.entity_browser_committee_create_part(entity, year, show_entity_browser_committee_part);
}

function show_page(page) {
    server.show_page(page, show);
}

// Callback for after a successful 
function show_entity_browser_body(content) {
    $$("bd").innerHTML = content;
    simplemaps_worldmap();
    //var myVar = setInterval(function () { clearInterval(myVar); simplemaps_worldmap(); }, 500);
}