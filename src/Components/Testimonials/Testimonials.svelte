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
            <!-- <p>{list.DESCRIPTION}</p> -->
            <img src={list.IMAGE_URL} alt="" />
            <br>
            <p class="user-details">
              <b id="name">{list.NAME}</b>
              <br />
              {list.DESIGNATION}
            </p>
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
      border: 4px solid #ff400098;
      border-radius: 10px;
      margin-top: 10px;
      margin-bottom: 10px;
      color: white;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 10px;
      grid-auto-rows: minmax(300px, auto);
    }
    .row {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 10px;

    }
    .testimonial:hover {
        border: 4px solid #ff3e00;
    }

    #name {
        color: white;
        font-size: 15px;
    }
  
    .testimonial img {
      height: 150px;
      width: 150px;
      border-radius: 50%;
      margin: 0 10px;
    }
  
    .user-details {
      display: inline-block;
      font-size: 12px;

    }
  </style>