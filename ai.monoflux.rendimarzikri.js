// === MonoFlux Mini with Neural NLP Layer ===

window.MONOFLUX_NLP = {

  // ───────────────────────────────
  // Mini Random Embedding Layer
  // ───────────────────────────────
  wordVec: {},
  dim: 16,
  embed(word) {
    word = word.toLowerCase();
    if (!this.wordVec[word]) {
      let arr = [];
      for (let i = 0; i < this.dim; i++) {
        arr.push((Math.sin(word.charCodeAt(0) * (i+1)) % 1));
      }
      this.wordVec[word] = arr;
    }
    return this.wordVec[word];
  },
  sentenceEmbed(text) {
    let words = text.toLowerCase().split(/\s+/);
    let vec = new Array(this.dim).fill(0);
    for (let w of words) {
      let e = this.embed(w);
      for (let i = 0; i < this.dim; i++) {
        vec[i] += e[i];
      }
    }
    return vec;
  },

  // ───────────────────────────────
  // Mini Dense Layer (ReLU)
  // ───────────────────────────────
  dense(vec) {
    let out = [];
    for (let i = 0; i < vec.length; i++) {
      let v = vec[i] * 0.7 + 0.1; 
      out.push(v > 0 ? v : 0);
    }
    return out;
  },

  // ───────────────────────────────
  // Cosine Similarity Lanjutan
  // ───────────────────────────────
  similarity(a, b) {
    let dot = 0, na = 0, nb = 0;
    for (let i = 0; i < a.length; i++) {
      dot += a[i] * b[i];
      na += a[i] * a[i];
      nb += b[i] * b[i];
    }
    return dot / (Math.sqrt(na) * Math.sqrt(nb) + 0.00001);
  },

  // ───────────────────────────────
  // Pattern Match
  // ───────────────────────────────
  matchPattern(user, pattern) {
    if (!pattern.includes("×*")) {
      return user.toLowerCase().includes(pattern.toLowerCase())
        ? { ok: true, value: "" }
        : { ok: false };
    }
    let [start, end] = pattern.split("×*");
    start = start.trim().toLowerCase();
    end   = end.trim().toLowerCase();
    let u = user.toLowerCase();
    if (!u.startsWith(start)) return { ok: false };
    if (end && !u.endsWith(end)) return { ok: false };
    let mid = user.substring(start.length, user.length - end.length).trim();
    return { ok: true, value: mid };
  },

  // ───────────────────────────────
  // Main Reply
  // ───────────────────────────────
  reply(user, memory) {
    for (let item of memory) {
      let pat = this.matchPattern(user, item.q);
      if (pat.ok) {
        return item.a.replace("×*", pat.value);
      }
    }

    // Neural NLP Layer
    let uEmbed = this.dense(this.sentenceEmbed(user));
    let best = null;
    let bestScore = 0;
    for (let item of memory) {
      let qEmbed = this.dense(this.sentenceEmbed(item.q));
      let sim = this.similarity(uEmbed, qEmbed);
      if (sim > bestScore) {
        bestScore = sim;
        best = item;
      }
    }
    if (best) return best.a;
    // fallback
    return "Aku tidak tahu maksudmu.";
  }
};
