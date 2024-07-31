var arr = [
    "Structure markup language for web pages, defines content and layout.",
    "Style language for web page presentation and design.",
    " Scripting language for web interactivity and behavior.",
    "Animation library enhancing web animation capabilities with JavaScript.",
    "JavaScript library for building interactive user interfaces with component-based architecture.",
  ];
  var box1 = document.querySelector("#box1");
  var tool = document.querySelector("#tool");
  var clutter = "";
  
  box1.addEventListener("mouseover", function (dets) {
    var idy = dets.target.id;
    if (idy >= 0 && idy < 5) {
      const lt = dets.x;
      const tp = dets.y;
      tool.style.left = lt + "px";
      tool.style.top = tp + "px";
      clutter = `<h3 id="name">#${dets.target.innerHTML}..</h3>
  ${arr[idy]}`;
      tool.innerHTML = clutter;
      tool.style.display = "initial";
    }
  });
  box1.addEventListener("mouseleave", function () {
    tool.style.display = "none";
  });
    