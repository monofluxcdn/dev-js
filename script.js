function bukatab(rendi) {
    document.querySelectorAll('.tab').forEach(tab => tab.classList.remove("active"));
    document.getElementById(rendi).classList.add("active");
}
document.getElementById("chatAI0").innerHTML = `
<style>
.jksbeiellajdj {
position: fixed; transition: bottom 1.5s ease-in-out; bottom: -100%; right: 20px; background: #3490db; padding: 8px; border-radius: 100%; font-size: 24px; cursor: pointer; user-select: none } .jksbeiellajdj:hover { box-shadow: 0px 0px 4px rgba(0,0,0,10); }
.jksbeiellajdj.showchattombol { bottom: 20px; }
.chatAIboxChatBox { background: #f4f4f4; position: fixed; bottom: 80px; right: -100%; transition: right 1s ease-in-out; width: 330px; height: 440px; box-shadow: 1px 1px 8px #000; border-top-right-radius: 10px; border-top-left-radius: 10px; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; }
.chatAIboxChatBox.showchatAIboxChatBox { right: 20px; } 
.chatAIversi0box { padding: 8px; overflow-x: hidden; height: 300px; }
.bannerataschatboxAIversi0 { background: #3498db; text-align: center; color: #fff; font-size: 18px; border-top-right-radius: 10px; border-top-left-radius: 10px; padding: 8px; letter-spacing: 1px; font-weight: bold; }
.inputuserAI { width: 100%; border: none; padding: 10px; }
.mainbuttonsendAIversi0 { background: lightblue; padding: 10px; border-radius: 10px; border: none; margin-left: 5px; margin-top: 2px; color: #666; }
.animasityping { width: 12px; height: 12px; background: blue; border-radius: 100%; display: flex; align-items: center; animation: typing 0.8s ease-in-out infinite; }
  .animasityping:nth-child(1) { animation-delay: 0s;   }
  .animasityping:nth-child(2) { animation-delay: 0.15s; margin-left: 5px; }
  .animasityping:nth-child(3) { animation-delay: 0.30s; margin-left: 5px; }
  @keyframes typing {
    0%   { transform: translateY(0); opacity: 1; }
    50%  { transform: translateY(-6px); opacity: 0.5; }
    100% { transform: translateY(0); opacity: 1; }
  }
</style>
<div class="chatAIboxChatBox" id="chatAIboxChatBox">
<div class="bannerataschatboxAIversi0">ChatAI</div>
<div class="chatAIversi0box" id="chatAIhjboxversi0"></div>
<input class="inputuserAI" id="input" placeholder="Ketik pesan...">
<button onclick="sendpesanuserAIversi0()" class="mainbuttonsendAIversi0">Kirim</button>
</div>
<div class="jksbeiellajdj" id="chattombol" onclick="chatAIversi0()">💬</div>`;
document.getElementById("chatAI0").className = "";
function animasi() {
    document.getElementById("chattombol").classList.add("showchattombol");
} function animasimulai() { setTimeout(() => { animasi(); }, 500); }
animasimulai();
function chatAIversi0() {
    document.getElementById("chatAIboxChatBox").classList.toggle("showchatAIboxChatBox");
}
function sendpesanuserAIversi0() {
    var chat = document.getElementById("chatAIhjboxversi0");
    var user = input.value.toLowerCase();
    input.value = "";
    
    let response = "Maaf, saya tidak bisa menjawab pesan Anda.";
    if (user.includes("halo")) {
        response = "Halo juga!";
    }
    chat.innerHTML += `<p><b>User:</b> ${user}</p>`;
    chat.innerHTML += `<div id="typing" style="display: flex"><span class="animasityping"></span><span class="animasityping"></span><span class="animasityping"></span></div>`;
    chat.scrollTop = chat.scrollHeight;
    setTimeout(() => {
        document.getElementById("typing").remove();
        chat.innerHTML += `<div><p><b>AI:</b> ${response}</p></div>`;
        chat.scrollTop = chat.scrollHeight;
    }, 2000);
}