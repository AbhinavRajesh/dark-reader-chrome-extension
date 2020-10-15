let modeSwitch = document.querySelector('input');
toggle = false;

modeSwitch.onclick = () => {
    toggle = !toggle;
    toggle ? document.body.style.filter = "invert(1) hue-rotate(180deg)" : document.body.style.filter = "none";
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: toggle ? 'document.body.style.filter = "invert(1) hue-rotate(180deg)";' : 'document.body.style.filter = "none";'});
    });
}
