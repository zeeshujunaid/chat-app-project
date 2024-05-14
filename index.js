var messageList = [
];

const ul = document.getElementsByTagName("ul")[0];

for (let i = 0; i < messageList.length; i++) {
  ul.innerHTML += `<li id=${messageList[i].name === "user" ? "user" : ""}>
        ${messageList[i].msg}</li>`;
}

const message = document.getElementsByTagName("input")[0];
function handleSend() {
  if (message.value !== "") {
    ul.innerHTML += `<li id="user">:${message.value}</li>`;
    message.value = "";
    setTimeout(() => autoReply(), 500);
  }else{
    alert("Please Type a Message!")
  }
}

function autoReply() {
  var dummyMsgList = [
    { name: "women", msg: "Hi" },
    { name: "women", msg: "i don't know" },
    { name: "women", msg: "alhamdulillah, mai theek hon" },
    { name: "women", msg: "ap kahan rehty hain" },
    { name: "women", msg: "ap reply kion ni karty" },
  ];
  var msgNumber = Math.floor(Math.random() * dummyMsgList.length);
  ul.innerHTML += `<li id="ai">:${dummyMsgList[msgNumber].msg}</li>`;
}

function sirahmed() {
var change = document.getElementById("chat-header-img");
change.src="sirahmed.jfif"  
var name = document.getElementById("name");
name.innerHTML="SIR AHMED"
}
function hassan() {
  var change = document.getElementById("chat-header-img");
  change.src="https://avatars.githubusercontent.com/u/143353727?v=4"  
  var name = document.getElementById("name");
  name.innerHTML="HASSAN"
}
  function ducky() {
    var change = document.getElementById("chat-header-img");
    change.src="https://miro.medium.com/v2/resize:fit:450/1*U0vlrf_0TRepVK2rotnddg.jpeg"  
    var name = document.getElementById("name");
    name.innerHTML="DUCKY BHAI"
    }
    function microsoft() {
      var change = document.getElementById("chat-header-img");
      change.src="https://media.cnn.com/api/v1/images/stellar/prod/2023-11-15t234640z-476293089-rc2zd4acl1fu-rtrmadp-3-apec-usa-ceos.JPG?c=16x9&q=h_833,w_1480,c_fill"  
      var name = document.getElementById("name");
      name.innerHTML="MICROSOFT CEO"
      }
      function sundar() {
        var change = document.getElementById("chat-header-img");
        change.src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Sundar_Pichai_-_2023_%28cropped%29.jpg"  
        var name = document.getElementById("name");
        name.innerHTML="SUNDAR PICHAI"
        }
        function salman() {
          var change = document.getElementById("chat-header-img");
          change.src="https://m.media-amazon.com/images/M/MV5BMjMwNTIxODg0OF5BMl5BanBnXkFtZTgwODg2NzM0OTE@._V1_.jpg"  
          var name = document.getElementById("name");
          name.innerHTML="SALMAN KHAN"
          }
          function ai() {
            var change = document.getElementById("chat-header-img");
            change.src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-112222.jpg?size=338&ext=jpg&ga=GA1.1.553209589.1714953600&semt=ais"  
            var name = document.getElementById("name");
            name.innerHTML="AI FROM META"
            }

