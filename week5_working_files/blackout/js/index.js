var state = "on";

function lightswitch() {
  if (state === "on") {
    $("body").addClass("dark");
    state = "off";

  } else if (state === "off") {
    $("body").removeClass("dark");
    state = "on";
  }
}
  $("#light_switch").click(lightswitch);
  
console.log("hello");
