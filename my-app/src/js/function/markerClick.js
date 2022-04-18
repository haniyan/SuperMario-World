export const markerHandleClick = (marker) => {

    const theme = marker.properties.id;

    console.log(theme, typeof(theme))
    console.log(marker.geometry.coordinates[0],marker.geometry.coordinates[1])

    return theme
}