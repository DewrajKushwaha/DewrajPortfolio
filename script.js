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
    const skil = document.createElement('div');
    skil.className = 'skil';
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
    skil.appendChild(i)
    skil.appendChild(div2)
    // div.appendChild(i);
    div.appendChild(skil);
    div.appendChild(div3);

    document.querySelector('.Technical-bar').appendChild(div);

}
addSkills('css3', 'css', '#147bbc', '63%')
addSkills('python', 'python', '#ffde57', '65%')
addSkills('javascript', 'javascript', '#f7dc6f', '57%')
addSkills('html5', 'html5', '#f1c40f', '75%')
addSkills('react', 'react', '#f1c40f', '55%')
addSkills('nodejs', 'nodejs', '#147bbc', '65%')
addSkills('mongodb', 'mongodb', '#00ed64', '57%')

var count = 2
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
    count += 1;

}
professional('85%', 'Teamwork');
professional('78%', 'Communication');
professional('75%', 'Problem Solving');
professional('65%', 'Leadership');
professional('92%', 'Time Management');

const open = document.getElementById('open');
const close = document.getElementById('close');

function toggleMenu() {
    if (open.style.display === 'block') {
        open.style.display = 'none'
        close.style.display = 'block'
        document.getElementById('navbar').style.display = 'block'
    }
    else {
        open.style.display = 'block'
        close.style.display = 'none'
        document.getElementById('navbar').style.display = 'none'
    }
}

function validEmail(email) {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return regex.test(email)
}

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('emailid').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('textarea').value;

    if (!validEmail(email)) {
        document.getElementById('email-error').style.display = 'block'
        return;
    } else {
        document.getElementById('email-error').style.display = 'none'
    }

    emailjs.send('service_y1x1tzb', 'template_dhs5tb3', {
        from_name: name,
        email_id: email,
        subject: subject,
        message: message
    })
        .then(function (response) {
            console.log('SUCCESS', response.status, response.text);
            alert('Message sent successfully')
        }, function (err) {
            console.log('FAILED to send email', err);
            alert('Sorry Failed to send message. Please try again.')
        })
})