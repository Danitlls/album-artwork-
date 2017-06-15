// BUSINESS LOGIC
 function Albums(name, artist, year, cover){
   this.albumName = name;
   this.albumArtist = artist;
   this.albumYear = year;
   this.albumCover = cover
 }

 var album1 = new Albums('Elephant', 'Tame Impala', '2012', '..img/impala.jpg');
 var album2 = new Albums('King of the Delta Blues Singers', 'Robert Johnson', '1961', '../img/robert.jpg');
 var album3 = new Albums('Kala', 'M.I.A.', '2007', '../img/mia.jpg');
 var album4 = new Albums('Bitches Brew', 'Miles Davis', '1970', '..img/milesdavis.jpg');
 var album5 = new Albums('Wish You Were Here', 'Pink Floyd', '1975', '../img/pinkfloyd.jpg');
 var album6 = new Albums('LP1', 'Twigs', '2014', '../img/twigs.jpg');
  var album7 = new Albums('The Velvet Underground & Nico', 'The Velvet Underground & Nico', '1967', '../img/velvet.jpg');
  var album8 = new Albums('Its Blitz!', 'The Yeah Yeah Yeahs', '2009', '../img/yeahs.jpg');


  function resetFields() {
    $("input#user").val("");
    $("textarea#comment").val("");
  }

// FRONT END LOGIC
  $(document).ready(function(){
    var angle = 0;
    function galleryspin(sign) {
      spinner = document.querySelector("#spinner");
      if (!sign) {
        angle = angle + 45;
      } else {
         angle = angle - 45;
      }
      spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
    };

    // album info fadein/fadeout
    $("#impala").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album1.albumName);
     $("#album-info-artist").text(album1.albumArtist);
     $("#album-info-year").text(album1.albumYear);
    }
    );

    $("#robert").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album2.albumName);
     $("#album-info-artist").text(album2.albumArtist);
     $("#album-info-year").text(album2.albumYear);
    }
    );

    $("#mia").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album3.albumName);
     $("#album-info-artist").text(album3.albumArtist);
     $("#album-info-year").text(album3.albumYear);
    }
    );

    $("#miles").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album4.albumName);
     $("#album-info-artist").text(album4.albumArtist);
     $("#album-info-year").text(album4.albumYear);
    }
    );

    $("#pink").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album5.albumName);
     $("#album-info-artist").text(album5.albumArtist);
     $("#album-info-year").text(album5.albumYear);
    }
    );

    $("#twigs").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album6.albumName);
     $("#album-info-artist").text(album6.albumArtist);
     $("#album-info-year").text(album6.albumYear);
    }
    );

    $("#velvet").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album7.albumName);
     $("#album-info-artist").text(album7.albumArtist);
     $("#album-info-year").text(album7.albumYear);
    }
    );

    $("#yeahs").hover(
      function () {
     $(".album-info").fadeIn(1000);
     $("#album-info-album").text(album8.albumName);
     $("#album-info-artist").text(album8.albumArtist);
     $("#album-info-year").text(album8.albumYear);
    }
    );

    $(".close-button").click( function() {
      $(".album-info").fadeOut();
      $(".rating").removeClass("vote-cast");
    });


    // stars
    $(function () {
    $('li').on('click', function() {
      var selectedCssClass = 'selected';
      var $this = $(this);
      $this.siblings('.' + selectedCssClass).removeClass(selectedCssClass);
      $this
        .addClass(selectedCssClass)
        .parent().addClass('vote-cast');
    });
  }
);

  // review form
  $("form#review-form").submit(function(event){
    event.preventDefault();
    var userComment = $("textarea#comment").val();
    var userName = $("input#user").val();
    $("#list-results").append("<li><span>" + userName + " thinks..." + "<br>'" + userComment + "'</span></li>");

     resetFields();


    });
});
