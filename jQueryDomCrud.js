// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>
$(document).ready(function() {
    $('<a id="cta">Buy Now!</a>').insertAfter('p:last');
  });
  
// Access (read) the data-color attribute of the <img>,
// log to the console
const imageEl = $('img');
const dataColor = imageEl.data('color');
console.log(dataColor);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"
$('li').eq(2).addClass('highlight');

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")
$('p:last-child:contains("Available for purchase now")').remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$('#cta').click(function() {
    $(this).remove(); 
    $(this).parent().append('<span>Added to cart</span>'); 
  });
  