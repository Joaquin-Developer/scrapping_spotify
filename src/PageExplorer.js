const URL = "https://open.spotify.com/playlist/37i9dQZEVXbLiRSasKsNU9"


const evaluatePage = () => {
    const mainDiv = document.getElementsByClassName("iDlSBR5JgCntHwvGPaQk")[0].children[1].children
    const songsData = []
    let idSong = 1

    for (let song of mainDiv) {
        const data = song.children[0].children[1].children[1]
        const allArtists = []

        for (let i = 0; i < data.lastElementChild.children.length; i++) {
            allArtists.push(data.lastElementChild.children[i].textContent)
        }

        songsData.push({
            id: idSong++,
            nameSong: data.firstElementChild.textContent,
            artist: allArtists.toString().replace(",", ", ")
        })
        
    }
    return songsData
}

// module.exports = evaluatePage