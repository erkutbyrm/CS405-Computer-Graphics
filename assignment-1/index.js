data = [81, 410, 544, 568, 460, 398, 373, 265, 241, 201, 176, 145, 111, 173]

svgElem = document.getElementById("myViewBox")

startX = 80
incrementX = 75
columnWidth = 40
maxColumnHeight = 600
columnColor = "blue"
for(i=0; i<14; i++){
    const rect = createRect(startX+incrementX*i, (maxColumnHeight-data[i])+100, columnWidth, data[i], columnColor);
    svgElem.appendChild(rect)
}

function createRect(x, y, width, height, color) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x)
    rect.setAttribute("y", y)
    rect.setAttribute("width", width)
    rect.setAttribute("height", height)
    rect.setAttribute("fill", color)
    return rect
}