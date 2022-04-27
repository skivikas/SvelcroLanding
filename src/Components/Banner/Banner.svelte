<!--src/Components/Banner/Banner.svelte-->

<script>
    export let bannerData = {};
    const { HEADING, DECRIPTION, TUTORIAL_URL, DOWNLOAD } = bannerData;
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
          <button id="download">
            <a href={TUTORIAL_URL} target="_blank" class="light-color">
              <img id="gh" src="images/github.png">
              <span>{DOWNLOAD} </span>
            </a>        
          </button>
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

    .container {
      display: flex;
      justify-content: center;
      gap: 60px;
      align-content: center;
      padding: 40px;
    }

    #oslabs {
      width: 100px;
      height: 50px;
    }

    section {
      padding-top: 5%;
    }
  
    h1 {
      font-size: 40px;
      font-weight: 600;
      margin-top: 100px;
      text-transform: uppercase;
    }
    #gh {
        width: 20px;
        height: 20px;
    }
    #download {
      border-radius: 10px;
      background-color: white;
    }
    #download span {
      color: black;
      vertical-align: middle;
    }
    #download:hover {
        /* text-decoration: underline; */
        border: 2px solid #ff3e00;
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