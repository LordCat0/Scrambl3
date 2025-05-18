const FileInputButton = document.getElementById("FileInput")

function Output(text, type, href, downloadname){
    let outputdiv = document.querySelector(".Output")
    if (!outputdiv){
        outputdiv = document.createElement("div")
        outputdiv.classList.add("Output")
        document.querySelector("main").insertBefore(outputdiv, document.querySelector(".Warning"))
    }
    if (type == 'Title'){
        const titleElement = document.createElement('span')
        titleElement.textContent = text
        outputdiv.append(titleElement)
    }else if (type == 'Error') {
        const codeElement = document.createElement('pre')
        outputdiv.append(codeElement)
        codeElement.textContent = text
    }else if (type == 'DownloadLink'){
        const link = document.createElement('a')
        link.textContent = text
        link.href = href
        link.download = downloadname
        outputdiv.append(link)
    }
}

function Downl(blob, filename){
    if (blob == undefined || blob == null || blob == ''){return;}
    const blobUrl = URL.createObjectURL(blob)
    Output(`Download ${filename} (${(blob.size / 1000 / 1000).toFixed(2)}MB)`, "DownloadLink", blobUrl, filename)
    const a = document.createElement('a')
    a.download = filename
    a.href = blobUrl
    a.click()
    a.remove()
}

/*
fetch("/websiteStatus.txt")
.then((response) => response.text().then((value) => {if(!value == 'Disabled'){document.querySelector('main').removeAttribute('hidden')}else{
    const div = document.createElement('div')
    div.style = 'margin: 0 auto'
    const header = document.createElement('h1')
    header.style = 'text-align: center'
    header.textContent = "🛠 Website is under maintenance 🛠"
    div.append(header)
    const header2 = document.createElement('h3')
    header2.style = 'text-align: center'
    header2.textContent = "Check back later!"
    div.append(header2)
    document.body.append(div)
}}))
*/

document.querySelector("main").removeAttribute("hidden")

FileInputButton.addEventListener('input', function(event){
    if (FileInputButton.files.length == 0){
        alert("Please select a packaged project")
        return;
    }
    document.querySelector("form").setAttribute("disabled", '')
    //ProcessFile(event.target.files[0]).then((output) => Downl(output, event.target.files[0].name))
    /*
    ProcessFile(event.target.files[0]).then((output) => {
        const read = (blob) => {
            const reader = new FileReader()
            reader.onloadend = () => {
                window.open(`https://turbowarp.org?project_url=${reader.result}`)
            }
            reader.readAsDataURL(blob)
        }
        read(output)
        
    })
    */
    ProcessFile(event.target.files[0])
    /* const getfile = new FileReader()
        getfile.onload = function(loaded){
            Obf(getfile.result).then((output) => Downl(output, "Output.sb3"))
        }
    Output(`Processing ${FileInputButton.files[0].name}...`, "Title")
    getfile.readAsText(FileInputButton.files[0]) */
})