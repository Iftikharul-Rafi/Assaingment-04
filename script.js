// Job Data

const jobs = [
    {
        id: 1,
        company: "Mobile First Corp",
        position: "React Native Developer",
        location: "Remote",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build cross-platform mobile applications used by millions worldwide.",
        status: "pending"
    },
    {
        id: 2,
        company: "WebFlow Agency",
        position: "Web Designer",
        location: "Los Angeles, CA",
        type: "Part-time",
        salary: "$80,000 - $120,000",
        description: "Design modern websites for global clients.",
        status: "pending"
    },
    {
        id: 3,
        company: "DataViz Solutions",
        position: "Data Specialist",
        location: "Boston, MA",
        type: "Full-time",
        salary: "$125,000 - $165,000",
        description: "Create advanced dashboards and data visualizations.",
        status: "pending"
    },
    {
        id: 4,
        company: "CloudFirst Inc",
        position: "Backend Developer",
        location: "Seattle, WA",
        type: "Full-time",
        salary: "$140,000 - $190,000",
        description: "Develop scalable APIs and cloud services.",
        status: "pending"
    },
    {
        id: 5,
        company: "Innovation Labs",
        position: "UI/UX Engineer",
        location: "Austin, TX",
        type: "Full-time",
        salary: "$110,000 - $150,000",
        description: "Design user-friendly interfaces for SaaS products.",
        status: "pending"
    },
    {
        id: 6,
        company: "MegaCorp Solutions",
        position: "JavaScript Developer",
        location: "New York, NY",
        type: "Full-time",
        salary: "$130,000 - $170,000",
        description: "Build enterprise-grade web applications.",
        status: "pending"
    },
    {
        id: 7,
        company: "StartupXYZ",
        position: "Full Stack Engineer",
        location: "Remote",
        type: "Full-time",
        salary: "$120,000 - $160,000",
        description: "Work on high-growth startup platform.",
        status: "pending"
    },
    {
        id: 8,
        company: "TechCorp Industries",
        position: "Senior Frontend Developer",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$130,000 - $175,000",
        description: "Build scalable React applications.",
        status: "pending"
    }
];


// Variables

let currentTab = "all";

const container = document.getElementById("jobContainer");
const emptyState = document.getElementById("emptyState");

const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const tabCount = document.getElementById("tabCount");

const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");


// Render Jobs

function renderJobs() {

    container.innerHTML = "";

    let filteredJobs = [];

    for (let i = 0; i < jobs.length; i++) {

        if (currentTab === "all") {
            filteredJobs.push(jobs[i]);
        }
        else if (jobs[i].status === currentTab) {
            filteredJobs.push(jobs[i]);
        }

    }

    // tab count
    if (currentTab === "all") {
        tabCount.innerText = jobs.length + " jobs";
    }
    else {
        tabCount.innerText = filteredJobs.length + " of " + jobs.length;
    }

    if (filteredJobs.length === 0) {
        emptyState.classList.remove("hidden");
    }
    else {
        emptyState.classList.add("hidden");
    }

    for (let i = 0; i < filteredJobs.length; i++) {

        let job = filteredJobs[i];

        const div = document.createElement("div");
        div.className = "job-card";

        let statusHTML = "";

        if (job.status === "interview") {
            statusHTML = `<div class="status interview">INTERVIEW</div>`;
        }
        else if (job.status === "rejected") {
            statusHTML = `<div class="status rejected">REJECTED</div>`;
        }

        div.innerHTML = `
<h3>${job.company}</h3>
<div class="position">${job.position}</div>
<div class="meta">${job.location} • ${job.type} • ${job.salary}</div>

${statusHTML}

<p class="description">${job.description}</p>

<div class="buttons">
<button class="action interview-btn">INTERVIEW</button>
<button class="action rejected-btn">REJECTED</button>
</div>

<button class="action delete-btn">
<i class="fa-solid fa-trash-can"></i>
</button>
`;


        div.querySelector(".interview-btn").onclick = function () {
            job.status = "interview";
            updateCounts();
            renderJobs();
        };

        div.querySelector(".rejected-btn").onclick = function () {
            job.status = "rejected";
            updateCounts();
            renderJobs();
        };

        div.querySelector(".delete-btn").onclick = function () {

            for (let j = 0; j < jobs.length; j++) {
                if (jobs[j].id === job.id) {
                    jobs.splice(j, 1);
                    break;
                }
            }

            updateCounts();
            renderJobs();
        };

        container.appendChild(div);

    }

}
function updateCounts() {

    let interview = 0;
    let rejected = 0;

    for (let i = 0; i < jobs.length; i++) {

        if (jobs[i].status === "interview") {
            interview++;
        }
        else if (jobs[i].status === "rejected") {
            rejected++;
        }

    }

    totalCount.innerText = jobs.length;
    interviewCount.innerText = interview;
    rejectedCount.innerText = rejected;

}


// Tab Buttons

function removeActive() {
    allBtn.classList.remove("active");
    interviewBtn.classList.remove("active");
    rejectedBtn.classList.remove("active");
}

allBtn.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
    currentTab = "all";
    renderJobs();
});

interviewBtn.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
    currentTab = "interview";
    renderJobs();
});

rejectedBtn.addEventListener("click", function () {
    removeActive();
    this.classList.add("active");
    currentTab = "rejected";
    renderJobs();
});



updateCounts();
renderJobs();