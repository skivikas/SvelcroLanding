<!--src/Components/Testimonials/Testimonials.svelte-->

<script>
    export let testimonialData = {};
    const { HEADING, TESTIMONIAL_LIST } = testimonialData;
  </script>
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  
  <section id="testimonials" class="section">
    <div class="container">
      <h2 class="title text-center">{HEADING}</h2>
      <div class="row offset-1 section-body">
        {#each TESTIMONIAL_LIST as list}
          <div class="col-md-5 testimonial">
            
            <br/>
            <img id="faces" src={list.IMAGE_URL} alt="" />
            <br>
            <br>
            <p class="user-details">
              <b id="name">{list.NAME}</b>
              <br/>
              <br/>
              {list.DESIGNATION}
              <br/>
              <br/>
            </p>
            <div id="logos">
                <img src="images/github.png"/>
                <img src="images/linkedin.png"/>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    .testimonial {
      /* border: 4px solid #ff400098; */
      border-radius: 20px;
      box-shadow: 5px 5px 5px 5px rgb(21, 21, 21);
      /* margin-top: 10px;
      margin-bottom: 10px; */
      color: white;
      width: 600px;
      /* background-image: linear-gradient(to bottom right, #ff3e00, #ff40009e, rgb(30, 30, 30) 60%); */
      background-image: linear-gradient(to top right, #ff400000, #ff4000c3);
      display: inline;
      float: left;
    }

    .row {
        /* display: flex;
        align-items: center;
        gap: 30px;
        width: 600px;
        height: 400px; */
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(400px, auto);
        grid-row-gap: 0px;
        grid-column-gap: 30px;

        /* justify-content: center; */
        column-gap: 0px;
    }
    .testimonial:hover {
        border: 3px solid #ff3e00;
    }

    #name {
        color: white;
        font-size: 15px;
    }
  
    .testimonial img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      display: block;
      margin-right: auto;
      margin-left: auto;
      transition: transform 1s ease;
    }
    #faces:hover {
        transform: scale(1.2);
    }


    #logos img{
      width: 40px;
      height: 40px;
      display: inline-block;
      /* float: left; */
      /* align-items: center; */
      margin-right: auto;
      margin-left: auto;

    }

    #logos {
      display: flex;
      justify-content: center;
    }
  
    .user-details {
      /* display: inline-block; */
      font-size: 12px;
      align-items: center;
      text-align: center;

    }
  </style>