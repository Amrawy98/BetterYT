/// <reference types="chrome"/>

chrome.runtime.onMessage.addListener((message) => {
  console.log("hello", message);
  //   // chrome.tabs.query(
  //   //   {
  //   //     active: true,
  //   //     currentWindow: true,
  //   //   },
  //   //   (tabs) => {
  //   //     tabs.forEach((tab) => {
  //   //       if (tab.id) {
  //   //         chrome.scripting.executeScript({
  //   //           target: { tabId: tab.id },
  //   //           files: ["contentScript.ts.js"],
  //   //         });
  //   //         chrome.tabs.sendMessage(tab.id, message);
  //   //       }
  //   //     });
  //   //   }
  //   // );
  //   return true;
});
