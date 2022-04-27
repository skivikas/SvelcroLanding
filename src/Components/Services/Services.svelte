<!--src/Components/Services/Services.svelte-->

<script>
    export let serviceData = {};
    const { HEADING, SERVICE_LIST } = serviceData;
  </script>
  
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section id="services" class="section">
    <div class="container text-center">
      <h2 class="title">{HEADING}</h2>
      <div class="row section-body">
        {#each SERVICE_LIST as list}
          <div class="col-md-4 service">
            <!-- <img src={list.URL} alt={list.LABEL} class="service-img" /> -->
            <h4>{list.LABEL}</h4>
            <p>{list.DESCRIPTION}</p>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    .row {
      display: flex;
      justify-content: center;
      gap: 60px;
      align-content: center;
      padding: 30px;
    
    }
    .row h4 {
      font-size: 20px;
      color: #ff4000c2;
    }
    .row p {
      /* text-align: left; */
    }
    .col-md-4 {
      
      border: 1px solid #ff40004b;
      border-radius: 20px;
      max-width: 300px;
      height: 200px;
      background-image: linear-gradient(to top left, #ff400083, #ff400000);
      box-shadow: 5px 5px 5px 5px rgb(21, 21, 21);
      text-align: center;
  
    }
    .col-md-4:hover {
      border: 1px solid #ff3e00;
    }
    .service-img {
      width: 200px;
      height: 200px;
      margin-top: 20px;
    }
  
    .service h4 {
      padding: 5px;
      margin-top: 25px;
     
    }
    #services {
        color: f1f1f1;
    }
  
    .title {
      text-transform: uppercase;
    }
  
    section .btn-primary {
      box-shadow: none;
      padding: 8px 25px;
      border: none;
      
    }
    .section {
      background-color: #1f1f1f;
    }

    .btn {
        background-color: #ff3e00;
    }
</style>