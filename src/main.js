// A generic onclick callback function.
function onClick(info, tab) {

  chrome.tabs.getSelected(null,function(tab) {
      var tablink = tab.url;
      if(tablink.indexOf('youtube.com/') !== -1){
        const searchParams = (new URL(tablink)).searchParams;;
        const video = 'https://youtubemp3cut.com/' + searchParams.get("v");

        chrome.tabs.create({url: video}, (tab) => {
          /*
          setTimeout(() => {
              //use your message data here.
              chrome.tabs.executeScript(tab.id, {code: "document.title = message.title"})
          }, 3000);
          */
        })

      }

  });
}

var id = chrome.contextMenus.create({
  "title": "Download MP3",
  //"contexts":[context],
  "onclick": onClick
});

