let arrBooks = [
    {title:"Pachinko",
     author: "Min jin Lee",
     alreadyRead: true
    },
    {title:"A Passage to India",
     author: "E.M. Forster",
     alreadyRead: false
    },
    {title:"Blue Monday",
     author: "Nicci French",
     alreadyRead: true
    },
  ]


  arrBooks.forEach(function(read) {

    console.log(read.title, "by", read.author);
  
    if (read.alreadyRead == true){
      console.log("You already read", read.title );
    }
      else
    {
      console.log("You still need to read", read.title);
    }
  })


    



