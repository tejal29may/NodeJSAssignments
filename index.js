let fs=require("fs");

fs.appendFile("textFile.txt","hello this is the list here",function(err){
    if(err){
        throw err;
    }else{
       console.log("file Created succesfully!");
    }
})

fs.appendFile("textFile.txt","1. what is you name? \n 2. where are you from \n 3. okk goood ",function(err){
    if(err){
        throw err;
    }else{
       console.log("task added  succesfully!");
    }
})

fs.readFile("textFile.txt", "utf8", function(err, data) {
    if (err) {
        throw err;
    } else {
        console.log("File content:");
        console.log(data);
    }
});

fs.unlink('textFile.txt', function (err) {
    if (err) throw err;
    console.log('File deleted!');
  });

  fs.appendFile("textFile1.txt","1. what is you name? \n 2. where are you from \n 3. okk goood ",function(err){
    if(err){
        throw err;
    }else{
       console.log("[task Compelted]");
    }
})