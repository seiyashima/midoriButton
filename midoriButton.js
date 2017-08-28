//
// midoriButton
//   :using Skype-url.js for convenience touch with midori
//

<script type="text/javascript">
  // call your GIRL/BOY.FRIEND
  function midoriButton(){
     Skype.ui({
       name: "call",
       participants: ["<<THE NAME OF YOUR GIRL/BOY.FRIEND>>"],
       video: true
       imageColor: "skype"
     });
  };
  midoriButton();
</script>

<script type="text/javascript" src="http://www.skypeassets.com/i/scom/js/skype-uri.js"></script>

/*
<div id="SkypeToMidori">
  <script type="text/javascript">
    Skype.ui({
      name: "call",
      element : "SkypeToMidori",
      participants: ["<<THE NAME OF YOUR GIRL/BOY.FRIEND>>"],
      video: true
      imageColor: "skype"
    });
  </script>
</div>
*/
