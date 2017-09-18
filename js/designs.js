// Select color and size input
const inputColor = $('#colorPicker');
const inputHeight = $('#input_height');
const inputWidth = $('#input_width');

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function() {
  makeGrid();
  event.preventDefault();
});

// Creates the grid with the user input values, inputHeight and inputWidth
function makeGrid() {
  const canvas = $('#pixel_canvas');

  // If a grid has already been created, clear the grid before making a new one
  while(canvas.children().length > 0) {
    canvas.empty();
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
  
}
