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
    ul.innerHTML += `<li id="user">${message.value}</li>`;
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
  ul.innerHTML += `<li id="ai"><p>AI:</p>${dummyMsgList[msgNumber].msg}</li>`;
}

