// Sample Job Data
const jobs = [
    { title: "Web Developer", location: "Mumbai", company: "TechCorp" },
    { title: "Software Engineer", location: "Delhi", company: "InnoSoft" },
    { title: "UI/UX Designer", location: "Bangalore", company: "Designify" },
    { title: "Backend Developer", location: "Pune", company: "CodeWorks" },
    { title: "Data Analyst", location: "Hyderabad", company: "DataMax" }
];

// Function to Search Jobs
function searchJobs() {
    const jobTitle = document.getElementById("job-title").value.toLowerCase();
    const location = document.getElementById("location").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Filter jobs based on input
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(jobTitle) &&
        job.location.toLowerCase().includes(location)
    );

    // Display results
    if (filteredJobs.length > 0) {
        filteredJobs.forEach(job => {
            const jobElement = document.createElement("div");
            jobElement.innerHTML = `
                <h3>${job.title}</h3>
                <p>Company: ${job.company}</p>
                <p>Location: ${job.location}</p>
            `;
            resultsDiv.appendChild(jobElement);
        });
    } else {
        resultsDiv.innerHTML = "<p>No jobs found. Try different keywords.</p>";
    }
}
