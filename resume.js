document.addEventListener("DOMContentLoaded", function () {
  const resumeSection = document.createElement("section");
  resumeSection.style.marginTop = "40px";

  resumeSection.innerHTML = `
    <div class="exp-header"><h3>Professional Experience</h3></div>
    <div class="section-content">
      <h4>Partner & Director of Sales & Client Success | 10XTEK</h4>
      <p><strong>Oct 2024 – Present</strong> (Remote, MN-based Clients)</p>
      <ul>
        <li>Closed $200K+ in B2B business within 6 months through strategic outreach and onboarding.</li>
        <li>Led client success strategies for SMBs integrating custom software solutions.</li>
      </ul>

      <h4>Chief Marketing Officer | Nebula Education</h4>
      <p><strong>Jan 2018 – Jun 2023</strong> (China & Remote)</p>
      <ul>
        <li>Launched viral content and livestreams growing community to 200K+ followers.</li>
        <li>Led multi-platform brand strategy and influencer-style education campaigns.</li>
      </ul>

      <h4>Chief Education Officer | Nebula Education</h4>
      <p><strong>Nov 2017 – Jun 2023</strong></p>
      <ul>
        <li>Designed 11 educational products, increasing retention and referrals.</li>
        <li>Oversaw team hiring, curriculum, student success, and program innovation.</li>
      </ul>

      <h4>Substitute Teacher | Hastings ISD 200 / Kelly Education</h4>
      <p><strong>Mar 2023 – Present</strong></p>
      <ul>
        <li>Led K–12 classrooms, adapting to a range of subjects and student needs with ease.</li>
      </ul>

      <h4>University Instructor | Southwest University, China</h4>
      <p><strong>2014 – 2017</strong></p>
      <ul>
        <li>Taught English to graduate and undergraduate students; led speaking and writing workshops.</li>
      </ul>
    </div>
  `;

  document.body.appendChild(resumeSection);
});
