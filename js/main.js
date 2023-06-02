console.log('JavaScript is running!');




const svgs = document.querySelectorAll(".icons object");

console.log(svgs);

svgs.forEach(svg => svg.addEventListener("mouseover",logId));

function logId() {
    console.log(this.id);
}



