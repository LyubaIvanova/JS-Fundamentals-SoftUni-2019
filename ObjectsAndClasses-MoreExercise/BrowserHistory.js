function printBrowserActions(obj, arr) {
    let action = '';
    let webSite = '';
    let openTabs = Object.values(obj)[1];
    let recentlyClosed = Object.values(obj)[2];
    let browserLogs = Object.values(obj)[3];
    for (let el of arr) {                                                           //loop through the arr with the commands
        action = el.split(' ')[0];                                                  //the 'action' is every first word, from every string
        webSite = el.split(' ').slice(1).join(' ');                                 //the 'webSite' is the remaining from the string(could be 2 words, thats why I use .slice(1).join(' '))
                                         
        if ((action === 'Close') && (openTabs.indexOf(webSite) !== -1)){            //if our 'action' command says to close a 'webSite' AND if this webSite exist in the OpenTabs element in the object
                openTabs.splice(openTabs.indexOf(webSite), 1);                      //then remove it
                recentlyClosed.push(webSite);                                       //adding the 'webSite' to the recentlyClosed windows
                browserLogs.push(el);                                               //and adding it also to the browserLog history
        } else if(action === 'Open'){                                               //if our command says to open, no matter if it's already in the open tabs, we obey, and open it 
            openTabs.push(webSite);                                                 //that means - pushing it to the openTabs array
            browserLogs.push(el);                                                   //and to browserLogs array
        } else if(action === 'Clear'){                                              //if 'action' says to clear cache, we do so :), by setting the arrays.length to 0
            openTabs.length = 0;
            recentlyClosed.length = 0;
            browserLogs.length = 0;
        }
    }
        console.log(Object.values(obj)[0]);                                         //finally we print the result
        let entries = Object.entries(obj)                                           //we need only the name of the browser, thats why I use Object.values(obj)
        for (let i = 1; i < entries.length; i++) {                                  //and for the rest of the object, we need both keys and values - so here are the entries
          if (entries[i][1].length !== 0) {                                         //and yet, the values arr could be empty, so we check if it's is
            console.log(`${entries[i][0]}: ${(entries[i][1]).join(', ')}`);         //I've noticed that .join goes better with classic for loop rather then for-of
          } else{
            console.log(`${entries[i][0]}: `);
          }
        }
    
}printBrowserActions({"Browser Name":"Mozilla Firefox",
                      "Open Tabs":["YouTube"],
                      "Recently Closed":["Gmail", "Dropbox"],
                      "Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"]

);