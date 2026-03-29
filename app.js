/* Choolwe & Komana's Date Planner */

const DEFAULT_DATES = [
  { id: 1, title: "Bowling", description: "Strike up some fun and friendly competition!", cost: 2, icon: "bowling" },
  { id: 2, title: "Pottery", description: "Get your hands dirty and make something beautiful together", cost: 3, icon: "pottery" },
  { id: 3, title: "Picnic", description: "Pack snacks, a blanket, and good vibes — nature awaits!", cost: 1, icon: "picnic" },
  { id: 4, title: "Lunch Date", description: "Keep it casual, keep it cute — a midday escape together", cost: 2, icon: "lunch" },
  { id: 5, title: "Fancy Dinner", description: "Dress up, clink glasses, and pretend you're in a rom-com", cost: 5, icon: "dinner" },
  { id: 6, title: "Roller Skating", description: "Hold hands and try not to fall (or fall together!)", cost: 2, icon: "skating" },
  { id: 7, title: "Movie Date", description: "Popcorn, comfy seats, and an excuse to hold hands in the dark", cost: 2, icon: "movie" },
  { id: 8, title: "Paint & Sip", description: "Sip wine, paint masterpieces, and laugh at each other's art", cost: 3, icon: "paint" },
  { id: 9, title: "Sleepover", description: "Pajamas, snacks, movies, pillow fights — be kids again!", cost: 1, icon: "sleepover" },
  { id: 10, title: "Arcade Date", description: "Battle it out for the high score and win stuffed animals", cost: 2, icon: "arcade" },
  { id: 11, title: "Swimming", description: "Make a splash together — pool, beach, or secret spot!", cost: 1, icon: "swimming" },
  { id: 12, title: "Go-Karting", description: "Rev your engines and race to see who's the real champion!", cost: 3, icon: "gokart" },
  { id: 13, title: "Karaoke", description: "Sing your hearts out — bonus points for duets!", cost: 2, icon: "karaoke" },
  { id: 14, title: "Art / Museum", description: "Wander through exhibits and pretend to be art critics", cost: 2, icon: "museum" },
  { id: 15, title: "Cooking Together", description: "Teamwork in the kitchen — messy aprons guaranteed!", cost: 2, icon: "cooking" },
  { id: 16, title: "Ice Cream Date", description: "Share scoops, try weird flavors, and get brain freeze together", cost: 1, icon: "icecream" },
  { id: 17, title: "Basketball", description: "Shoot hoops and pretend you're both NBA stars", cost: 1, icon: "basketball" },
  { id: 18, title: "Camping", description: "Stars, campfire, s'mores, and just the two of you", cost: 2, icon: "camping" },
];

// SVG Illustrations
const ILL = {
  bowling: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="20" cy="18" r="5" fill="#8B5CF6"/><path d="M20 23c-4 0-7 3-7 7v8h14v-8c0-4-3-7-7-7z" fill="#A78BFA"/><circle cx="44" cy="18" r="5" fill="#3B82F6"/><path d="M44 23c-4 0-7 3-7 7v8h14v-8c0-4-3-7-7-7z" fill="#60A5FA"/><circle cx="32" cy="50" r="6" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/><circle cx="30" cy="48" r="1.2" fill="#D97706"/><circle cx="34" cy="48" r="1.2" fill="#D97706"/><circle cx="32" cy="52" r="1.2" fill="#D97706"/><rect x="48" y="44" width="3" height="10" rx="1.5" fill="#34D399"/><rect x="53" y="42" width="3" height="12" rx="1.5" fill="#34D399"/><rect x="58" y="44" width="3" height="10" rx="1.5" fill="#34D399"/></svg>`,
  pottery: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="22" cy="16" r="5" fill="#8B5CF6"/><path d="M22 21c-3.5 0-6 2.5-6 6v6h12v-6c0-3.5-2.5-6-6-6z" fill="#A78BFA"/><circle cx="42" cy="16" r="5" fill="#3B82F6"/><path d="M42 21c-3.5 0-6 2.5-6 6v6h12v-6c0-3.5-2.5-6-6-6z" fill="#60A5FA"/><ellipse cx="32" cy="52" rx="10" ry="4" fill="#92400E"/><path d="M24 42c0-3 3-6 8-6s8 3 8 6v6c0 2-3 4-8 4s-8-2-8-4v-6z" fill="#D97706" stroke="#92400E" stroke-width="1"/></svg>`,
  picnic: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><path d="M4 44h56l-4 16H8L4 44z" fill="#8B5CF6" opacity="0.2"/><rect x="10" y="40" width="44" height="4" rx="2" fill="#A78BFA" opacity="0.4"/><circle cx="20" cy="22" r="5" fill="#8B5CF6"/><path d="M20 27c-3 0-5.5 2-5.5 5v8h11v-8c0-3-2.5-5-5.5-5z" fill="#A78BFA"/><circle cx="44" cy="22" r="5" fill="#3B82F6"/><path d="M44 27c-3 0-5.5 2-5.5 5v8h11v-8c0-3-2.5-5-5.5-5z" fill="#60A5FA"/><rect x="28" y="34" width="8" height="6" rx="2" fill="#F59E0B"/><circle cx="32" cy="32" r="3" fill="#EF4444"/></svg>`,
  lunch: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="20" cy="18" r="5" fill="#8B5CF6"/><path d="M20 23c-3.5 0-6 2.5-6 6v10h12v-10c0-3.5-2.5-6-6-6z" fill="#A78BFA"/><circle cx="44" cy="18" r="5" fill="#3B82F6"/><path d="M44 23c-3.5 0-6 2.5-6 6v10h12v-10c0-3.5-2.5-6-6-6z" fill="#60A5FA"/><ellipse cx="32" cy="48" rx="12" ry="6" fill="#1E1E38" stroke="#2A2A4A" stroke-width="1"/><circle cx="28" cy="46" r="3" fill="#EF4444"/><circle cx="34" cy="44" r="2.5" fill="#34D399"/></svg>`,
  dinner: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="20" cy="16" r="5" fill="#8B5CF6"/><path d="M15 22c0 0 1-1 5-1s5 1 5 1v5c0 2-2 4-5 4s-5-2-5-4v-5z" fill="#A78BFA"/><rect x="17" y="30" width="6" height="10" rx="2" fill="#1E1E38"/><circle cx="44" cy="16" r="5" fill="#3B82F6"/><path d="M39 22c0 0 1-1 5-1s5 1 5 1v5c0 2-2 4-5 4s-5-2-5-4v-5z" fill="#60A5FA"/><rect x="41" y="30" width="6" height="10" rx="2" fill="#1E1E38"/><path d="M28 40h8l2 4H26l2-4z" fill="#FBBF24"/><ellipse cx="32" cy="54" rx="8" ry="2" fill="#2A2A4A"/><circle cx="32" cy="52" r="6" fill="#1E1E38" stroke="#2A2A4A" stroke-width="1"/></svg>`,
  skating: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="22" cy="14" r="5" fill="#8B5CF6"/><path d="M22 19c-3 0-5 2-5 5v10l3 2 2-2v-3l3 5h-1l4 2" stroke="#A78BFA" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="42" cy="14" r="5" fill="#3B82F6"/><path d="M42 19c-3 0-5 2-5 5v10l3 2 2-2v-3l3 5h-1l4 2" stroke="#60A5FA" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="20" cy="54" rx="6" ry="2" fill="#34D399"/><ellipse cx="44" cy="54" rx="6" ry="2" fill="#F59E0B"/><circle cx="14" cy="54" r="2" fill="#2A2A4A"/><circle cx="26" cy="54" r="2" fill="#2A2A4A"/><circle cx="38" cy="54" r="2" fill="#2A2A4A"/><circle cx="50" cy="54" r="2" fill="#2A2A4A"/></svg>`,
  movie: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><rect x="8" y="30" width="48" height="28" rx="4" fill="#1E1E38"/><rect x="12" y="34" width="40" height="20" rx="2" fill="#2A2A4A"/><polygon points="28,40 28,50 38,45" fill="#A78BFA" opacity="0.8"/><circle cx="18" cy="20" r="5" fill="#8B5CF6"/><path d="M18 25v8" stroke="#A78BFA" stroke-width="5" stroke-linecap="round"/><circle cx="46" cy="20" r="5" fill="#3B82F6"/><path d="M46 25v8" stroke="#60A5FA" stroke-width="5" stroke-linecap="round"/><rect x="29" y="22" width="6" height="10" rx="2" fill="#F59E0B"/></svg>`,
  paint: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="20" cy="16" r="5" fill="#8B5CF6"/><path d="M20 21c-3 0-5 2-5 5v8h10v-8c0-3-2-5-5-5z" fill="#A78BFA"/><circle cx="44" cy="16" r="5" fill="#3B82F6"/><path d="M44 21c-3 0-5 2-5 5v8h10v-8c0-3-2-5-5-5z" fill="#60A5FA"/><rect x="24" y="36" width="16" height="20" rx="1" fill="#1E1E38" stroke="#2A2A4A" stroke-width="1"/><circle cx="28" cy="44" r="3" fill="#8B5CF6" opacity="0.7"/><circle cx="36" cy="42" r="4" fill="#3B82F6" opacity="0.6"/><circle cx="32" cy="50" r="2.5" fill="#F59E0B" opacity="0.7"/></svg>`,
  sleepover: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><rect x="8" y="34" width="48" height="20" rx="4" fill="#1E1E38"/><rect x="10" y="42" width="44" height="14" rx="3" fill="#2A2A4A"/><circle cx="24" cy="38" r="4" fill="#8B5CF6"/><circle cx="40" cy="38" r="4" fill="#3B82F6"/><text x="46" y="20" font-size="10" fill="#A78BFA" opacity="0.5">z</text><text x="50" y="16" font-size="8" fill="#A78BFA" opacity="0.35">z</text><text x="53" y="13" font-size="6" fill="#A78BFA" opacity="0.25">z</text></svg>`,
  arcade: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="22" cy="14" r="5" fill="#8B5CF6"/><path d="M22 19c-3 0-5 2-5 5v8h10v-8c0-3-2-5-5-5z" fill="#A78BFA"/><circle cx="42" cy="14" r="5" fill="#3B82F6"/><path d="M42 19c-3 0-5 2-5 5v8h10v-8c0-3-2-5-5-5z" fill="#60A5FA"/><rect x="14" y="38" width="16" height="20" rx="4" fill="#1E1E38"/><circle cx="18" cy="46" r="2" fill="#EC4899"/><rect x="21" y="43" width="6" height="2" rx="1" fill="#34D399"/><rect x="34" y="38" width="16" height="20" rx="4" fill="#1E1E38"/><circle cx="46" cy="46" r="2" fill="#F59E0B"/><rect x="37" y="43" width="6" height="2" rx="1" fill="#8B5CF6"/></svg>`,
  swimming: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><path d="M0 40Q8 36 16 40Q24 44 32 40Q40 36 48 40Q56 44 64 40V64H0Z" fill="#3B82F6" opacity="0.15"/><path d="M0 44Q8 40 16 44Q24 48 32 44Q40 40 48 44Q56 48 64 44V64H0Z" fill="#3B82F6" opacity="0.25"/><circle cx="22" cy="22" r="5" fill="#8B5CF6"/><path d="M18 30h8l-1 8h-6l-1-8z" fill="#A78BFA"/><circle cx="44" cy="22" r="5" fill="#3B82F6"/><path d="M40 30h8l-1 8h-6l-1-8z" fill="#60A5FA"/></svg>`,
  gokart: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="18" cy="20" r="5" fill="#8B5CF6"/><rect x="8" y="32" width="24" height="12" rx="4" fill="#A78BFA"/><circle cx="12" cy="48" r="4" fill="#1E1E38"/><circle cx="12" cy="48" r="2" fill="#2A2A4A"/><circle cx="28" cy="48" r="4" fill="#1E1E38"/><circle cx="28" cy="48" r="2" fill="#2A2A4A"/><circle cx="46" cy="20" r="5" fill="#3B82F6"/><rect x="36" y="32" width="24" height="12" rx="4" fill="#60A5FA"/><circle cx="40" cy="48" r="4" fill="#1E1E38"/><circle cx="40" cy="48" r="2" fill="#2A2A4A"/><circle cx="56" cy="48" r="4" fill="#1E1E38"/><circle cx="56" cy="48" r="2" fill="#2A2A4A"/></svg>`,
  karaoke: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="22" cy="18" r="5" fill="#8B5CF6"/><path d="M22 23c-3 0-5 2-5 5v10h10v-10c0-3-2-5-5-5z" fill="#A78BFA"/><circle cx="42" cy="18" r="5" fill="#3B82F6"/><path d="M42 23c-3 0-5 2-5 5v10h10v-10c0-3-2-5-5-5z" fill="#60A5FA"/><rect x="29" y="32" width="6" height="18" rx="3" fill="#1E1E38"/><ellipse cx="32" cy="30" rx="5" ry="6" fill="#2A2A4A" stroke="#353560" stroke-width="1"/><text x="8" y="16" font-size="8" fill="#F59E0B">♪</text><text x="50" y="14" font-size="10" fill="#34D399">♫</text></svg>`,
  museum: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><path d="M12 24h40l-4-8H16l-4 8z" fill="#A78BFA"/><rect x="14" y="24" width="4" height="20" fill="#1E1E38"/><rect x="24" y="24" width="4" height="20" fill="#1E1E38"/><rect x="36" y="24" width="4" height="20" fill="#1E1E38"/><rect x="46" y="24" width="4" height="20" fill="#1E1E38"/><rect x="10" y="44" width="44" height="4" rx="1" fill="#A78BFA"/><circle cx="20" cy="56" r="4" fill="#8B5CF6"/><circle cx="44" cy="56" r="4" fill="#3B82F6"/></svg>`,
  cooking: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="22" cy="16" r="5" fill="#8B5CF6"/><path d="M22 21c-3 0-5 2-5 5v6h10v-6c0-3-2-5-5-5z" fill="#A78BFA"/><circle cx="42" cy="16" r="5" fill="#3B82F6"/><path d="M42 21c-3 0-5 2-5 5v6h10v-6c0-3-2-5-5-5z" fill="#60A5FA"/><ellipse cx="32" cy="50" rx="14" ry="4" fill="#2A2A4A"/><ellipse cx="32" cy="46" rx="12" ry="8" fill="#1E1E38" stroke="#2A2A4A" stroke-width="1"/><path d="M28 40Q30 36 32 40Q34 36 36 40" stroke="#EF4444" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
  icecream: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="22" cy="16" r="5" fill="#8B5CF6"/><path d="M22 21c-3 0-5 2-5 5v8h10v-8c0-3-2-5-5-5z" fill="#A78BFA"/><circle cx="42" cy="16" r="5" fill="#3B82F6"/><path d="M42 21c-3 0-5 2-5 5v8h10v-8c0-3-2-5-5-5z" fill="#60A5FA"/><path d="M26 58l6-22 6 22z" fill="#F59E0B"/><circle cx="29" cy="36" r="5" fill="#A78BFA"/><circle cx="35" cy="36" r="5" fill="#60A5FA"/><circle cx="32" cy="32" r="4.5" fill="#34D399"/></svg>`,
  basketball: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="20" cy="16" r="5" fill="#8B5CF6"/><path d="M20 21c-3 0-5 2-5 5v10h10v-10c0-3-2-5-5-5z" fill="#A78BFA"/><circle cx="44" cy="16" r="5" fill="#3B82F6"/><path d="M44 21c-3 0-5 2-5 5v10h10v-10c0-3-2-5-5-5z" fill="#60A5FA"/><circle cx="32" cy="48" r="8" fill="#F59E0B" stroke="#D97706" stroke-width="1.5"/><path d="M24 48h16M32 40v16" stroke="#D97706" stroke-width="1"/></svg>`,
  camping: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><path d="M32 14L14 50h36L32 14z" fill="#3B82F6" opacity="0.5"/><path d="M32 24L22 50h20L32 24z" fill="#2563EB"/><rect x="30" y="42" width="4" height="8" fill="#92400E"/><circle cx="12" cy="12" r="2.5" fill="#FBBF24"/><circle cx="50" cy="10" r="1" fill="#E8E8F4"/><circle cx="54" cy="14" r="0.6" fill="#E8E8F4"/><circle cx="46" cy="8" r="0.8" fill="#E8E8F4"/></svg>`,
  custom: `<svg viewBox="0 0 64 64" fill="none"><rect width="64" height="64" rx="8" fill="#161628"/><circle cx="32" cy="24" r="10" fill="#8B5CF6" opacity="0.3" stroke="#8B5CF6" stroke-width="1.5"/><text x="32" y="28" text-anchor="middle" font-size="14" fill="#A78BFA">✦</text><circle cx="20" cy="50" r="5" fill="#8B5CF6"/><path d="M20 55v-3" stroke="#A78BFA" stroke-width="3" stroke-linecap="round"/><circle cx="44" cy="50" r="5" fill="#3B82F6"/><path d="M44 55v-3" stroke="#60A5FA" stroke-width="3" stroke-linecap="round"/></svg>`
};

// STATE
let state = { user1Nick: '', user2Nick: '', activeDates: [], completedDates: [], favorites: [], allDates: [], onboarded: false };
let openCardId = null, currentSwapCardId = null, currentRatingDateId = null, editingDateId = null;
let ratingUser1 = 0, ratingUser2 = 0, ratingPhoto = null, editIconData = null, editingCompletedIdx = null, editCompletedPhoto = null;

function saveState() { try { localStorage.setItem('ckDatePlanner', JSON.stringify(state)); } catch(e) {} }
function loadState() { try { const s = localStorage.getItem('ckDatePlanner'); if(s) { state = { ...state, ...JSON.parse(s) }; return true; } } catch(e) {} return false; }

function getDateById(id) { return state.allDates.find(d => d.id === id); }
function renderCost(cost) { let h=''; for(let i=1;i<=5;i++) h+=`<span class="${i>cost?'inactive':''}">$</span>`; return h; }
function nick1() { return state.user1Nick || 'Choolwe'; }
function nick2() { return state.user2Nick || 'Komana'; }

function initApp() {
  const loaded = loadState();
  if (!loaded || !state.onboarded) {
    state.allDates = [...DEFAULT_DATES];
    state.activeDates = DEFAULT_DATES.slice(0, 5).map(d => d.id);
    state.favorites = []; state.completedDates = [];
    openModal('onboarding-modal');
  }
  if (!state.allDates || state.allDates.length === 0) state.allDates = [...DEFAULT_DATES];
  updateHeader(); renderActiveDates(); renderCompletedDates(); bindGlobalEvents();
}

function updateHeader() {
  document.getElementById('header-name1').textContent = nick1();
  document.getElementById('header-name2').textContent = nick2();
}

// RENDER ILLUSTRATION (supports custom uploaded icons)
function renderIll(d) {
  if(d.customIcon) return `<img src="${d.customIcon}" style="width:100%;height:100%;object-fit:cover;border-radius:8px;">`;
  return ILL[d.icon] || ILL.custom;
}

// RENDER ACTIVE DATES
function renderActiveDates() {
  const c = document.getElementById('date-cards');
  document.getElementById('active-count').textContent = state.activeDates.length;
  c.innerHTML = state.activeDates.map((id, i) => {
    const d = getDateById(id); if(!d) return '';
    const fav = state.favorites.includes(id);
    const isCustom = d.icon === 'custom' || d.customIcon;
    return `<div class="date-card" data-id="${id}" draggable="true">
      <div class="date-card-inner">
        <div class="rank-badge rank-${i+1}">${i+1}</div>
        <div class="date-card-illustration">${renderIll(d)}</div>
        <div class="date-card-content">
          <div class="date-card-title">${d.title}</div>
          <div class="date-card-desc">${d.description}</div>
          <div class="date-card-meta">
            <span class="date-card-cost">${renderCost(d.cost)}</span>
            ${isCustom?'<span class="custom-badge">CUSTOM</span>':''}
          </div>
        </div>
        <div class="date-card-actions">
          <button class="card-action-btn fav-btn ${fav?'active':''}" data-id="${id}">${fav?'♥':'♡'}</button>
        </div>
      </div>
      <div class="card-options ${openCardId===id?'open':''}" id="options-${id}">
        <button class="option-btn swap-btn" data-id="${id}"><span class="icon">🔄</span> Swap</button>
        <button class="option-btn edit-btn" data-id="${id}"><span class="icon">✏️</span> Edit</button>
        <button class="option-btn complete-btn" data-id="${id}"><span class="icon">✓</span> Done</button>
      </div>
    </div>`;
  }).join('');
  bindCardEvents(); setupDragAndDrop();
}

// RENDER COMPLETED
function renderCompletedDates() {
  const c = document.getElementById('completed-cards');
  document.getElementById('completed-count').textContent = state.completedDates.length;
  if (!state.completedDates.length) {
    c.innerHTML = `<div class="empty-completed"><div class="icon">💫</div><p>No completed dates yet.<br>Go make some memories!</p></div>`;
    return;
  }
  const sorted = state.completedDates.map((comp,i) => ({...comp, _idx:i})).sort((a,b) => ((b.rating1+b.rating2)/2) - ((a.rating1+a.rating2)/2));
  c.innerHTML = sorted.map(comp => {
    const d = getDateById(comp.id); if(!d) return '';
    const avg = ((comp.rating1+comp.rating2)/2).toFixed(1);
    return `<div class="completed-card">
      <div class="completed-card-header">
        <span class="completed-card-title">${d.title}</span>
        <span class="completed-card-rating"><span class="star">★</span><span class="rating-value">${avg}</span></span>
      </div>
      <div class="completed-card-individual-ratings">
        <span>${nick1()}: ${'★'.repeat(comp.rating1)}${'☆'.repeat(5-comp.rating1)}</span>
        <span>${nick2()}: ${'★'.repeat(comp.rating2)}${'☆'.repeat(5-comp.rating2)}</span>
      </div>
      ${comp.notes?`<div class="completed-card-notes">"${comp.notes}"</div>`:''}
      ${comp.photo?`<div class="completed-card-photo" data-photo="${comp._idx}"><img src="${comp.photo}" alt="Date photo" loading="lazy"></div>`:''}
      <div class="completed-card-actions">
        <button class="completed-action-btn edit-completed-btn" data-idx="${comp._idx}">✏️ Edit</button>
        <button class="completed-action-btn delete-btn" data-idx="${comp._idx}">🗑 Delete</button>
      </div>
    </div>`;
  }).join('');
  // Bind completed card events
  c.querySelectorAll('.completed-card-photo').forEach(p => p.addEventListener('click', () => openLightbox(state.completedDates[+p.dataset.photo].photo)));
  c.querySelectorAll('.edit-completed-btn').forEach(b => b.addEventListener('click', () => openEditCompleted(+b.dataset.idx)));
  c.querySelectorAll('.delete-btn').forEach(b => b.addEventListener('click', () => deleteCompleted(+b.dataset.idx)));
}

// CARD EVENTS
function bindCardEvents() {
  document.querySelectorAll('.date-card').forEach(card => {
    card.addEventListener('click', e => {
      if(e.target.closest('.card-action-btn')||e.target.closest('.option-btn')) return;
      const id = +card.dataset.id;
      openCardId = openCardId===id ? null : id;
      renderActiveDates();
    });
  });
  document.querySelectorAll('.fav-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); toggleFav(+b.dataset.id); }));
  document.querySelectorAll('.swap-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openSwapModal(+b.dataset.id); }));
  document.querySelectorAll('.edit-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openEditModal(+b.dataset.id); }));
  document.querySelectorAll('.complete-btn').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); openRatingModal(+b.dataset.id); }));
}

function toggleFav(id) {
  const i = state.favorites.indexOf(id);
  if(i>-1) state.favorites.splice(i,1); else state.favorites.push(id);
  saveState(); renderActiveDates();
}

// DRAG & DROP
function setupDragAndDrop() {
  const cards = document.querySelectorAll('.date-card');
  let draggedId = null;
  cards.forEach(card => {
    card.addEventListener('dragstart', e => { draggedId=+card.dataset.id; card.classList.add('dragging'); e.dataTransfer.effectAllowed='move'; });
    card.addEventListener('dragend', () => { card.classList.remove('dragging'); cards.forEach(c=>c.classList.remove('drag-over')); });
    card.addEventListener('dragover', e => { e.preventDefault(); card.classList.add('drag-over'); });
    card.addEventListener('dragleave', () => card.classList.remove('drag-over'));
    card.addEventListener('drop', e => { e.preventDefault(); card.classList.remove('drag-over'); const tid=+card.dataset.id; if(draggedId!==null&&draggedId!==tid) reorder(draggedId,tid); });
  });
  setupTouchDrag(cards);
}

function setupTouchDrag(cards) {
  let tc=null, sy=0, sx=0, dragging=false, timer=null;
  cards.forEach(card => {
    card.addEventListener('touchstart', e => { sy=e.touches[0].clientY; sx=e.touches[0].clientX; tc=card;
      timer=setTimeout(()=>{ dragging=true; card.classList.add('touch-dragging'); if(navigator.vibrate) navigator.vibrate(30); },300);
    },{passive:true});
    card.addEventListener('touchmove', e => {
      if(!dragging){if(Math.abs(e.touches[0].clientX-sx)>10||Math.abs(e.touches[0].clientY-sy)>10)clearTimeout(timer);return;}
      e.preventDefault();
      document.querySelectorAll('.date-card').forEach(c=>c.classList.remove('drop-target'));
      const el=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY);
      const cu=el?.closest('.date-card'); if(cu&&cu!==card) cu.classList.add('drop-target');
    },{passive:false});
    card.addEventListener('touchend', ()=>{
      clearTimeout(timer);
      if(dragging&&tc){tc.classList.remove('touch-dragging');let dt=null;
        document.querySelectorAll('.date-card').forEach(c=>{if(c.classList.contains('drop-target')){dt=c;c.classList.remove('drop-target');}});
        if(dt) reorder(+tc.dataset.id, +dt.dataset.id);
      } dragging=false; tc=null;
    },{passive:true});
  });
}

function reorder(fromId, toId) {
  const fi=state.activeDates.indexOf(fromId), ti=state.activeDates.indexOf(toId);
  if(fi===-1||ti===-1) return;
  state.activeDates.splice(fi,1); state.activeDates.splice(ti,0,fromId);
  saveState(); openCardId=null; renderActiveDates(); showToast('Rankings updated! ✨');
}

// SWAP (includes completed dates so they can be repeated)
function openSwapModal(cardId) {
  currentSwapCardId = cardId;
  const avail = state.allDates.filter(d => !state.activeDates.includes(d.id));
  const list = document.getElementById('swap-list');
  if(!avail.length) { list.innerHTML=`<div class="empty-completed"><div class="icon">🤷</div><p>No dates available to swap in!</p></div>`; }
  else {
    list.innerHTML = avail.map(d => `<div class="swap-item" data-id="${d.id}">
      <div class="swap-item-icon">${renderIll(d)}</div>
      <div class="swap-item-info"><div class="swap-item-name">${d.title}</div><div class="swap-item-desc">${d.description}</div></div>
      <div class="swap-item-cost">${renderCost(d.cost)}</div></div>`).join('');
    list.querySelectorAll('.swap-item').forEach(item => item.addEventListener('click', () => {
      const nid=+item.dataset.id, idx=state.activeDates.indexOf(currentSwapCardId);
      if(idx>-1){state.activeDates[idx]=nid; saveState(); openCardId=null; renderActiveDates(); closeModal('swap-modal');
        showToast(`Swapped in "${getDateById(nid).title}"! 🔄`);}
    }));
  }
  openModal('swap-modal');
}

// SURPRISE ME (popup only, no ranking change — includes completed dates for repeat suggestions)
function surprise() {
  const avail = state.allDates.filter(d => !state.activeDates.includes(d.id));
  if(!avail.length){ showToast('No more surprise dates! 🎲'); return; }
  const rd = avail[Math.floor(Math.random()*avail.length)];
  document.getElementById('surprise-popup-content').innerHTML = `
    <div class="surprise-illustration">${renderIll(rd)}</div>
    <div class="surprise-title">${rd.title}</div>
    <div class="surprise-desc">${rd.description}</div>
    <div class="surprise-cost">${renderCost(rd.cost)}</div>`;
  openModal('surprise-modal'); triggerConfetti();
}

// ADD / EDIT DATE
function resetIconUpload() {
  editIconData = null;
  const area = document.getElementById('icon-upload-area');
  area.innerHTML = '<div class="upload-text">📷 Tap to upload a custom icon</div><input type="file" id="edit-date-icon" accept="image/*">';
  document.getElementById('edit-date-icon').onchange = handleIconUpload;
}

function handleIconUpload() {
  const file = this.files[0]; if(!file) return;
  const canvas = document.createElement('canvas'), ctx = canvas.getContext('2d'), img = new Image();
  img.onload = () => {
    const s = Math.min(1, 120/Math.max(img.width,img.height));
    canvas.width=img.width*s; canvas.height=img.height*s;
    ctx.drawImage(img,0,0,canvas.width,canvas.height);
    editIconData = canvas.toDataURL('image/jpeg',0.8);
    const area = document.getElementById('icon-upload-area');
    area.innerHTML = `<img class="icon-preview" src="${editIconData}"><div class="upload-text">Tap to change</div><input type="file" id="edit-date-icon" accept="image/*">`;
    document.getElementById('edit-date-icon').onchange = handleIconUpload;
  };
  img.src = URL.createObjectURL(file);
}

function openAddModal() {
  editingDateId = null;
  document.getElementById('edit-date-title').textContent = 'New Date Idea';
  document.getElementById('edit-date-subtitle').textContent = 'Create something special';
  document.getElementById('edit-date-name').value = '';
  document.getElementById('edit-date-desc').value = '';
  resetIconUpload();
  document.querySelectorAll('.cost-btn').forEach(b => b.classList.remove('active'));
  document.querySelector('.cost-btn[data-cost="2"]').classList.add('active');
  openModal('edit-date-modal');
}

function openEditModal(id) {
  editingDateId = id;
  const d = getDateById(id);
  document.getElementById('edit-date-title').textContent = 'Edit Date';
  document.getElementById('edit-date-subtitle').textContent = d.title;
  document.getElementById('edit-date-name').value = d.title;
  document.getElementById('edit-date-desc').value = d.description;
  editIconData = d.customIcon || null;
  const area = document.getElementById('icon-upload-area');
  if(d.customIcon) {
    area.innerHTML = `<img class="icon-preview" src="${d.customIcon}"><div class="upload-text">Tap to change</div><input type="file" id="edit-date-icon" accept="image/*">`;
  } else {
    area.innerHTML = '<div class="upload-text">📷 Tap to upload a custom icon</div><input type="file" id="edit-date-icon" accept="image/*">';
  }
  document.getElementById('edit-date-icon').onchange = handleIconUpload;
  document.querySelectorAll('.cost-btn').forEach(b => { b.classList.toggle('active', +b.dataset.cost===d.cost); });
  openModal('edit-date-modal');
}

function saveDate() {
  const name = document.getElementById('edit-date-name').value.trim();
  const desc = document.getElementById('edit-date-desc').value.trim();
  const costBtn = document.querySelector('.cost-btn.active');
  const cost = costBtn ? +costBtn.dataset.cost : 2;
  if(!name){ showToast('Give it a name! ✏️'); return; }
  if(!desc){ showToast('Add a description! 📝'); return; }

  if(editingDateId !== null) {
    const d = getDateById(editingDateId);
    if(d) { d.title = name; d.description = desc; d.cost = cost; if(editIconData) { d.customIcon = editIconData; d.icon = 'custom'; } }
    showToast('Date updated! ✨');
  } else {
    const newId = Math.max(0, ...state.allDates.map(d=>d.id)) + 1;
    const nd = { id: newId, title: name, description: desc, cost, icon: 'custom', customIcon: editIconData || '' };
    state.allDates.push(nd);
    if(state.activeDates.length < 5) state.activeDates.push(newId);
    showToast(`"${name}" added! 🎉`);
  }
  saveState(); openCardId=null; renderActiveDates(); renderCompletedDates(); closeModal('edit-date-modal');
}

// RATING
function openRatingModal(dateId) {
  currentRatingDateId = dateId; ratingUser1=0; ratingUser2=0; ratingPhoto=null;
  const d = getDateById(dateId);
  document.getElementById('rating-title').textContent = `Rate: ${d.title}`;
  document.getElementById('rating-prompt-1').textContent = `What did ${nick1()} think?`;
  document.getElementById('rating-prompt-2').textContent = `Now hand it to ${nick2()}!`;
  resetStars('stars-user1'); resetStars('stars-user2');
  document.getElementById('rating-notes').value = '';
  const pa = document.getElementById('photo-upload-area');
  pa.classList.remove('has-photo');
  pa.querySelector('.upload-icon').style.display = '';
  pa.querySelector('div:nth-child(2)').style.display = '';
  const existingImg = pa.querySelector('img'); if(existingImg) existingImg.remove();
  document.getElementById('rating-photo').value = '';
  showRatingStep(1); openModal('rating-modal'); bindRatingEvents();
}

function resetStars(id) { document.querySelectorAll(`#${id} .star-btn`).forEach(b=>b.classList.remove('active')); }
function setStars(id,v) { document.querySelectorAll(`#${id} .star-btn`).forEach(b=>b.classList.toggle('active',+b.dataset.value<=v)); }
function showRatingStep(s) { document.querySelectorAll('.rating-step').forEach(el=>el.classList.remove('active')); document.getElementById(`rating-step-${s}`).classList.add('active'); }

function bindRatingEvents() {
  document.querySelectorAll('#stars-user1 .star-btn').forEach(b => { b.onclick=()=>{ratingUser1=+b.dataset.value;setStars('stars-user1',ratingUser1);}; });
  document.querySelectorAll('#stars-user2 .star-btn').forEach(b => { b.onclick=()=>{ratingUser2=+b.dataset.value;setStars('stars-user2',ratingUser2);}; });
  document.getElementById('rating-cancel').onclick = () => closeModal('rating-modal');
  document.getElementById('rating-next-1').onclick = () => { if(!ratingUser1){showToast('Pick a rating! ⭐');return;} showRatingStep(2); };
  document.getElementById('rating-back-2').onclick = () => showRatingStep(1);
  document.getElementById('rating-next-2').onclick = () => { if(!ratingUser2){showToast('Pick a rating! ⭐');return;} showRatingStep(3); };
  document.getElementById('rating-back-3').onclick = () => showRatingStep(2);
  document.getElementById('rating-done').onclick = completeDate;

  document.getElementById('rating-photo').onchange = function() {
    const file = this.files[0]; if(!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      ratingPhoto = e.target.result;
      const pa = document.getElementById('photo-upload-area');
      pa.classList.add('has-photo');
      pa.querySelector('.upload-icon').style.display='none';
      pa.querySelector('div:nth-child(2)').style.display='none';
      let img = pa.querySelector('img');
      if(!img){img=document.createElement('img');pa.appendChild(img);}
      img.src = ratingPhoto;
    };
    // Compress to keep localStorage manageable
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      const maxW=600, scale=Math.min(1,maxW/img.width);
      canvas.width=img.width*scale; canvas.height=img.height*scale;
      ctx.drawImage(img,0,0,canvas.width,canvas.height);
      ratingPhoto = canvas.toDataURL('image/jpeg',0.7);
      const pa = document.getElementById('photo-upload-area');
      pa.classList.add('has-photo');
      pa.querySelector('.upload-icon').style.display='none';
      pa.querySelector('div:nth-child(2)').style.display='none';
      let pimg = pa.querySelector('img');
      if(!pimg){pimg=document.createElement('img');pa.appendChild(pimg);}
      pimg.src = ratingPhoto;
    };
    img.src = URL.createObjectURL(file);
  };
}

function completeDate() {
  const notes = document.getElementById('rating-notes').value.trim();
  state.completedDates.push({ id:currentRatingDateId, rating1:ratingUser1, rating2:ratingUser2, notes:notes||'', photo:ratingPhoto||'', completedAt:new Date().toISOString() });
  const idx = state.activeDates.indexOf(currentRatingDateId);
  if(idx>-1) {
    state.activeDates.splice(idx,1);
    const avail = state.allDates.filter(d=>!state.activeDates.includes(d.id));
    if(avail.length) state.activeDates.push(avail[0].id);
  }
  const fi = state.favorites.indexOf(currentRatingDateId);
  if(fi>-1) state.favorites.splice(fi,1);
  saveState(); openCardId=null; closeModal('rating-modal'); renderActiveDates(); renderCompletedDates();
  const d=getDateById(currentRatingDateId), avg=((ratingUser1+ratingUser2)/2).toFixed(1);
  showToast(`"${d.title}" completed! ★ ${avg} 🎉`); triggerConfetti();
}

// EDIT / DELETE COMPLETED
function openEditCompleted(idx) {
  editingCompletedIdx = idx;
  const comp = state.completedDates[idx]; if(!comp) return;
  const d = getDateById(comp.id);
  document.getElementById('edit-completed-title').textContent = `Edit: ${d?d.title:'Date'}`;
  setStars('edit-stars-user1', comp.rating1);
  setStars('edit-stars-user2', comp.rating2);
  document.querySelectorAll('#edit-stars-user1 .star-btn').forEach(b => { b.onclick=()=>{comp._r1=+b.dataset.value;setStars('edit-stars-user1',comp._r1);}; });
  document.querySelectorAll('#edit-stars-user2 .star-btn').forEach(b => { b.onclick=()=>{comp._r2=+b.dataset.value;setStars('edit-stars-user2',comp._r2);}; });
  comp._r1 = comp.rating1; comp._r2 = comp.rating2;
  document.getElementById('edit-completed-notes').value = comp.notes||'';
  editCompletedPhoto = comp.photo||null;
  const pa = document.getElementById('edit-completed-photo-area');
  if(comp.photo) {
    pa.classList.add('has-photo');
    pa.querySelector('.upload-icon').style.display='none';
    pa.querySelector('div:nth-child(2)').style.display='none';
    let img = pa.querySelector('img'); if(!img){img=document.createElement('img');pa.appendChild(img);} img.src=comp.photo;
  } else {
    pa.classList.remove('has-photo');
    pa.querySelector('.upload-icon').style.display='';
    pa.querySelector('div:nth-child(2)').style.display='';
    const img=pa.querySelector('img'); if(img) img.remove();
  }
  document.getElementById('edit-completed-photo').value='';
  document.getElementById('edit-completed-photo').onchange = function() {
    const file=this.files[0]; if(!file) return;
    const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d'),img=new Image();
    img.onload=()=>{const s=Math.min(1,600/img.width);canvas.width=img.width*s;canvas.height=img.height*s;ctx.drawImage(img,0,0,canvas.width,canvas.height);
      editCompletedPhoto=canvas.toDataURL('image/jpeg',0.7);
      pa.classList.add('has-photo');pa.querySelector('.upload-icon').style.display='none';pa.querySelector('div:nth-child(2)').style.display='none';
      let pimg=pa.querySelector('img');if(!pimg){pimg=document.createElement('img');pa.appendChild(pimg);}pimg.src=editCompletedPhoto;
    }; img.src=URL.createObjectURL(file);
  };
  openModal('edit-completed-modal');
}

function saveEditCompleted() {
  const comp = state.completedDates[editingCompletedIdx]; if(!comp) return;
  comp.rating1 = comp._r1||comp.rating1;
  comp.rating2 = comp._r2||comp.rating2;
  comp.notes = document.getElementById('edit-completed-notes').value.trim();
  if(editCompletedPhoto !== null) comp.photo = editCompletedPhoto;
  delete comp._r1; delete comp._r2;
  saveState(); renderCompletedDates(); closeModal('edit-completed-modal'); showToast('Updated! ✨');
}

function deleteCompleted(idx) {
  const comp = state.completedDates[idx]; if(!comp) return;
  const d = getDateById(comp.id);
  if(confirm(`Delete "${d?d.title:'this date'}" from completed?`)) {
    state.completedDates.splice(idx, 1);
    saveState(); renderCompletedDates(); showToast('Deleted 🗑');
  }
}

// LIGHTBOX
function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox-overlay').classList.add('active');
}
function closeLightbox() {
  document.getElementById('lightbox-overlay').classList.remove('active');
  document.getElementById('lightbox-img').src = '';
}

// ONBOARDING
function saveOnboarding() {
  state.user1Nick = document.getElementById('user1-nick').value.trim();
  state.user2Nick = document.getElementById('user2-nick').value.trim();
  state.onboarded = true;
  saveState(); updateHeader(); closeModal('onboarding-modal'); showToast('Welcome, lovebirds! 💜'); triggerConfetti();
}

// SETTINGS
function openSettings() {
  document.getElementById('set-user1-nick').value = state.user1Nick;
  document.getElementById('set-user2-nick').value = state.user2Nick;
  openModal('settings-modal');
}
function saveSettings() {
  state.user1Nick = document.getElementById('set-user1-nick').value.trim();
  state.user2Nick = document.getElementById('set-user2-nick').value.trim();
  saveState(); updateHeader(); renderCompletedDates(); closeModal('settings-modal'); showToast('Settings saved! ✨');
}

// MODALS
function openModal(id) { document.getElementById(id).classList.add('active'); document.body.style.overflow='hidden'; }
function closeModal(id) { document.getElementById(id).classList.remove('active'); document.body.style.overflow=''; }

// EFFECTS
function triggerConfetti() {
  const c=document.getElementById('confetti-container');
  const colors=['#8B5CF6','#A78BFA','#3B82F6','#60A5FA','#06B6D4','#EC4899','#FBBF24','#34D399'];
  for(let i=0;i<50;i++){const p=document.createElement('div');p.className='confetti-piece';p.style.left=Math.random()*100+'%';p.style.background=colors[Math.floor(Math.random()*colors.length)];p.style.animationDelay=Math.random()*0.8+'s';p.style.animationDuration=(1.5+Math.random()*1.5)+'s';p.style.width=(4+Math.random()*8)+'px';p.style.height=(4+Math.random()*8)+'px';p.style.borderRadius=Math.random()>0.5?'50%':'2px';c.appendChild(p);}
  setTimeout(()=>{c.innerHTML='';},3500);
}
function showToast(msg) { const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),2500); }

// GLOBAL EVENTS
function bindGlobalEvents() {
  document.getElementById('surprise-btn').addEventListener('click', surprise);
  document.getElementById('add-date-btn').addEventListener('click', openAddModal);
  document.getElementById('onboarding-save').addEventListener('click', saveOnboarding);
  document.getElementById('settings-btn').addEventListener('click', openSettings);
  document.getElementById('settings-save').addEventListener('click', saveSettings);
  document.getElementById('settings-close').addEventListener('click', ()=>closeModal('settings-modal'));
  document.getElementById('swap-close').addEventListener('click', ()=>closeModal('swap-modal'));
  document.getElementById('edit-date-close').addEventListener('click', ()=>closeModal('edit-date-modal'));
  document.getElementById('edit-date-save').addEventListener('click', saveDate);
  document.getElementById('surprise-close').addEventListener('click', ()=>closeModal('surprise-modal'));
  document.getElementById('surprise-dismiss').addEventListener('click', ()=>closeModal('surprise-modal'));
  document.getElementById('edit-completed-close').addEventListener('click', ()=>closeModal('edit-completed-modal'));
  document.getElementById('edit-completed-save').addEventListener('click', saveEditCompleted);
  document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
  document.getElementById('lightbox-overlay').addEventListener('click', e=>{ if(e.target.id==='lightbox-overlay') closeLightbox(); });

  // Cost selector
  document.querySelectorAll('.cost-btn').forEach(b => b.addEventListener('click', ()=>{
    document.querySelectorAll('.cost-btn').forEach(x=>x.classList.remove('active')); b.classList.add('active');
  }));

  // Close modals on overlay
  document.querySelectorAll('.modal-overlay').forEach(o => o.addEventListener('click', e=>{
    if(e.target===o && o.id!=='onboarding-modal'){o.classList.remove('active');document.body.style.overflow='';}
  }));

  document.addEventListener('keydown', e=>{
    if(e.key==='Escape') { closeLightbox(); document.querySelectorAll('.modal-overlay.active').forEach(o=>{if(o.id!=='onboarding-modal'){o.classList.remove('active');document.body.style.overflow='';}});}
  });
}

if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
document.addEventListener('DOMContentLoaded', initApp);
