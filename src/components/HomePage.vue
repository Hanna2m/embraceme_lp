<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height p-4 spacer layer1">
      <div class="container pt-3">
        <div class="row pb-5">
          <div id="store-link" class="col-lg-5 align-self-end d-none d-lg-block">
            <div  class="row pb-3">
              <div class="col my-auto">
                <img src="../assets/google-play-badge.png"/>
              </div>
              <div class="col my-auto">
                <img src="../assets/app-store-badge.png" />
              </div>
            </div>
          </div>
          <div class="col-lg-7 ps-4">
                <img id="mockup" src="../assets/mockup.png" />
                <h1 id="title" class="display-3 pt-3">
                  Discover your unique path to wellbeing
                </h1>
                <div id="store-link" class="d-block d-lg-none">
                  <div  class="row pb-3">
                    <div class="col my-auto">
                      <img src="../assets/google-play-badge.png"/>
                    </div>
                    <div class="col my-auto">
                      <img src="../assets/app-store-badge.png" />
                    </div>
                  </div>
                </div>
          </div>
          <div class="col-lg-3"></div>
        </div>
      </div>
    </div>

    <div id="about" class="bg-light p-3 p-md-5">
      <div class="row">
        <div class="col-lg-3">
          <img src="../assets/icon_1.svg" height="128" class="m-4" />
          <h5 class="ml-md-4 mr-md-4">
            Get to know yourself
          </h5>
          <p class="ml-md-4 mr-md-4">Beyond coaching and striving to get more stuff done</p>
        </div>

        <div class="col-lg-3">
          <img src="../assets/icon_2.svg" height="128" class="m-4" />
          <h5 class="ml-md-4 mr-md-4">
            No matter who you are
          </h5>
          <p class="ml-md-4 mr-md-4">You're welcome here. Join the gang and develop new neural pathways</p>
        </div>

        <div class="col-lg-3">
          <img src="../assets/icon_3.svg" height="128" class="m-4" />
          <h5 class="ml-md-4 mr-md-4">
            Unplug
          </h5>
          <p class="ml-md-4 mr-md-4">This app is not for hourly use. Put down your screen, chill, and do what's good for *you*</p>
        </div>

        <div class="col-lg-3">
          <img src="../assets/icon_4.svg" height="128" class="m-4" />
          <h5 class="ml-md-4 mr-md-4">
            Be productive. Or don't
          </h5>
          <p class="ml-md-4 mr-md-4">This app is about you, not what you do. We're gentle. Will you be gentle to yourself, too</p>
        </div>
      </div>
    </div>

    <div id="contact" class="p-4">
      <div class="row justify-content-center mt-3 mb-3">

        <div class="col-lg-4">
          <h2>Have any questions?</h2>
          <p>Contact us by filling  information below</p>

          <form>
            <div  class="form-group text left">
              <input type="email"
                    class="form-control"
                    placeholder="Enter your email"
              />
              <textarea class="form-control mt-3"
                        placeholder="Enter your message"
                        rows="5"
              />
            </div>
            <button type="submit" class="btn btn-warning mt-3">Send</button>
          </form>
        </div>
      </div>
    </div>

    <div id="footer"></div>
  </div>
</template>

<script>
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.spacer {
  aspect-ratio: 960/540;
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.layer1 {
  background-image: url('../assets/wave.svg');
}

#mockup {
  max-height: 560px;
  padding-top: 10%;
}

#about {
  min-height: 40vh;
}

#store-link img {
  /* margin-bottom: -24px; */
  max-height: 72px;
}

@media screen and (max-width: 1100px) {
  .layer1 {
    background-image: url('../assets/wave_0.svg');
  }

  .spacer {
    height: 100vh;
  }

  #mockup {
    max-height: 60vh;
  }

  h1 {
    font-size: 2rem;
    margin: 1.2rem
  }

  #store-link img {
    max-block-size: 52px;
  }
}


</style>
