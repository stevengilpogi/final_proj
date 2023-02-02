//Ang function ng code nato pag pinindot yung mark all as read sa webpage mawawala yung 3 notif and yung mga dot
const markAsRead = document.querySelector(".mark_as_read");


//Eto naman yung number 3 na nakalagay sa notifications
const notif1 = document.querySelector(".notif1");
const notif2 = document.querySelector(".notif2");
const notif3 = document.querySelector(".notif3");

//Eto naman yung function para bilangin yung mga notif

const countnotif = document.querySelector(".count_notif");

//Eto naman yung dots na kulay pula. This shows the notifations na di pa na mamark as read.
const dot1 = document.querySelector(".notif_dot_1");
const dot2 = document.querySelector(".notif_dot_2");
const dot3 = document.querySelector(".notif_dot_3");
const sec = document.querySelector(".section-notification");


//Ang ginagawa ng function nato sa webpage ay pag clinick yung mark all as unread mawawala yung mga notif na di pa nababasa
markAsRead.addEventListener("click", function () {
  markAsRead.style.color = "hsl(219, 14%, 63%)";

  notif1.classList.remove("unread_notification");
  notif2.classList.remove("unread_notification");
  notif3.classList.remove("unread_notification");

  dot1.style.backgroundColor = "transparent";
  dot2.style.backgroundColor = "transparent";
  dot3.style.backgroundColor = "transparent";
  countnotif.textContent = "0";
});
