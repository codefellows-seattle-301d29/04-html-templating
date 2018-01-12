'use strict';

let articleView = {};

// DONE: Where possible, refactor methods into arrow functions, including the document.ready() method at the bottom.

// COMMENT: How do arrow functions affect the context of "this"? How did you determine if a function could be refactored?
// Lexical Scoping just means that it uses thisfrom the code that contains the Arrow Function. So in other words if the value of this changes than you shouldn't use the lexical arrow function.

articleView.populateFilters =() => {
  $('article').each(function() {
    if (!$(this).hasClass('template')) {
      let val = $(this).find('address a').text();
      let optionTag = `<option value="${val}">${val}</option>`;

      if ($(`#author-filter option[value="${val}"]`).length === 0) {
        $('#author-filter').append(optionTag);
      }

      val = $(this).attr('data-category');
      optionTag = `<option value="${val}">${val}</option>`;
      if ($(`#category-filter option[value="${val}"]`).length === 0) {
        $('#category-filter').append(optionTag);
      }
    }
  });
};

// articleView.populateFilters = function() {
//   console.log('populatiung');
//   $('article').each(function() {
//     if (!$(this).hasClass('template')) {
//       let val = $(this).find('address a').text();
//       let optionTag = `<option value="${val}">${val}</option>`;

//       if ($(`#author-filter option[value="${val}"]`).length === 0) {
//         $('#author-filter').append(optionTag);
//       }

//       val = $(this).attr('data-category');
//       optionTag = `<option value="${val}">${val}</option>`;
//       if ($(`#category-filter option[value="${val}"]`).length === 0) {
//         $('#category-filter').append(optionTag);
//       }
//     }
//   });
// };

articleView.handleAuthorFilter = () => {
  $('#author-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-author="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#category-filter').val('');
  });
};

// articleView.handleAuthorFilter = function() {
//   $('#author-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-author="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#category-filter').val('');
//   });
// };

articleView.handleCategoryFilter = () => {
  $('#category-filter').on('change', function() {
    if ($(this).val()) {
      $('article').hide();
      $(`article[data-category="${$(this).val()}"]`).fadeIn();
    } else {
      $('article').fadeIn();
      $('article.template').hide();
    }
    $('#author-filter').val('');
  });
};

// articleView.handleCategoryFilter = function() {
//   $('#category-filter').on('change', function() {
//     if ($(this).val()) {
//       $('article').hide();
//       $(`article[data-category="${$(this).val()}"]`).fadeIn();
//     } else {
//       $('article').fadeIn();
//       $('article.template').hide();
//     }
//     $('#author-filter').val('');
//   });
// };

articleView.handleMainNav = () => {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });

  $('.main-nav .tab:first').click();
};

// articleView.handleMainNav = function() {
//   $('.main-nav').on('click', '.tab', function() {
//     $('.tab-content').hide();
//     $(`#${$(this).data('content')}`).fadeIn();
//   });

//   $('.main-nav .tab:first').click();
// };

articleView.setTeasers = () => {
  $('.article-body *:nth-of-type(n+2)').hide();
  $('article').on('click', 'a.read-on', function(e) {
    e.preventDefault();
    if ($(this).text() === 'Read on →') {
      $(this).parent().find('*').fadeIn();
      $(this).html('Show Less &larr;');
    } else {
      $('body').animate({
        scrollTop: ($(this).parent().offset().top)
      },200);
      $(this).html('Read on &rarr;');
      $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
    }
  });
};

// articleView.setTeasers = function() {
//   $('.article-body *:nth-of-type(n+2)').hide();
//   $('article').on('click', 'a.read-on', function(e) {
//     e.preventDefault();
//     if ($(this).text() === 'Read on →') {
//       $(this).parent().find('*').fadeIn();
//       $(this).html('Show Less &larr;');
//     } else {
//       $('body').animate({
//         scrollTop: ($(this).parent().offset().top)
//       },200);
//       $(this).html('Read on &rarr;');
//       $(this).parent().find('.article-body *:nth-of-type(n+2)').hide();
//     }
//   });
// };

$(() => {
  // jQuery document ready
  articleView.populateFilters();
  articleView.handleCategoryFilter();
  articleView.handleAuthorFilter();
  articleView.handleMainNav();
  articleView.setTeasers();
})
// $(document).ready(function() {
//   articleView.populateFilters();
//   articleView.handleCategoryFilter();
//   articleView.handleAuthorFilter();
//   articleView.handleMainNav();
//   articleView.setTeasers();
// })

// Can you please go over factoring to ES6 and this
