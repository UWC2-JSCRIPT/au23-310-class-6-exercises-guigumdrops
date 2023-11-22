/**
 * Toggles "done" class on <li> element
 */
$(document).ready(function() {
$('li').click(function() {
  $(this).toggleClass('done');
});
});

/**
 * Delete element when delete link clicked
 */
$(document).on('click', '.delete', function() {
  $(this).closest('li').remove();
});

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  e.preventDefault();
  const input = $(this).parent().find('input').eq(0);
  const text = $('input').val();

  // rest here...
};

// add listener for add
