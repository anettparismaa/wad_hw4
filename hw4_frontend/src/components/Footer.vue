<template>
    <div class="footer">
        <p>Homework 4: Group Q</p>
    </div>
    
</template>
  
<script>
    export default {
      name: 'footer'
    }
</script>
  <style scoped>
 
/*   .footer {
    max-width: 420px;
    background-color: hwb(141 53% 16% / 0.466);
    height: 10%;
    width: 100%;
    border-radius: 0.25em;
    display: table;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  } */
  .footer {
    background-color: hwb(141 53% 16% / 0.466);
    bottom : 2px;  
   height : 40px;  
   margin-top : 40px;  
   text-align: center;  
   vertical-align: middle; 
   position:fixed;
   width:100%;
  }

   .footer p {
    margin-inline: auto;
  }

  p {
    color: #2c3e50;
    font-weight: bold;
  }
  
</style>