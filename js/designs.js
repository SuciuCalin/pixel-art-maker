// Select color and size input
const inputColor = $('#colorPicker');
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

// When size is submitted by the user, call the makeGrid() function
$('#sizePicker').submit(function(event) {
  makeGrid();
  event.preventDefault();
});

// Creates the grid with the user input values, inputHeight and inputWidth
function makeGrid() {
  const canvas = $('#pixel_canvas');
  const clearCanvasBtn = '<button id="clear_canvas">Clear</button>';

  /*
    If a grid already exists, clear it, and remove the "clear_canvas"
    button, before creating a new canvas and button
  */
  while(canvas.children().length > 0) {
    canvas.empty();
    $('#clear_canvas').remove();
  }

  // Create the grid based on the user input values
  for(let r = 0; r < inputHeight.val(); r++) {
    const tr = $('<tr>');
    const cell = '<td></td>';
    for (let c = 0; c < inputWidth.val(); c++)
        $(cell).appendTo(tr);
        tr.appendTo(canvas);
  }

  // Change the <td> background color on click, with the inputColor
  $('td').click(function() {
    $(this).css('background', inputColor.val());
  });

  // Change the <td> backgroun color to white on right click
  $('td').contextmenu(function() {
    event.preventDefault();
    $(this).css('background', 'white');
  });

  // Adds the clear_canvas button at the end of the canvas
  $(clearCanvasBtn).insertAfter(canvas);

  // Changes the backgroun color for all <td> elementss to white
  $('#clear_canvas').click(function(event) {
    let tds = $('td');
    tds.css('background', 'white');
  });
}
