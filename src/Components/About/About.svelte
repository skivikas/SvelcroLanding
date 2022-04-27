<!--src/Components/About/About.svelte-->

<script>
    export let aboutData = {};
    const { DATA } = aboutData;
  </script>
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section id="about-us" class="section grey-bgcolor">
    <div class="container">
      <!-- <h2 class="title text-center">{HEADING}</h2> -->
      <div >
            <!-- {#each DATA as list}
            <div class="text">
              <h2 class="about-title">{list.TITLE}</h2>
              <p> {list.DETAILS} </p>
            </div>
              <img class="image" src={list.IMAGE_URL}/>
            {/each} -->
            <div class="row componentStructure">
              <div class="text">
                <h2 class="about-title">Visualize your component structure</h2>
                <p> This can be visualized as a component dependency tree or hierarchy</p>
              </div>
              <div>
                <img class="image" src="images/tree_hierarchy.gif"/>
              </div>
            </div>

            <div class="row state">
              <div>
                <img class="image" src="images/state.gif"/>
              </div>
              <div class="text">
                <h2 class="about-title">View state and component properties</h2>
                <p> State and component specific properties will automatically populate after user inputs or actions </p>
              </div>
            </div>

            <div class="row render">
              <div class="text">
                <h2 class="about-title">Monitor component render times</h2>
                <p> The profiler tracks how many milliseconds it takes for each component to render</p>
              </div>
              <div> 
                <img class="image" src=images/render_time.gif/>
              </div> 
            </div>
          
            <div class="row count">
              <div>
              <img class="image" src="images/render_count.gif"/>
              </div>
              <div class="text">
                <h2 class="about-title">Track component re-renders</h2>
                <p>The profiler also keeps track of how many times each component has rendered</p>
              </div>
            </div>
      </div>
    </div>
  </section>
  
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    .row {
      /* gap: 40px; */
      /* display: flex; */
      /* justify-content: space-between; */
      display: flex;
      justify-content: space-between;
      /* gap: 30px; */
      /* align-content: center; */
      padding: 40px;
    }

    .text {
      width: 300px;
    }

    .image {
      width: 700px;
      height: 460px;
    }
    
    .about-title {
      margin-top: 8%;
      margin-bottom: 20px;
      font-size: 50px;
    }
    #about-us {
        background-color: #1f1f1f;
    }
  
    section ul li {
      margin: 10px 0;
    }
  
    section ul {
      padding-left: 23px;
    }

  </style>