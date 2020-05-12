const { getRootProperties } = require("../packages/svelte-themer/src/rootProperties")


const should = require('chai').should();



describe('RootProperties', () => {
  describe('Get', () => {

    describe('Basic', () => {
      it('is correct type', () => {
        
        getRootProperties.should.be.a("function")
        
      });
      it('returns array', () => {
        
        getRootProperties({}).should.be.a("array")
        
      });
    });

    describe('Levels', () => {

      
      it('level 0 > generates 1 key-value pair per item', () => {
        
        const theme = {
          properties: {
            prop_one: "myValue0",
            prop_two: "myValue1",
          }
        }

        let properties = getRootProperties(theme.properties)

        
        properties.should.have.lengthOf(2)        
        
      });
      it('level 1 > check sub-property generates correct key and value', () => {
        


        const theme = {
          properties: {
            prop_one: {
              sub_prop_one: "hello",
              sub_prop_two: "world",
            },
          }
        }

        
        let properties = getRootProperties(theme.properties)
        let result = properties[0]
          
        result.should.eql(["--theme-prop_one-sub_prop_one","hello"])
        
      });
      it('level 4 > check sub-property generates correct key and value', () => {
        


        const theme = {
          properties: {
            prop_one: {
              one: {
                two: {
                  three: {
                    four: {
                      prop_one: "hello"
                    }
                  }
                }
              },
              sub_prop_two: "world",
            },
          }
        }

        
        let properties = getRootProperties(theme.properties)
        let result = properties[0]
          
        result.should.eql(["--theme-prop_one-one-two-three-four-prop_one","hello"])
        
      });
    });
    describe('Parsing', () => {
      it('creates vars for all sub-objects', () => {
        


        const theme = {
          properties: {
            colors: {
              primary: "#fa0"
            },
            fonts: {
              primary: "Arial"
            },
            spacing: {
              one: "1rem"
            },
          }
        }

        
        let properties = getRootProperties(theme.properties)
        let result = properties[2]
          
        result.should.eql(["--theme-spacing-one","1rem"])
        
      });
    });


  });
});