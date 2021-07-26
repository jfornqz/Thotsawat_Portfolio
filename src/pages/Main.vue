<template>
  <div class="p-5">
    <div class="container-fluid">
      <h1>Portfolio</h1>
      <hr />
      <div class="row">
        <div class="col-6">
          <img
            class="profile"
            src="https://www.img.in.th/images/aadbdfc79b237c15b066a4e8e03e6d5d.jpg"
            alt="ProfilePic"
          />
        </div>
        <div class="col-6">
          <h2>About Me</h2>
          <p>
            Hello My name is Thotsawat Jantapitak, you can call me Forn. I was
            born on May 1 2000. Now I'm software engineer student at king
            mongkut's institute of technology ladkrabang. I interested in
            software development, IOT, Cryptocurrency. I am determined, patient,
            quick to learn and have a good relations When i stressed I can
            relieves it by going out to party, watching movies and playing
            games. <br />Nice to meet you and Thank you for considering.
          </p>
          <br />
          <hr />
          <div>
            <h2>Info</h2>
            <br />
            <p>
              Name: Thotsawat Jantapitak <br />
              Nickname: Forn <br />
              Age : 21 years <br />
              date of birth: 01/05/2000 <br />
              nationality: Thai <br />
              religion: buddhism<br />
            </p>
          </div>
        </div>
      </div>
      <br />
      <!-- container ข้อมูล -->
      <div class="container">
        <div class="row">
          <div class="col-md">
            <hr />
            <h2>Education background</h2>
            <br />
            <p class="text-muted">2018 - Now</p>

            <p class="font-weight-bold">
              king mongkut's institute of technology ladkrabang
            </p>
            <p>• GPA: 2.70</p>

            <p class="text-muted">2015 - 2017</p>
            <p class="font-weight-bold">Sriyapai School</p>
            <p>• GPA: 3.12</p>
          </div>
          <div class="col-md">
            <hr />
            <h2>Skill & Experience</h2>
            <br />
            <ul style="list-style-type: disc">
              <li>Html</li>
              <li>Css</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>SQL</li>
              <li>java</li>
              <li>React native</li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="btn d-flex flex-column align-items-center justify-content-center"
      >
        <!-- to path name -->
        <router-link :to="{ name: 'contact' }">
          <a href="" class="btn btn-primary">Contact Here</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F3F3F3;
  background-color: #17202A;
}

.container {
  border-width: 3px;
  color: #F3F3F3;
}

h1 {
  /* font-size: 3.5em; */
  color: #F3F3F3;
  font-weight: bold;
}
h2 {
  text-decoration: underline;
}
h3 {
  color: white;
}
.btn {
  margin-bottom: 3%;
}
.profile {
  width: 80%;
}
</style>
