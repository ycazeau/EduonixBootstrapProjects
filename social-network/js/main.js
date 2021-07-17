  // Slider class
  class Headers extends HTMLElement{
    connectedCallback(){
      this.innerHTML = `
      <!-- Header Section -->
      <header>
        <div class="container">
        <img class="logo" src="img/logo.png" alt="">
  
        <form class="form-inline">
          <label class="sr-only" for="inlineFormInputName2">Email</label>
          <input type="email" class="form-control mb-2 mr-sm-2" id="inlineFormInputEmail" placeholder="Email" required>
        
          <label class="sr-only" for="inlineFormInputGrouppassword">Password</label>
          <div class="input-group mb-2 mr-sm-2">          
            <input type="password" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Password" required>
          </div>      
                
          <button type="submit" class="btn btn-primary btn-login">LOGIN</button>
  
          <div class="form-check mb-2 mr-sm-2">
            <input class="form-check-input" type="checkbox" id="inlineFormCheck">
            <label class="form-check-label" for="inlineFormCheck">
              Remember me
            </label>
          </div>
        </form>
        </div>
      </header>
      <!-- Header Section -->
      `
    }
  }
  customElements.define('my-header', Headers)