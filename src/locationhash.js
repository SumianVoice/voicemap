window.addEventListener("load", (event) => {
    console.log("page is fully loaded");

    if(window.location.hash) {
        //captures hash, puts it in lowercase, and removes all symbols
        var hash = window.location.hash.toLowerCase().replace(/[^a-z ]/g, "");

        //searches for a node with the filtered hash
        var foundTag = returnFoundTag(hash);

        //if found, jump to it
        foundTag ? jumpToTag(foundTag[0],foundTag[1]) : console.log("Hash is not valid");
      };
  });

  //could make clicking titles change the hash and copy the link to it