const getRootProperties = (object, prefix) => {

    let properties = []

    let varString

    if( ! prefix ) {
      varString = `--theme`
    } else {
      varString = prefix
    }
    
    for (let [key, value] of Object.entries(object)) {

      varString = `${varString}-${key}`
      
      if( typeof value === "object" ) {
        properties = [...properties,... getRootProperties( value, varString )]
        return properties
      }

      properties.push([
        varString, value
      ])

    }

    return properties
    
}

const setRootProperties = (properties) => {


    for( property of properties ) {

      document.documentElement.style.setProperty(property[0], property[1]);

    }

    return
    
}

export default {
  getRootProperties,
  setRootProperties
}