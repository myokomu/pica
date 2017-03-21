var canvas = {
  rows: 10,
  columns: 10,
  sqWidth: 50,
  sqHeight: 50,
  tileColor1: "#f8f8f8",
  tileColor2: "#d0d0d0"
}

//build rows and columns
var $canvas = $('.canvas')
var columnHtml = "<li></li>"
var rowContentHtml = columnHtml.repeat(canvas.columns)
var rowHtml = "<div class=row>" + rowContentHtml + "</div>"

//draw canvas
for (var i = 0; i < canvas.rows; i++) {
  $canvas.append(rowHtml)
}

//build css
var tileBackgroundCss =
  backgroundColorCss(".row:nth-child(odd) li:nth-child(odd)", canvas.tileColor1) +
  backgroundColorCss(".row:nth-child(odd) li:nth-child(even)", canvas.tileColor2) +
  backgroundColorCss(".row:nth-child(even) li:nth-child(odd)", canvas.tileColor2) +
  backgroundColorCss(".row:nth-child(even) li:nth-child(even)", canvas.tileColor1)

///append style tag
$('style').append(tileBackgroundCss)

//set and unset colors
$('li').click(function () {
  $(this).css("background", $canvas.data('currentColor'))
})

$('li').dblclick(function () {
  $(this).removeAttr('style')
})

//add color pallette
$('.color-pallette button').click(function () {
  var newColor = formatColorString($(this).siblings('input').val()) 

  $colorTester = $(".control-panel .color-pallette .color-tester")
  $colorTester.removeAttr("style").css("background", newColor)

  $('.color-pallette .colors').append("<li class=color style=\"background:" + newColor + ";\">" + newColor + "</li>")
})

//apply selected color to pointer
$('.color-pallette .color').live('click', function () {
  var colorCode = this.textContent
  $canvas.data('currentColor', colorCode)
})

function backgroundColorCss (selector, color) {
  return selector + "{background:" + color + ";}"
}

function formatColorString (originalString) {
  if (isNaN(Number(originalString))) {
    return originalString
  } else {
    return "#" + originalString
  }
}

function replicate () {
  $allLis = $('.canvas li')  
  for (var i=0; i < $allLis.length; i++) {
    var li = $allLis[i]
    li.parentNode.insertBefore(li.cloneNode(), li)
  }

  $allRows = $('.canvas .row')
  for (var i=0; i < $allRows.length; i++) {
    var row = $allRows[i]
    var columns = row.childNodes
    var clonedNode = row.cloneNode()
    for (var j=0; j < columns.length; j++) {
      clonedNode.appendChild(columns[j].cloneNode())
    }

    row.parentNode.insertBefore(clonedNode, row)
  }
}
