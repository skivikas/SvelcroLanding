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
      <div class="row section-body">
        {#each TESTIMONIAL_LIST as list}
          <div class="col-md-5 testimonial">
            <a>
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
                  <a href={list.GITHUB}>
                      <img src="images/github.png"/> 
                  </a>
                  <a href={list.LINKEDIN}>
                      <img src="images/linkedin.png"/>
                  </a>
              </div>
          </a>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>

    .section {
      background-color: #1f1f1f;
    }
    .container {
      align-content: center;
    }
    .testimonial {
      /* border: 4px solid #ff400098; */
      border-radius: 20px;
      box-shadow: 5px 5px 5px 5px rgb(21, 21, 21);
      /* margin-top: 10px;
      margin-bottom: 10px; */
      color: white;
      max-width: 220px;
      min-width: 185px;
      /* background-image: linear-gradient(to bottom right, #ff3e00, #ff40009e, rgb(30, 30, 30) 60%); */
      
      /* background-image: linear-gradient(to bottom right, #ff400059, #ff400088); */
      background-image: linear-gradient(to top left, #ff40002f, #ff4000c3);
      float: center;
    }

    .row {
      display: grid; /* (1) */
      grid-template-columns: repeat(auto-fit, 210px); /* (2) */
      justify-content: space-around; /* (4) */
      /* align-content: center; (5) */
      /* grid-template-rows: auto; */
      
        /* align-items: center; */
        /* gap: 5px; */
        /* max-width: 100%; */
        /* height: 400px;  */
        /* grid-template-columns: repeat(4, minmax(auto, 1fr)); */
        /* grid-auto-rows: minmax(400px, auto); */
        /* grid-row-gap: 0px; */
        /* grid-column-gap: 0px; */
        /* justify-content: center; */
        /* column-gap: 0px; */
    }
    .testimonial:hover {
        border: 3px solid #ff3e00;
        transform: translateY(-10px);
    }

    #name {
        color: white;
        font-size: 15px;
    }
  
    .testimonial img {
      height: 150px;
      min-width: 150px;
      width: auto;
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
      min-width: 30px;
      min-height: 30px;
      max-width: 30px;
      max-height: 30px;
      /* display: inline-block; */
      /* float: left; */
      /* align-items: center; */
      margin-right: 5px;
      margin-left: 5px;
      /* padding: 5px; */
      
    }

    #logos {
      display: flex;
      justify-content: center;
      padding: 10px;
      /* margin: 2px; */
    }
  
    .user-details {
      /* display: inline-block; */
      font-size: 12px;
      align-items: center;
      text-align: center;

    }
  </style>