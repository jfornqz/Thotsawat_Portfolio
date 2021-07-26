<template>
  <div class="container-fluid">
    <div class="header">
      <h1>Contact</h1>
      <hr />
    </div>

    <div class="row">
      <a
        class="col-4 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="images"
          src="https://image.flaticon.com/icons/png/512/901/901141.png"
          alt="Tel"
          width="30%"
        /><br />
        <p>Tel: +66 62 0937382</p>
      </a>
      <a
        href="mailto:thotsawat@gmail.com"
        target="_blank"
        class="col-4 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="images"
          src="https://image.flaticon.com/icons/png/512/552/552486.png"
          alt="email"
          width="30%"
        /><br />
        <p>Email: thotsawatooo@gmail.com</p>
        <br />
      </a>
      <!-- </div> -->
      <a
        href="https://github.com/jfornqz"
        target="_blank"
        class="col-4 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="images"
          src="https://image.flaticon.com/icons/png/512/733/733553.png"
          alt="github"
          width="30%"
        /><br />
        <p>Github: jfornqz</p>
        <br />
      </a>
    </div>
    <br />
    <div class="row">
      <a
        target="_blank"
        class="col-4 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="images"
          src="https://image.flaticon.com/icons/png/512/2111/2111498.png"
          alt="Line"
          width="30%"
        /><br />
        <p>Line: _thotswiftz</p>
        <br />
      </a>
      <a
        href="https://www.facebook.com/thotsawat.forn"
        target="_blank"
        class="col-4 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="images"
          src="https://image.flaticon.com/icons/png/512/1312/1312139.png"
          alt="facebook"
          width="30%"
        />
        <p><br />Facebook: Thotsawat Forn</p>
      </a>

      <a
        class="col-4 d-flex flex-column align-items-center justify-content-center"
      >
        <img
          class="images"
          src="https://img-premium.flaticon.com/png/512/819/premium/819814.png?token=exp=1627283480~hmac=910b8312b8a995d62ee9885ab3a2e7b1"
          alt="address"
          width="30%"
        />
        <p>
          <br />address: 595/2 chalongkrung 1 yaek 5 <br />
          ladkrabang, Bangkok 10520
        </p>
      </a>
    </div>
    <div class="d-flex flex-column align-items-center justify-content-center">
      <router-link :to="{ name: 'profile' }">
        <a class="btn btn-primary">Back</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style scoped>
.container-fluid {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #ffffff;
  background-color: #17202A;
  height: 100vh;
}
h1 {
  font-size: 2.2em;
}
p {
  color: white;
}
.container {
  border-width: 3px;
  margin: 1%;
}

.header {
  font-size: 2em;
  color: rgb(255, 255, 255);
  padding-top: 40px;
  padding-bottom: 40px;
}
.btn {
  width: 150%;
}
a:hover {
  background-color: #212F3D;
}
</style>