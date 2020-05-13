const getRootProperties = (object, prefix) => {

    let properties = []

    let varString

    if (!prefix) {
        prefix = `--theme`
    }

    varString = prefix

    for (let [key, value] of Object.entries(object)) {

        varString = `${varString}-${key}`

        if (typeof value === "object") {
            properties = [...properties, ...getRootProperties(value, varString)]
        } else {
            properties.push([
                varString, value
            ])
        }

        varString = prefix

    }

    return properties

}

const setRootProperties = (properties) => {


    for (const property of properties) {

        document.documentElement.style.setProperty(property[0], property[1]);

    }

    return

}
const setRootTypographies = (properties) => {

    // let keys = Object.keys(properties);

    console.log("PROPIEDADES", properties);
    for (const prop in properties) {
        console.log("font primaria", prop);
    }

    // properties.map((typo) => {
    //     console.log("Font primaria", typo.primary);
    // });
    // console.log("font primaria", properties.primary);
    // console.log("Font Secundaria", properties.secondary);

    return

}


const rootProperties = {
    getRootProperties,
    setRootProperties,
    setRootTypographies
}

module.exports = rootProperties