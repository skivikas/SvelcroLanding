<!--src/Components/Banner/Banner.svelte-->

<script>
    export let bannerData = {};
    const { HEADING, DECRIPTION, TUTORIAL_URL, WATCH_TUTORIAL } = bannerData;
  </script>
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section class="main-bgcolor light-color" id="banner">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h1>{HEADING}</h1>
          <p>{DECRIPTION}</p>
          <a href={TUTORIAL_URL} target="_blank" class="light-color">
            <i class="far fa-play-circle fa-2x watch-btn" />
            {WATCH_TUTORIAL}
          </a>
        </div>
        <div class="col-md-6">
          <img src="images/svelcro_logo.png" alt="" class="img-fluid" />
        </div>
      </div>
    </div>
    <!-- <img src="images/black_wave2.png" alt="" class="wave-img" /> -->
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    section {
      padding-top: 5%;
    }
  
    h1 {
      font-size: 40px;
      font-weight: 600;
      margin-top: 100px;
      text-transform: uppercase;
    }
  
    .watch-btn {
      margin: auto 20px;
      position: relative;
      top: 8px;
    }
  
    section a {
      text-decoration: none;
    }
  
    .wave-img {
      width: 100%;
      height: auto;
      color: black;
      fill: black;
      /* -webkit-transform:rotate(180deg);
  -moz-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -o-transform: rotate(180deg);
  transform: rotate(180deg); */
    }
  </style>