// transforms menu icon to "X"
function changeMenu(x) {
  x.classList.toggle("change");
}

// IN CSS FILE
/* ANIMATED NAVIGATION BAR
.menu-logo {
  display: inline-block;
  cursor: pointer;
  float: right;
  margin-top: 10px;
  padding-right: 50px;
}

.bar{
  width: 27px;
  height: 3px;
  background-color: black;
  margin: 5px 0;
  transition: 0.4s;
} */

/* Rotate first bar
.change #bar1 {
  -webkit-transform: rotate(-45deg) translate(-9px, 6px);
  transform: rotate(-45deg) translate(-9px, 6px);
} */

/* Fade out the second bar
.change #bar2 {
  opacity: 0;
} */

/* Rotate last bar
.change #bar3 {
  -webkit-transform: rotate(45deg) translate(-8px, -8px);
  transform: rotate(45deg) translate(-8px, -8px);
} */

// IN HTML FILE
/* <div class="menu-logo" onclick="changeMenu(this)">
  <div id="bar1" class="bar"></div>
  <div id="bar2" class="bar"></div>
  <div id="bar3" class="bar"></div>
</div> */
