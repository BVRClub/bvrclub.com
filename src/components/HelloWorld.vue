<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3> {{subtitle }}</h3>
    <h2>about</h2>
    <p>{{ about }}</p>
    <h2>team</h2>
    <ul></ul>
    <h2>gallery</h2>
    <ul></ul>
    <h2>projects</h2>
    <ul></ul>
    <h2>connect</h2>
    <ul>
      <li>
        <a
          href="mailto:info@bvrclub.com"
          target="_blank"
        >
        info@bvrclub.com
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/bvrclub"
          target="_blank"
        >
        Tweet us
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/bvrclub"
          target="_blank"
        >
        Instagram
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'BVR Club',
      subtitle: 'Ballard Virtual Reality',
      about: 'The BVR Club will explore current and emerging virtual reality and related technologies (VR/MR/AR).  Club members will experience high fidelity and mobile VR and have opportunities to develop their own VR applications.  Other club activities will include attending VR-related events and hosting guest speakers and demonstrations from the VR community. '
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h1 {
  margin: 0;
  font-size: 15.3vh;
}

h2 {
  font-size: 9.3vh;
}

h3 {
  margin: 0;
  font-size: 5.3vh;
}

h1, h2, h3 {
  font-weight: normal;
  font-family: "Bauhaus";
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: red;
}
</style>
