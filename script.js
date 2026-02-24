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