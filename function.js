// Code By Webdevtrick ( https://webdevtrick.com ) 
$(document).ready(function(){ 
    $(".scroll").click(function(event){
        event.preventDefault();
        $("html,body").animate({scrollTop:$(this.hash).offset().top}, 500);
        $('.navbar-default a').removeClass('selected');
        $(this).addClass('selected');
  });
});

/* ========= Interactive Enhancements (Resume Driven) ========= */
(function() {
  const DATA = {
    skills: {
      "Languages": ["Java","C++","JavaScript","Python"],
      "Frameworks & Libraries": ["SpringBoot","REST APIs","ReactJs","GraphQL"],
      "Other": ["MySQL","Redis","Elasticsearch","Git","Postman","Jira","Docker","Kafka"]
    },
    experience: [
      {
        company: "Microsoft",
        location: "Hyderabad",
        role: "Software Engineer (SWE) - L60",
        period: "Apr 2025 – Present",
        bullets: [
          "Designed & deployed distributed systems in Unified Support Pricing (C+AI)",
          "Developed single-source Offer Pricing configuration engine",
            "Implemented CosmosDB configuration and end-to-end deployment",
            "Optimized performance with Logs & Application Insights",
            "Tech: C#, .NET, MySQL, CosmosDB, Azure"
        ]
      },
      {
        company: "OfBusiness",
        location: "Gurugram",
        role: "Software Development Engineer (Full Stack)",
        period: "Jul 2023 – Mar 2025",
        bullets: [
          "Enhanced Oasys e-commerce CRM platform for raw materials",
          "Improved Invoice & Billing System (+20% efficiency) using JMS events & rate limiting",
          "Led Organisation Onboarding flow using design patterns (Factory, Observer, Builder)",
          "Built & deployed 50+ REST APIs (Jenkins CI/CD)",
          "Resolved 50+ production issues; improved stability",
          "Tech: Java, SpringBoot, ElasticSearch, MySQL, ReactJs"
        ]
      }
    ],
    otherExperience: [
      {
        company: "Accern AI",
        role: "SDE Intern (Full Stack)",
        period: "Jan 2023 – Jul 2023",
        bullets: ["Full stack feature development", "Worked across pipelines & UI"]
      },
      {
        company: "Accern AI",
        role: "Summer Intern (CI/CD)",
        period: "May 2022 – Jul 2022",
        bullets: ["Implemented CI/CD pipeline improvements"]
      },
      {
        company: "GitHub Project",
        role: "Recommender System (Energy Prediction)",
        period: "Jan 2022 – Apr 2022",
        bullets: ["Built NLP based recommender; improved prediction accuracy"]
      },
      {
        company: "Research - CS Dept BITS Pilani",
        role: "Research (K-means & K-medoid Optimization)",
        period: "Jan 2021 – Dec 2021",
        bullets: ["Explored clustering optimization strategies"]
      },
      {
        company: "Amazon",
        role: "ML Summer School Cohort",
        period: "Oct 2021 – Nov 2021",
        bullets: ["Selected participant in ML summer school"]
      }
    ],
    projects: [
      {
        title: "Expense Management System",
        year: "2023",
        stack: "Java · SpringBoot · ReactJs · REST · MySQL",
        desc: "Led team delivering travel & expense platform; streamlined approval workflow & reduced processing time."
      },
      {
        title: "Recommender Systems for Energy Consumption",
        year: "2022",
        stack: "Python · NLP · ML · Statistics",
        desc: "Implemented NLP-based models improving energy prediction accuracy."
      }
    ],
    achievements: [
      "1808 (4★) Max Rating — CodeChef",
      "ICPC Regionalist"
    ],
    email: "parthsarthineema@gmail.com"
  };

  /* --------- Helpers --------- */
  function el(tag, cls, html) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  }

  /* --------- Skills Render --------- */
  function renderSkills() {
    const c = document.getElementById('skillsContainer');
    if (!c) return;
    c.innerHTML = '';
    Object.keys(DATA.skills).forEach(group => {
      const wrap = el('div','skill-category');
      wrap.appendChild(el('h2','', `<strong>${group}</strong>`));
      const fragment = document.createDocumentFragment();
      DATA.skills[group].forEach(s=>{
        const pill = el('div','skill-pill', s);
        pill.dataset.skill = s.toLowerCase();
        fragment.appendChild(pill);
      });
      wrap.appendChild(fragment);
      c.appendChild(wrap);
    });
  }

  /* --------- Experience Render (two timelines) --------- */
  function buildTimeline(items, targetId) {
    const parent = document.getElementById(targetId);
    if (!parent) return;
    const ul = el('ul','dynamic-timeline');
    items.forEach(obj=>{
      const li = el('li');
      const dot = el('span','dot');
      li.appendChild(dot);
      const card = el('div','timeline-card');
      card.appendChild(el('div','timeline-meta', obj.period + (obj.location ? ' · ' + obj.location : '')));
      card.appendChild(el('h3','', obj.company));
      card.appendChild(el('h4','', obj.role));
      obj.bullets.forEach(b=>{
        card.appendChild(el('p','timeline-desc', b));
      });
      li.appendChild(card);
      ul.appendChild(li);
    });
    parent.innerHTML = '';
    parent.appendChild(ul);
  }

  /* --------- Projects Render --------- */
  function renderProjects() {
    const container = document.getElementById('projectsContainer');
    if (!container) return;
    const row = el('div','row');
    DATA.projects.forEach(p=>{
      const col = el('div','col-md-6 project-col');
      const box = el('div','project-box');
      box.appendChild(el('h3','', `<strong>${p.title}</strong>`));
      box.appendChild(el('div','project-tags', p.year + ' • ' + p.stack));
      box.appendChild(el('div','project-desc', p.desc));
      col.appendChild(box);
      row.appendChild(col);
    });
    container.innerHTML = '';
    container.appendChild(row);
  }

  /* --------- Achievements --------- */
  function renderAchievements() {
    const ul = document.getElementById('achievementsList');
    if (!ul) return;
    ul.innerHTML = '';
    DATA.achievements.forEach(a=>{
      ul.appendChild(el('li','', `<strong>${a}</strong>`));
    });
  }

  // Removed skill filter and theme toggle per latest request.

  /* --------- Back To Top --------- */
  function setupBackToTop() {
    const b = document.getElementById('backToTop');
    if (!b) return;
    window.addEventListener('scroll', ()=>{
      if (window.scrollY > 400) b.style.display='flex'; else b.style.display='none';
    });
    b.addEventListener('click', ()=>window.scrollTo({top:0, behavior:'smooth'}));
  }

  /* --------- Reveal On Scroll --------- */
  function setupReveal() {
    const obs = new IntersectionObserver(entries=>{
      entries.forEach(e=>{
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, {threshold: .15});
    document.querySelectorAll('.reveal').forEach(r=>obs.observe(r));
  }

  // Resume now opens directly via external Google Drive link; modal logic removed.

  /* --------- Copy Email --------- */
  function setupEmailCopy() {
    const btn = document.getElementById('copyEmail');
    const disp = document.getElementById('emailDisplay');
    const note = document.getElementById('emailCopied');
    function copy() {
      const email = DATA.email;
      navigator.clipboard.writeText(email).then(()=>{
        note.style.display='inline';
        setTimeout(()=>note.style.display='none', 1600);
      });
    }
    if (btn) btn.addEventListener('click', copy);
    if (disp) disp.addEventListener('click', copy);
  }

  /* --------- Init --------- */
  function init() {
    renderSkills();
    buildTimeline(DATA.experience, 'experienceTimeline');
    buildTimeline(DATA.otherExperience, 'otherExperience');
    renderProjects();
    renderAchievements();
  // (Skill filter & theme toggle removed)
    setupBackToTop();
    setupReveal();
    setupEmailCopy();

    // Profile image fallback handling
    const img = document.getElementById('profilePhoto');
    const fallback = document.getElementById('profileFallback');
    if (img && fallback) {
      function showFallback() { fallback.style.display='flex'; img.style.visibility='hidden'; }
      function hideFallback() { fallback.style.display='none'; img.style.visibility='visible'; }
      img.addEventListener('error', showFallback);
      img.addEventListener('load', ()=> { if (img.naturalWidth < 40) showFallback(); else hideFallback(); });
      // Trigger for cached or immediate state
      if (img.complete) {
        if (img.naturalWidth) hideFallback(); else showFallback();
      }
    }
  }

  document.addEventListener('DOMContentLoaded', init);
})();