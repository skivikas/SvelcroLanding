<!--src/Components/Navbar/Navbar.svelte-->

<script>
    export let navlists = [];
    export let header;
  </script>
  <!------------------------------------------->
  <!----------------MARKUP----------------------->
  <!------------------------------------------->
  <section id="nav-bar">
    <nav class="navbar navbar-expand-md navbar-dark">
      <!-- <a class="navbar-brand company_brand" href="/">
        {header}
      </a> -->
      <a  href="https://opensourcelabs.io/">
        <img id="oslabs" src="images/OSlabs.png"/>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          {#each navlists as list}
            <li class="nav-item">
              <a class="nav-link light-color" href={list.url}>{list.label}</a>
            </li>
          {/each}
        </ul>
      </div>
    </nav>
  </section>
  <!------------------------------------------->
  <!----------------STYLE----------------------->
  <!------------------------------------------->
  <style>
    #oslabs {
      width: 120px;
      height: 60px;
    }
    
    #nav-bar {
      position: sticky;
      top: 0;
      z-index: 10;
      
      fill: transparent;
    }
  
    
    .navbar {
      background-color: #ff3e00;
      padding: 0 20px !important;
    }
  
    .navbar-nav li {
      padding: 0 0 0 20px;
     
    }
  
    .navbar-nav li a {
      font-weight: 600;
      text-transform: uppercase;
      float: right;
      text-align: left;
      color: transparent;
      
    }
  </style>