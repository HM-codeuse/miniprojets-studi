const panels = document.querySelectorAll('.container > *');
for(let panel of panels){
  panel.addEventListener('click', function() {
    panels.forEach((p => p.classList.remove('active')));
    panel.classList.add('active');
  });
}

const panelDiv = document.createElement('div');
console.log(panelDiv);
panelDiv.style = "background:url(../images/city-on-winter.jpg);"
panelDiv.className = "panel";

{/* <div class="panel active" style="background:url(../images/city-on-winter.jpg);">
<h3>Explore the world</h3>
</div> */}
