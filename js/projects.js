const data = axios.get("./projects.json");

data.then((res)=>{
    if(res.status == 200){
        const categorys = document.getElementById('category');
        const projects = document.getElementById('projects');
        for (const index in res.data.category) {
            let tmp = document.createElement("li");
            tmp.id = index;
            console.log(res.data.category[index])
            tmp.appendChild(document.createTextNode(res.data.category[index].name));
            tmp.dataset.filter = "."+res.data.category[index].filter
            categorys.appendChild(tmp);
        }
        for (const project of res.data.projects) {
            let icon1 = document.createElement("i");
            icon1.dataset.icon = "5";
            icon1.className="icon";

            let icon2 = document.createElement("i");
            icon2.dataset.icon = "W";
            icon2.className="icon";

            let link = document.createElement('a')
            link.className="link";
            link.href="#";
            link.appendChild(icon1)

            let linkImg = document.createElement('a')
            linkImg.className="image-link lightbox";
            linkImg.href="images/"+project.images[0];
            linkImg.appendChild(icon2)

            let workLinkDiv = document.createElement('div')
            workLinkDiv.className="work-links"

            workLinkDiv.appendChild(link)
            workLinkDiv.appendChild(linkImg)

            let para = document.createElement('p')
            let title = document.createTextNode(project.name)
            para.appendChild(title);

            let workInfoDiv = document.createElement('div')
            workInfoDiv.className="work-info"
            workInfoDiv.appendChild(para)
            workInfoDiv.appendChild(workLinkDiv)

            let OverInDiv = document.createElement('div')
            OverInDiv.className="overlay-in"
            OverInDiv.appendChild(workInfoDiv)

            let workOverDiv = document.createElement('div')
            workOverDiv.className="work-overlay"
            workOverDiv.appendChild(OverInDiv)

            let img = document.createElement("img");
            img.src="images/"+project.images[0];

            let workInnerDiv = document.createElement('div')
            workInnerDiv.className="work-inner";
            workInnerDiv.appendChild(workOverDiv)
            workInnerDiv.appendChild(img)

            let mainDiv = document.createElement("div")
            mainDiv.className="single_item link col-md-4 col-sm-6 "+(project.category).join(" ");

            mainDiv.appendChild(workInnerDiv);
            projects.appendChild(mainDiv);
        }
    }else{
        console.log("we can't load projects")
    }
})