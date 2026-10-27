/* global chrome */
const MENU_ID = "narrateai-narrate-selection";

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: MENU_ID,
    title: "Narrate with NarrateAI",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(async (info) => {
  if (info.menuItemId !== MENU_ID || !info.selectionText) return;

  await chrome.storage.local.set({ pendingText: info.selectionText.trim() });

  try {
    // Opens the popup directly (Chrome 127+, allowed from a user gesture).
    await chrome.action.openPopup();
  } catch {
    // Fallback: show a badge so the user knows to click the toolbar icon.
    await chrome.action.setBadgeBackgroundColor({ color: "#4f46e5" });
    await chrome.action.setBadgeText({ text: "1" });
  }
});
