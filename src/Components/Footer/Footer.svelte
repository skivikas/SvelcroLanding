<!--src/Components/Footer/Footer.svelte-->

<script>
    import Social from "../Social/Social.svelte";
    import DATA from "../../Data/data";
    export let footerData = {};
    export let header = "";
    const {
      DESCRIPTION,
      CONTACT_DETAILS,
      SUBSCRIBE_NEWSLETTER,
      SUBSCRIBE
    } = footerData;
    const { HEADING, ADDRESS, MOBILE, EMAIL } = CONTACT_DETAILS;
  </script>
  
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section class="footer light-color" id="footer" >
    <!-- <bg-img src="images/dots.png" alt="" class="wave-img" /> -->
    <div/>
    <div class="container">
      <div class="row section-body">
        <div class="col-md-4 footer-box">
          <center><div class="company_brand">{header}</div>
          <center><p>{DESCRIPTION}
            <a id="link" href="https://github.com/oslabs-beta/Svelcro">Github</a>
         </p></center>
        </div>
        <div class="made-w-svelte">
          <center><p class="empty-box">
           Made With Svelte
            </p></center>
            <div id="social">
              <!-- <Social socialData={DATA.SOCIAL_DATA} /> -->
            </div>
        </div>
        <div class="col-md-4 footer-box">
         <center> <p class="footer-title">{HEADING}
        </p>
          <p>
            <i class="fas fa-envelope" />
            {EMAIL}
          </p></center>
          <center>
            <a href="https://twitter.com/SvelcroDT">
              <img src="images/twitter-icon.png"/>
            </a>
            <a href="https://www.linkedin.com/company/85416527/admin/">
              <img src="images/linkedin-icon.png"/>
            </a>
            <a href="https://www.facebook.com/Svelcro">
              <img src="images/facebook-icon.png"/>
            </a>   
          </center>
        </div>
      </div>
    </div>
  </section>
  <!------------------------------------------->
  <!----------------Style----------------------->
  <!------------------------------------------->
  <style>
    a img:hover {
      transform: translateY(-5px);
    }

    .col-md-4 img {
      width: 30px;
      height: 30x;
    }
    #social {
      font-size: 10px;
    }
    .row.section-body {
      justify-content: center;
      padding: 20px;
      margin: 20px
    }
    .empty-box {
      color: grey
    }
    .footer-title {
      font-weight: bold;
      text-transform: uppercase;
      justify-content: right;
      align-self: right
    }
    .main-bgcolor {
        text-align: right;
    }

    #p {
      align-items: right;
      align: right;
    }

    #footer {
      background-color: #1f1f1f;
    }
    .footer-box button {
      margin-top: 30px;
      
    } 
    #link {
    color: #ff3e00;
    }
     
    .round-border {
      border-radius: 20px !important;
    }
    .made-w-svelte {
          text-align: center;
    } 
    .footer {
        /* background-image: linear-gradient(360deg, #ff3e00 10%, rgb(30, 30, 30) 80%); */
        background-color: #1f1f1f;
    }

    </style>