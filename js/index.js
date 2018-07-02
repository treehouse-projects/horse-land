$.getJSON('./data.json',
   function(data){
   $.each(data, function(i, f) {
    $("ul").append('<li class="card"><img src="' + f.thumbnailUrl + '" alt="' + f.title + '"><p>' + f.title + '</p></div>');
    $.cache = f.id; 
   });
});
