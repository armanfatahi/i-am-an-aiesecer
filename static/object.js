// Facebook Open Graph Handlers

function publish_committee_join_request(committee) {
    FB.api(
      'me/iamanaiesecer:send_join_request_to',
      'post',
      {
          committee: "https://apps.facebook.com/iamanaiesecer/object/committee/" + committee
      },
      function (response) {
          //$$('bd').innerHTML = response;
      }
    ); 
  
  }


  