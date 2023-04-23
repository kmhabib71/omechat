var omeID = localStorage.getItem("omeID");
if (omeID) {

window.addEventListener("unload", function (event) {
  $.ajax({
    url: "/leaving-user-update/" + omeID + "",
    type: "PUT",
    success: function (response) {
//       alert(response);
    },
  });
});
$.ajax({
  url: "/leaving-user-update/" + omeID + "",
  type: "PUT",
  success: function (response) {
//     alert(response);
  },
});
}
