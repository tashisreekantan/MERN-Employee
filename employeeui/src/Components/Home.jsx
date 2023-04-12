import React from 'react'

const Home = () => {
  return (
    
    <div>
      <h1>HOME PAGE</h1>
              <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand"><h1>EMPLOYEE APP</h1></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <a class="nav-link" href="./admin"><h2>Admin Login</h2></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="./employee"><h2>Employee Login</h2></a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Home