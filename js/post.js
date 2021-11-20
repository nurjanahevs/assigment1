$(document).ready(function () {
  $("#form-com").on("submit", function (event) {
    event.preventDefault();
    
    let nameKomentator = $('input#name').val();
    let textKomentator = $('input#comment').val();

    console.log(nameKomentator);
    console.log(textKomentator);

  $('.wrapper-list-comment').append(`
         <div class="list-comment">
          <div id="comment-name"><strong>${nameKomentator}</strong></div>
          <div id="comment-text">${textKomentator}</div>
         </div>
  `);
  });
});



