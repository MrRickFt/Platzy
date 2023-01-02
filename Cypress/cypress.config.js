const { defineConfig } = require("cypress");

module.exports = defineConfig({
  //Cambiando las dimensiones del viewport
  viewportWidth: 1920,
  viewportHeight: 1080,
  
  
  
  e2e: {
    baseUrl: "https://demoqa.com",
    setupNodeEvents(on, config) {
      
      
      
    },
    
      //Excluyendo los test por defecto que trae Cypress
      excludeSpecPattern:[
        "**/1-getting-started/*.js",
        "**/2-advanced-examples/*.js"
      ]
    
  },
});
