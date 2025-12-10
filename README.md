<h1>dev-js</h1>
<pre>
&lt;script src="https://monofluxcdn.github.io/dev-js/ai.monoflux.rendimarzikri.js"&gt;&lt;/script&gt;
</pre>
<h3>Contoh kode HTML:</h3>
<pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="id"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;
  &lt;title&gt;ChatAI&lt;/title&gt;
  &lt;style&gt;
  body { font-family: Arial, sans-serif; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;ChatBot - AI&lt;/h1&gt;
&lt;div id="chat"&gt;&lt;/div&gt;
&lt;input id="input" placeholder="ketik pesan..."&gt;
&lt;button onclick="kirim()"&gt;kirim&lt;/button&gt;
&lt;script src="https://monofluxcdn.github.io/dev-js/ai.monoflux.rendimarzikri.js"&gt;&lt;/script&gt;
&lt;script&gt;
function kirim() {
  let user = input.value.trim();
  input.value = "";
  let memory = [
  { q:"halo", a:"Halo juga!" },
  { q:"nama saya ×*", a:"halo ×*!" },
  { q:"apa kabar", a:"Baik, kamu?" },
  { q:"siapa kamu", a:"Saya adalah model Monoflux (CDN) mini Neural!" },
  { q:"×* keren", a:"ya, ×* memang keren." },
  { q:"dimana ×*", a:"entahlah, saya tidak tahu dimana ×*." },
  { q:"gimana kabarmu", a:"Baik, kamu?" },
  { q:"Baik, sehat", a:"Senang mendengar itu." },
  { q:"apa yang sering kamu lakukan", a:"Aku sering menjawab pesan pengguna." }
  ];
  let res = MONOFLUX_NLP.reply(user, memory);
  chat.innerHTML += `&lt;div style='color: blue'&gt;AI: ${res}&lt;/div&gt;`;
}
&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
</pre>
