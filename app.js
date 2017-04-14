
var add = function(song, artist){
  $.post('https://maker.ifttt.com/trigger/new/with/key/dzqRhv54YmB7GfLboLVfLk', {
  value1: song,
  value2: artist
 });
}

var includePlaylist = function(){
  $.ajax({
      url: 'https://api.spotify.com/v1/users/22h4ejh6shlrf7rzdts44br2a/playlists/18tU8AL2EtspbYkdnQ7VFG',
      method: "GET"
    })
    .done(render);
}

var displayInfo = function(query){
  console.log(query);
  $.ajax({
      url: 'https://api.spotify.com/v1/search?q=' + query + '&type=track',
      method: "GET"
    })
    .done(render);
}

var render = function(response){
  console.log(response)
   var info = $('.info')
    info.empty();

    var h1 = $('<h1>');
    h1.text(response.tracks.items[0].name)
    info.append(h1)

var h2 = $('<h2>');
    h2.text(response.tracks.items[0].artists[0].name)
    info.append(h2)
    
    /*var image = $('<img');
    image.attr('src', response.tracks.items[0].name)*/

    /*var music = $('#music')
    music.attr('src', 'https://p.scdn.co/mp3-preview/14bdcdfb15edba50c56d07af3880aceb8bf831bc?cid=null')
info.append(music);*/
//$('#song').attr("src", function(){
  //;
//})
//info.append(music)

//$('.img').append(response.images[0].url)
}

//spotify:user:22h4ejh6shlrf7rzdts44br2a:playlist:18tU8AL2EtspbYkdnQ7VFG
$(document).ready(function(){
  //var name = prompt("What is your name?");
  $('#title').html(name + "Irina's Playlist");
  var playlist = $('ul');//finds the <ul> in the html

  var songs = []
  /*for(var i=0; i<songs.length; i++) {
  	playlist.append('<li>'+songs[i]+'</li>');
  }*/

/*  playlist.append('<li> Undertow </li>');
  playlist.append('<li> Stacks </li>');
  playlist.append('<li> Patience </li>');*/

/*  $('li:contains("Undertow")').addClass('now-playing');
  $('li').addClass('played');*/

  var songs = [];

  $(songs).each(function(){
  	playlist.append('<li>' + this + '</li>');
  })

  var now = [];
  //now.addClass('now-playing');
  $('li:contains("Ophelia")').addClass('now-playing');


  /*$('li').click(function(){//has limitations for dynamic websites
  	$(this).toggleClass('now-playing');
  })*/

  $('ul').on('click','li',function(element){
    $('.now-playing').addClass('played');
  	$('.now-playing').removeClass('now-playing');
  	$(element.target).addClass('now-playing');
  })

  $('.go').click(function(){
  	var valueS = $('.song').val();
    var valueA = $('.artist').val();
  	var s = $('<li>').text(valueS);
  	$('ul').append(s);
    add(valueS,valueA);
    displayInfo(valueS);
  })

})