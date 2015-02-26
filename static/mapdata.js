var simplemaps_worldmap_mapdata = {

    main_settings: {
        //General settings
        width: '800',
        background_color: '#F0ECCD',
        background_transparent: 'yes',
        border_color: '#FFFFFF',
        zoom: 'yes',
        js_hooks: 'yes',
        pop_ups: 'detect', //on_click, on_hover, or detect

        //Country defaults
        state_description: ' ',
        state_color: 'gray',
        state_hover_color: 'gray',
        state_url: '',
        all_states_inactive: 'no',

        //Location defaults
        location_description: ' ',
        location_color: '#FF0067',
        location_opacity: 1,
        location_url: '',
        location_size: 35,
        location_type: 'circle', //or circle
        all_locations_inactive: 'no',

        //Advanced settings - safe to ignore these
        url_new_tab: 'no',
        initial_zoom: -1,  //-1 is zoomed out, 0 is for the first continent etc	
        initial_zoom_solo: 'no',
        auto_load: 'no',    // simplemaps_worldmap()
        hide_labels: 'no'  //Note:  You must omit the comma after the last property in an object to prevent errors in internet explorer.
    },

    state_specific: {
        AF: {
            name: 'AFGHANISTAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Afghanistan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('AFGHANISTAN')"
        },
        AL: {
            name: 'ALBANIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Albania-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ALBANIA')"
        },
        DZ: {
            name: 'ALGERIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Algeria-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ALGERIA')"
        },
        AO: {
            name: 'ANGOLA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Angola-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ANGOLA')"
        },
        AR: {
            name: 'ARGENTINA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Argentina-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ARGENTINA')"
        },
        AM: {
            name: 'ARMENIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Armenia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ARMENIA')"
        },
        AU: {
            name: 'AUSTRALIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Australia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('AUSTRALIA')"
        },
        AT: {
            name: 'AUSTRIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Austria-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('AUSTRIA')"
        },
        AZ: {
            name: 'AZERBAIJAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Azerbaijan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('AZERBAIJAN')"
        },
        BH: {
            name: 'BAHRAIN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Bahrain-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BAHRAIN')"
        },
        BE: {
            name: 'BELGIUM',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Belgium-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BELGIUM')"
        },
        BJ: {
            name: 'BENIN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Benin-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BENIN')"
        },
        BO: {
            name: 'BOLIVIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Bolivia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BOLIVIA')"
        },
        BA: {
            name: 'BOSNIAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Bosnian-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BOSNIAN')"
        },
        BW: {
            name: 'BOTSWANA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Botswana-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BOTSWANA')"
        },
        BR: {
            name: 'BRAZIL',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Brazil-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BRAZIL')"
        },
        BG: {
            name: 'BULGARIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Bulgaria-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BULGARIA')"
        },
        BF: {
            name: 'BURKINA FASO',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Burkina-Faso-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('BURKINA FASO')"
        },
        KH: {
            name: 'CAMBODIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Cambodia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CAMBODIA')"
        },
        CM: {
            name: 'CAMEROON',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Cameroon-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CAMEROON')"
        },
        CA: {
            name: 'CANADA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Canada-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CANADA')"
        },
        CL: {
            name: 'CHILE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Chile-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CHILE')"
        },
        CN: {
            name: 'CHINA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/China-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CHINA')"
        },
        CO: {
            name: 'COLOMBIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Colombia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('COLOMBIA')"
        },
        CR: {
            name: 'COSTA RICA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Costa-Rica-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('COSTA RICA')"
        },
        HR: {
            name: 'CROATIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Croatia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CROATIA')"
        },
        CZ: {
            name: 'CZECH REPUBLIC',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Czech-Republic-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('CZECH REPUBLIC')"
        },
        DK: {
            name: 'DENMARK',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Denmark-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('DENMARK')"
        },
        DO: {
            name: 'DOMINICAN REPUBLIC',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Dominican-Republic-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('DOMINICAN REPUBLIC')"
        },
        EC: {
            name: 'ECUADOR',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Ecuador-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ECUADOR')"
        },
        EG: {
            name: 'EGYPT',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Egypt-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('EGYPT')"
        },
        SV: {
            name: 'EL SALVADOR',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/El-Salvador-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('EL SALVADOR')"
        },
        EE: {
            name: 'ESTONIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Estonia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ESTONIA')"
        },
        ET: {
            name: 'ETHIOPIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Ethiopia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ETHIOPIA')"
        },
        FI: {
            name: 'FINLAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Finland-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('FINLAND')"
        },
        FR: {
            name: 'FRANCE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/France-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('FRANCE')"
        },
        GA: {
            name: 'GABON',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Gabon-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('GABON')"
        },
        GE: {
            name: 'GEORGIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Georgia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('GEORGIA')"
        },
        DE: {
            name: 'GERMANY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Germany-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('GERMANY')"
        },
        GH: {
            name: 'GHANA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Ghana-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('GHANA')"
        },
        GR: {
            name: 'GREECE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Greece-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('GREECE')"
        },
        GT: {
            name: 'GUATEMALA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Guatemala-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('GUATEMALA')"
        },
        HK: {
            name: 'HONG KONG',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Hong-Kong-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('HONG KONG')"
        },
        HU: {
            name: 'HUNGARY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Hungary-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('HUNGARY')"
        },
        IS: {
            name: 'ICELAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Iceland-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ICELAND')"
        },
        IN: {
            name: 'INDIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/India-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('INDIA')"
        },
        ID: {
            name: 'INDONESIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Indonesia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('INDONESIA')"
        },
        IR: {
            name: 'IRAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Iran-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('IRAN')"
        },
        IE: {
            name: 'IRELAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Ireland-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('IRELAND')"
        },
        IT: {
            name: 'ITALY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Italy-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ITALY')"
        },
        CI: {
            name: 'IVORY COAST',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Ivory-Coast-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('IVORY COAST')"
        },
        JP: {
            name: 'JAPAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Japan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('JAPAN')"
        },
        JO: {
            name: 'JORDAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Jordan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('JORDAN')"
        },
        KZ: {
            name: 'KAZAKHSTAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Kazakhstan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('KAZAKHSTAN')"
        },
        KE: {
            name: 'KENYA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Kenya-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('KENYA')"
        },
        KR: {
            name: 'KOREA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Korea-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('KOREA')"
        },
        KG: {
            name: 'KYRGYZSTAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Kyrgyzstan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('KYRGYZSTAN')"
        },
        LV: {
            name: 'LATVIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Latvia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('LATVIA')"
        },
        LB: {
            name: 'LEBANON',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Lebanon-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('LEBANON')"
        },
        LR: {
            name: 'LIBERIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Liberia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('LIBERIA')"
        },
        LT: {
            name: 'LITHUANIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Lithuania-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('LITHUANIA')"
        },
        LU: {
            name: 'LUXEMBOURG',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Luxembourg-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('LUXEMBOURG')"
        },
        MY: {
            name: 'MALAYSIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Malaysia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MALAYSIA')"
        },
        MT: {
            name: 'MALTA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Malta-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MALTA')"
        },
        MU: {
            name: 'MAURITIUS',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Mauritius-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MAURITIUS')"
        },
        MX: {
            name: 'MEXICO',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Mexico-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MEXICO')"
        },
        MD: {
            name: 'MOLDOVA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Moldova-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MOLDOVA')"
        },
        MN: {
            name: 'MONGOLIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Mongolia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MONGOLIA')"
        },
        MA: {
            name: 'MOROCCO',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Morocco-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MOROCCO')"
        },
        MZ: {
            name: 'MOZAMBIQUE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Mozambique-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('MOZAMBIQUE')"
        },
        NL: {
            name: 'NETHERLANDS',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Netherlands-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('NETHERLANDS')"
        },
        NZ: {
            name: 'NEW ZEALAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/New-Zealand-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('NEW ZEALAND')"
        },
        NI: {
            name: 'NICARAGUA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Nicaragua-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('NICARAGUA')"
        },
        NG: {
            name: 'NIGERIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Nigeria-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('NIGERIA')"
        },
        NO: {
            name: 'NORWAY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Norway-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('NORWAY')"
        },
        OM: {
            name: 'OMAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Oman-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('OMAN')"
        },
        PK: {
            name: 'PAKISTAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Pakistan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PAKISTAN')"
        },
        PA: {
            name: 'PANAMA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Panama-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PANAMA')"
        },
        PY: {
            name: 'PARAGUAY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Paraguay-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PARAGUAY')"
        },
        PE: {
            name: 'PERU',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Peru-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PERU')"
        },
        PH: {
            name: 'PHILIPPINES',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Philippines-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PHILIPPINES')"
        },
        PL: {
            name: 'POLAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Poland-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('POLAND')"
        },
        PT: {
            name: 'PORTUGAL',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Portugal-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PORTUGAL')"
        },
        PR: {
            name: 'PUERTO RICO',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Puerto-Rico-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('PUERTO RICO')"
        },
        QA: {
            name: 'QATAR',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Qatar-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('QATAR')"
        },
        MK: {
            name: 'REPUBLIC OF MACEDONIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Republic-Of-Macedonia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('REPUBLIC OF MACEDONIA')"
        },
        RO: {
            name: 'ROMANIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Romania-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ROMANIA')"
        },
        RU: {
            name: 'RUSSIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Russia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('RUSSIA')"
        },
        RW: {
            name: 'RWANDA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Rwanda-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('RWANDA')"
        },
        SN: {
            name: 'SENEGAL',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Senegal-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SENEGAL')"
        },
        RS: {
            name: 'SERBIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Serbia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SERBIA')"
        },
        SL: {
            name: 'SIERRA LEONE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Sierra-Leone-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SIERRA LEONE')"
        },
        SG: {
            name: 'SINGAPORE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Singapore-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SINGAPORE')"
        },
        SK: {
            name: 'SLOVAKIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Slovakia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SLOVAKIA')"
        },
        SI: {
            name: 'SLOVENIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Slovenia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SLOVENIA')"
        },
        ZA: {
            name: 'SOUTH AFRICA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/South-Africa-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SOUTH AFRICA')"
        },
        ES: {
            name: 'SPAIN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Spain-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SPAIN')"
        },
        LK: {
            name: 'SRI LANKA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Sri-Lanka-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SRI LANKA')"
        },
        SE: {
            name: 'SWEDEN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Sweden-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SWEDEN')"
        },
        CH: {
            name: 'SWITZERLAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Switzerland-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('SWITZERLAND')"
        },
        TW: {
            name: 'TAIWAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Taiwan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('TAIWAN')"
        },
        TJ: {
            name: 'TAJIKISTAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Tajikistan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('TAJIKISTAN')"
        },
        TZ: {
            name: 'TANZANIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Tanzania-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('TANZANIA')"
        },
        TH: {
            name: 'THAILAND',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Thailand-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('THAILAND')"
        },
        TG: {
            name: 'TOGO',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Togo-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('TOGO')"
        },
        TN: {
            name: 'TUNISIA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Tunisia-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('TUNISIA')"
        },
        TR: {
            name: 'TURKEY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Turkey-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('TURKEY')"
        },
        UG: {
            name: 'UGANDA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Uganda-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('UGANDA')"
        },
        UA: {
            name: 'UKRAINE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Ukraine-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('UKRAINE')"
        },
        AE: {
            name: 'UNITED ARAB EMIRATES',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/United-Arab-Emirates-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('UNITED ARAB EMIRATES')"
        },
        GB: {
            name: 'UNITED KINGDOM',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/United-Kingdom-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('UNITED KINGDOM')"
        },
        US: {
            name: 'UNITED STATES',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/United-States-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('UNITED STATES')"
        },
        UY: {
            name: 'URUGUAY',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Uruguay-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('URUGUAY')"
        },
        UZ: {
            name: 'UZBEKISTAN',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Uzbekistan-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('UZBEKISTAN')"
        },
        VE: {
            name: 'VENEZUELA',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Venezuela-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('VENEZUELA')"
        },
        VN: {
            name: 'VIETNAM',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Vietnam-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('VIETNAM')"
        },
        ZW: {
            name: 'ZIMBABWE',
            description: '<img width="104" src="http://keep-me.appspot.com/flags/Zimbabwe-Flag-128.png" style="float:left; margin-right: 10px;" />',
            color: 'green',
            hover_color: 'red',
            inactive: 'no',
            url: "javascript:entity_browser_entity_part('ZIMBABWE')"
        }
    }

} //end of simplemaps_worldmap_mapdata




