// <script>
      let url = "https://kontests.net/api/v1/all";
      // card_container.innerHTML =
       //  " The programming Contest , Keep doing hardwork! You will acheive soon to the dream company and increase your rating in the contest! , We wish you all the Good Luck :) , May God Bless You always "; 
      let response = fetch(url); // used for fetching the content from the API
      let ds = [];
      response
        .then((v) => {
          console.log(v);
          // console.log(v.json());
          return v.json();
        })
        .then((contests) => {
          ihtml = "";
          console.log(contests);
          for (item in contests) {
            console.log(contests[item].start_time);
            ihtml += `
                <div class="card mx-2 my-2" style="width: 22rem;">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOpMBTgrPtQuNSYqIzPVAEJgJbF7tWmT1LhnCrtAkFbe-_qgRXBj-25gZ0yuR_3sL6iNE&usqp=CAU" class="card-img-top" alt="...">
                                <div class="card-body">
                                        <h5 class="card-title">${contests[item].name}</h5>
                                        <p class="card-text"> Status is ${contests[item].status} and site is ${contests[item].site}</p>
                                        <p class="card-text"> In 24 Hours? ${contests[item].in_24_hours} </p>
                                        <p>Starts at: ${contests[item].start_time}
                                        <p>Starts at: ${contests[item].end_time}
                                        <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
                                </div>
                        </div>
                `
          }
        cardContainer.innerHTML=ihtml;
        })
        .then((v) => {
          console.log(v);
        });
        
    // </script>
