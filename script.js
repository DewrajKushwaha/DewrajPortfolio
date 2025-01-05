var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Backend Developer", "Full Stack Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


function addSkills(iconName, name, clr = "#0e5", per = '50%') {
    const div = document.createElement('div')
    div.className = 'bar'
    const i = document.createElement('i')
    i.className = 'bx bxl-' + iconName
    i.style.color = clr
    const div2 = document.createElement('div')
    div2.className = 'info'
    const span = document.createElement('span')
    span.textContent = name.toUpperCase();
    const div3 = document.createElement('div');
    div3.className = 'progress-line ' + iconName.toLowerCase();
    div3.innerHTML = `<span style="width:${per}"></span>`
    const style = document.createElement('style');
    style.textContent = `
    .progress-line.${iconName.toLowerCase()} span::after{
        content:'${per}'
    }
    `;

    document.head.appendChild(style);

    div2.appendChild(span);
    div.appendChild(i);
    div.appendChild(div2);
    div.appendChild(div3);


    document.querySelector('.Technical-bar').appendChild(div);

}
addSkills('css3', 'css', '#147bbc', '90%')
addSkills('python', 'python', '#c32ec9', '75%')
addSkills('javascript', 'javascript', '#f7dc6f', '97%')
addSkills('html5', 'html5', '#f1c40f', '93%')
addSkills('mysql', 'mysql', '#c32ec9', '45%')
addSkills('react', 'react', '#f1c40f', '98%')
addSkills('nodejs', 'nodejs', '#147bbc', '76%')
addSkills('mongodb', 'mongodb', '#f7dc6f', '87%')

var count=2
function professional(per = "50%", name) {
    const div = document.getElementById("professional");
    div.insertAdjacentHTML('beforeend', 
        `<div class="radial-bar">
                    <svg x="0px" y="0px" viewBox="0 0 200 200">
                        <circle class="progress-bar" cx="100" cy="100" r="80">                      </circle>
                        <circle class="path path-${count}" cx="100" cy="100" r="80">                      </circle>
                    </svg>
                    <div class="percentage">${per}</div>
                    <div class="text">${name}</div>
                </div>`
    )
    count +=1;

}
professional('65%', 'Teamwork');
professional('45%', 'Communication');
professional('55%', 'Problem Solving');
professional('5%', 'Leadership');
professional('61%', 'Time Management');