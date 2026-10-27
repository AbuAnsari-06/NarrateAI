/* global chrome */
const MAX_CHARS = 8000;
const DEFAULT_APP_URL = "http://localhost:5173";

const textEl = document.getElementById("text");
const rateEl = document.getElementById("rate");
const rateLabel = document.getElementById("rateLabel");
const appUrlEl = document.getElementById("appUrl");
const statusEl = document.getElementById("status");

function setStatus(msg) {
  statusEl.textContent = msg;
}

// Chrome's speechSynthesis can stall on long utterances, so read in sentence chunks.
function chunkText(text, size = 200) {
  const sentences = text.match(/[^.!?\n]+[.!?]*\s*/g) || [text];
  const chunks = [];
  let current = "";
  for (const s of sentences) {
    if ((current + s).length > size && current) {
      chunks.push(current.trim());
      current = "";
    }
    current += s;
  }
  if (current.trim()) chunks.push(current.trim());
  return chunks;
}

function play() {
  const text = textEl.value.trim();
  if (!text) return setStatus("Nothing to narrate yet.");
  window.speechSynthesis.cancel();
  for (const chunk of chunkText(text)) {
    const utter = new SpeechSynthesisUtterance(chunk);
    utter.rate = Number(rateEl.value);
    window.speechSynthesis.speak(utter);
  }
  setStatus("Narrating…");
}

async function openApp() {
  const text = textEl.value.trim().slice(0, MAX_CHARS);
  if (!text) return setStatus("Nothing to send yet.");
  const base = (appUrlEl.value || DEFAULT_APP_URL).replace(/\/+$/, "");
  await chrome.storage.sync.set({ appUrl: appUrlEl.value || DEFAULT_APP_URL });
  // The text goes in the URL hash so it is never sent to a server in a request line.
  await chrome.tabs.create({ url: `${base}/#text=${encodeURIComponent(text)}` });
}

document.getElementById("play").addEventListener("click", play);
document.getElementById("pause").addEventListener("click", () => {
  const synth = window.speechSynthesis;
  if (synth.paused) {
    synth.resume();
    setStatus("Narrating…");
  } else {
    synth.pause();
    setStatus("Paused.");
  }
});
document.getElementById("stop").addEventListener("click", () => {
  window.speechSynthesis.cancel();
  setStatus("Stopped.");
});
document.getElementById("openApp").addEventListener("click", openApp);
rateEl.addEventListener("input", () => {
  rateLabel.textContent = `${Number(rateEl.value).toFixed(1)}×`;
});
window.addEventListener("unload", () => window.speechSynthesis.cancel());

(async function init() {
  const { pendingText } = await chrome.storage.local.get("pendingText");
  const { appUrl } = await chrome.storage.sync.get("appUrl");
  appUrlEl.value = appUrl || DEFAULT_APP_URL;
  await chrome.action.setBadgeText({ text: "" });
  if (pendingText) {
    textEl.value = pendingText;
    await chrome.storage.local.remove("pendingText");
  }
})();
