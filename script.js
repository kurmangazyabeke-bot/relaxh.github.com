// Translations Dictionary
const translations = {
    en: {
        findSpot: "Find Your Perfect<br>Entertainment Spot",
        discover: "Discover the best game centers, arcades, and kids parks in Kyzylorda.",
        searchPlaceholder: "Search by name or location...",
        all: "All",
        vr: "VR Arenas",
        pc: "PC Clubs",
        arcade: "Arcades",
        kids: "Kids Center",
        favorites: "Favorites",
        open: "Open",
        closed: "Closed",
        until: "until",
        opensAt: "opens at",
        // Detail Page
        backToList: "Back to List",
        keyFeatures: "Key Features",
        reviews: "Reviews",
        noReviews: "No reviews yet. Be the first to visit!",
        aboutPlace: "About the Place",
        contactInfo: "Contact Info",
        address: "Address",
        phone: "Phone",
        bookNow: "Book Now",
        callNow: "Call Now",
        visitInstagram: "Visit Instagram",
        bookVisit: "Book a Visit",
        yourName: "Your Name",
        date: "Date",
        time: "Time",
        guests: "Guests",
        confirmBooking: "Confirm Booking",
        centerNotFound: "Center not found!",
        goBack: "Go Back",
        // New
        novice: "Novice Gamer",
        pro: "Pro Gamer",
        master: "Game Master",
        legend: "Legend",
        events: "Upcoming Events"
    },
    ru: {
        findSpot: "Найди Свое Идеальное<br>Место Отдыха",
        discover: "Откройте для себя лучшие игровые центры, аркады и детские парки в Кызылорде.",
        searchPlaceholder: "Поиск по названию или адресу...",
        all: "Все",
        vr: "VR Арены",
        pc: "Компьютерные Клубы",
        arcade: "Аркады",
        kids: "Детские Центры",
        favorites: "Избранное",
        open: "Открыто",
        closed: "Закрыто",
        until: "до",
        opensAt: "откроется в",
        // Detail Page
        backToList: "Назад к списку",
        keyFeatures: "Ключевые особенности",
        reviews: "Отзывы",
        noReviews: "Отзывов пока нет. Будьте первым!",
        aboutPlace: "О месте",
        contactInfo: "Контактная информация",
        address: "Адрес",
        phone: "Телефон",
        bookNow: "Забронировать",
        callNow: "Позвонить",
        visitInstagram: "Instagram",
        bookVisit: "Забронировать визит",
        yourName: "Ваше Имя",
        date: "Дата",
        time: "Время",
        guests: "Гости",
        confirmBooking: "Подтвердить",
        centerNotFound: "Центр не найден!",
        goBack: "Вернуться назад",
        // New
        novice: "Новичок",
        pro: "Любитель",
        master: "Мастер",
        legend: "Легенда",
        events: "События и Акции"
    },
    kz: {
        findSpot: "Демалыс Орнын<br>Табыңыз",
        discover: "Қызылордадағы ең жақсы ойын орталықтарын, аркадалар мен балалар саябақтарын табыңыз.",
        searchPlaceholder: "Аты немесе мекенжайы бойынша іздеу...",
        all: "Барлығы",
        vr: "VR Ареналар",
        pc: "PC Клубтар",
        arcade: "Аркадалар",
        kids: "Балалар Орталығы",
        favorites: "Таңдаулылар",
        open: "Ашық",
        closed: "Жабық",
        until: "дейін",
        opensAt: "ашылу уақыты",
        // Detail Page
        backToList: "Тізімге оралу",
        keyFeatures: "Негізгі ерекшеліктер",
        reviews: "Пікірлер",
        noReviews: "Пікірлер әлі жоқ. Бірінші болыңыз!",
        aboutPlace: "Орын туралы",
        contactInfo: "Байланыс ақпараты",
        address: "Мекенжай",
        phone: "Телефон",
        bookNow: "Брондау",
        callNow: "Қоңырау шалу",
        visitInstagram: "Instagram",
        bookVisit: "Келуді брондау",
        yourName: "Сіздің атыңыз",
        date: "Күн",
        time: "Уақыт",
        guests: "Қонақтар",
        confirmBooking: "Растау",
        centerNotFound: "Орталық табылмады!",
        goBack: "Артқа қайту",
        // New
        novice: "Жаңадан бастаушы",
        pro: "Ойыншы",
        master: "Шебер",
        legend: "Аңыз",
        events: "Оқиғалар мен Жаңалықтар"
    }
};

let currentLang = localStorage.getItem('gamezone_lang') || 'en';

// Removed duplicate declaration
let mapInstance = null;
let mapMarkers = [];

// Logger Helper
function logActivity(action, details = '') {
    const logs = JSON.parse(localStorage.getItem('gamezone_logs')) || [];
    const user = JSON.parse(localStorage.getItem('gamezone_user'));

    const newLog = {
        action: action,
        details: details,
        user: user ? user.username : 'Guest',
        timestamp: new Date().toISOString()
    };

    logs.push(newLog);
    // Limit log size to 100
    if (logs.length > 100) logs.shift();

    localStorage.setItem('gamezone_logs', JSON.stringify(logs));
}


function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('gamezone_lang', lang);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    const t = translations[lang];

    // Update Index Page Elements
    const heroH1 = document.querySelector('.hero-content h1');
    if (heroH1) heroH1.innerHTML = t.findSpot;

    const heroP = document.querySelector('.hero-content p');
    if (heroP) heroP.innerHTML = t.discover;

    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.placeholder = t.searchPlaceholder;

    const filters = document.querySelectorAll('.filter-btn');
    if (filters.length > 0) {
        filters[0].textContent = t.all;
        filters[1].textContent = t.vr;
        filters[2].textContent = t.pc;
        filters[3].textContent = t.arcade;
        filters[4].textContent = t.kids;
        filters[5].innerHTML = `<i class="fas fa-heart"></i> ${t.favorites}`;
    }

    // Update User Level Badge if exists
    updateUserLevel();

    // Update Detail Page Elements
    const backBtn = document.querySelector('.nav-back-btn');
    if (backBtn) backBtn.innerHTML = `<i class="fas fa-arrow-left"></i> ${t.backToList}`;

    updateElementText('lbl-keyfeatures', t.keyFeatures);
    updateElementText('lbl-reviews', t.reviews);
    updateElementText('lbl-about', t.aboutPlace);
    updateElementText('lbl-contact', t.contactInfo);
    updateElementText('lbl-address', t.address);
    updateElementText('lbl-phone', t.phone);

    updateElementText('btn-book', t.bookNow, true);
    updateElementText('btn-call', t.callNow, true);
    updateElementText('btn-insta', t.visitInstagram, true);

    updateElementText('modal-title', t.bookVisit);
    updateLabelText('lbl-name', t.yourName);
    updateLabelText('lbl-date', t.date);
    updateLabelText('lbl-time', t.time);
    updateLabelText('lbl-guests', t.guests);
    updateElementText('btn-confirm', t.confirmBooking);

    // Re-render components
    if (typeof filterAndRender === 'function' && document.getElementById('centersGrid')) {
        const activeFilter = document.querySelector('.filter-btn.active')?.dataset.filter || 'all';
        const searchTerm = document.getElementById('searchInput')?.value.toLowerCase() || '';
        filterAndRender(searchTerm, activeFilter);
    }

    if (typeof renderDetail === 'function') {
        renderDetail();
    }
}

function updateElementText(id, text, matchIcon = false) {
    const el = document.getElementById(id);
    if (!el) return;

    if (matchIcon) {
        const icon = el.children[0];
        if (icon && icon.tagName === 'I') {
            el.innerHTML = '';
            el.appendChild(icon);
            el.append(' ' + text);
        } else {
            el.innerHTML = text;
        }
    } else {
        el.innerText = text;
    }
}

function updateLabelText(forId, text) {
    const label = document.querySelector(`label[for="${forId.replace('lbl-', '')}"]`);
    if (label) label.innerText = text;
}

function getWorkingStatus(hours) {
    const now = new Date();
    const currentHour = now.getHours();

    if (!hours) return { isOpen: true, text: '' };

    const isOpen = currentHour >= hours.open && currentHour < hours.close;
    const t = translations[currentLang];

    let text = '';
    if (isOpen) {
        text = `${t.until} ${hours.close}:00`;
    } else {
        text = `${t.opensAt} ${hours.open}:00`;
    }

    return { isOpen, text };
}

/* --- XP & Gamification System --- */
// Stats saved: XP, Visited Count, Favorites, Badges Unlocked

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('gamezone_user'));
}

function saveUserSession(user) {
    // 1. Update Session
    localStorage.setItem('gamezone_user', JSON.stringify(user));

    // 2. Update DB
    let users = JSON.parse(localStorage.getItem('gamezone_users_db')) || [];
    const index = users.findIndex(u => u.username === user.username);

    if (index !== -1) {
        users[index] = user;
    } else {
        // If not found (e.g. old session), re-add
        users.push(user);
    }
    localStorage.setItem('gamezone_users_db', JSON.stringify(users));
}

const achievementsList = [
    { id: 'first_step', title: 'First Step', icon: 'fas fa-shoe-prints', desc: 'Visit 1 Place', req: { type: 'visit', val: 1 }, xp: 20 },
    { id: 'gamer', title: 'Gamer', icon: 'fas fa-gamepad', desc: 'Visit 5 Places', req: { type: 'visit', val: 5 }, xp: 100 },
    { id: 'collector', title: 'Collector', icon: 'fas fa-heart', desc: 'Add 3 Favorites', req: { type: 'fav', val: 3 }, xp: 50 },
    { id: 'night_owl', title: 'Night Owl', icon: 'fas fa-moon', desc: 'View a 24/7 Club', req: { type: 'view_247', val: 1 }, xp: 30 }
];

function addXP(amount) {
    let user = getCurrentUser();
    if (!user) return;

    user.xp = (user.xp || 0) + amount;
    saveUserSession(user);
    updateUserLevel();
}

function checkAchievements(actionType, val = null) {
    let user = getCurrentUser();
    if (!user) return;

    let unlockedBadges = user.badges || [];
    let visitedCount = user.visitedCount || 0;
    let favorites = user.favorites || [];

    let newUnlock = false;

    achievementsList.forEach(ach => {
        if (unlockedBadges.includes(ach.id)) return;

        let conditionMet = false;

        if (ach.req.type === 'visit' && visitedCount >= ach.req.val) conditionMet = true;
        if (ach.req.type === 'fav' && favorites.length >= ach.req.val) conditionMet = true;
        if (ach.req.type === actionType) conditionMet = true; // Direct trigger (e.g. view_247)

        if (conditionMet) {
            unlockedBadges.push(ach.id);
            addXP(ach.xp);
            alert(`🏆 Achievement Unlocked: ${ach.title} (+${ach.xp} XP)`);
            newUnlock = true;
        }
    });

    if (newUnlock) {
        user.badges = unlockedBadges;
        saveUserSession(user);
        updateUserLevel(); // XP changed
    }
}

function trackVisit(center) {
    let user = getCurrentUser();
    if (!user) return;

    user.visitedCount = (user.visitedCount || 0) + 1;
    saveUserSession(user); // Save count first

    addXP(10);
    checkAchievements('visit');

    // Check specific attributes
    if (center.features && center.features.includes('24/7')) {
        checkAchievements('view_247');
    }
}

function updateUserLevel() {
    let user = getCurrentUser();

    // Navbar Badge
    const el = document.getElementById('userLevelBadge');

    if (!user) {
        if (el) el.style.display = 'none';
        return;
    }

    if (el) el.style.display = 'flex';
    let xpPoints = user.xp || 0;

    // Calculate Level
    const t = translations[currentLang] || translations['en'];
    let level = 1;
    let title = t.novice;
    let nextLevelXp = 100;
    let prevLevelXp = 0;

    if (xpPoints >= 1000) { level = 5; title = t.legend; nextLevelXp = 5000; prevLevelXp = 1000; }
    else if (xpPoints >= 500) { level = 4; title = t.master; nextLevelXp = 1000; prevLevelXp = 500; }
    else if (xpPoints >= 200) { level = 3; title = t.pro; nextLevelXp = 500; prevLevelXp = 200; }
    else if (xpPoints >= 100) { level = 2; title = "Advanced"; nextLevelXp = 200; prevLevelXp = 100; }

    // Progress Calculation
    const range = nextLevelXp - prevLevelXp;
    const currentProgress = xpPoints - prevLevelXp;
    const fillPercent = Math.min(100, Math.max(0, (currentProgress / range) * 100));

    if (el) {
        el.querySelector('.level-circle').innerText = level;
        el.querySelector('.level-title').innerText = title;
        el.querySelector('.xp-fill').style.width = `${fillPercent}%`;
    }

    // Modal Updates (if open)
    const pLevelTitle = document.getElementById('p-level-title');
    if (pLevelTitle) {
        pLevelTitle.innerText = `${title} (Lvl ${level})`;
        document.getElementById('p-current-xp').innerText = `${xpPoints} XP`;
        document.getElementById('p-next-xp').innerText = `${nextLevelXp} XP`;
        document.getElementById('p-xp-fill').style.width = `${fillPercent}%`;
        document.getElementById('p-xp-needed').innerText = `${nextLevelXp - xpPoints} XP to next level`;
    }
}


/* --- Profile Modal Functions --- */
function openProfile() {
    const modal = document.getElementById('profileModal');
    if (!modal) return;

    let user = getCurrentUser();
    if (!user) return; // Should redirect to login ideally

    updateUserLevel(); // Refresh stats

    // Update Stats Grid
    document.getElementById('stat-visited').innerText = user.visitedCount || 0;

    const favs = user.favorites || [];
    document.getElementById('stat-favorites').innerText = favs.length;

    const unlocked = user.badges || [];
    document.getElementById('stat-badges').innerText = `${unlocked.length}/${achievementsList.length}`;

    // Render Badges
    const grid = document.getElementById('achievementsGrid');
    grid.innerHTML = achievementsList.map(ach => {
        const isUnlocked = unlocked.includes(ach.id);
        return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : ''}">
                <div class="achievement-icon"><i class="${ach.icon}"></i></div>
                <div class="achievement-title">${ach.title}</div>
                <div class="achievement-desc">${ach.desc}</div>
                ${isUnlocked ? '<div style="color:#00ff00; font-size:0.7rem; margin-top:5px;"><i class="fas fa-check"></i> Unlocked</div>' : ''}
            </div>
        `;
    }).join('');

    modal.style.display = 'flex';
}

function closeProfile() {
    document.getElementById('profileModal').style.display = 'none';
}


/* --- Filter & Render Logic --- */
const centersGrid = document.getElementById('centersGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const smartFilters = document.querySelectorAll('.smart-filter-checkbox input');

function toggleFavorite(e, id) {
    e.stopPropagation();

    let user = getCurrentUser();
    if (!user) {
        alert('Please login to save favorites!');
        return;
    }

    let favorites = user.favorites || [];
    const index = favorites.indexOf(id);

    if (index === -1) {
        favorites.push(id);
        user.favorites = favorites;
        saveUserSession(user);
        checkAchievements('fav'); // Check badge
    } else {
        favorites.splice(index, 1);
        user.favorites = favorites;
        saveUserSession(user);
    }

    // Refresh view
    const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    filterAndRender(searchTerm, activeFilter);
}

function renderCenters(data) {
    if (!centersGrid) return; // Prevent execution on Detail page
    centersGrid.innerHTML = '';
    const t = translations[currentLang];

    let user = getCurrentUser();
    let favorites = user ? (user.favorites || []) : [];

    if (data.length === 0) {
        centersGrid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No centers found.</div>';
        return;
    }

    data.forEach(center => {
        const isFav = favorites.includes(center.id);
        const status = getWorkingStatus(center.workingHours);

        const card = document.createElement('div');
        card.className = 'center-card';
        card.style.cursor = 'pointer';
        card.onclick = (e) => {
            if (e.target.closest('.btn-card') || e.target.closest('.favorite-icon')) return;
            trackVisit(center); // New tracking function
            window.location.href = `detail.html?id=${center.id}`;
        };

        const ratingStars = center.rating
            ? `<div style="color: #ffd700; font-size: 0.9rem; margin-bottom: 5px;"><i class="fas fa-star"></i> ${center.rating}</div>`
            : '';

        card.innerHTML = `
            <div class="favorite-icon ${isFav ? 'active' : ''}" onclick="toggleFavorite(event, '${center.id}')">
                <i class="${isFav ? 'fas' : 'far'} fa-heart"></i>
            </div>
            
            <div class="status-badge ${status.isOpen ? 'status-open' : 'status-closed'}">
                <div class="status-dot"></div>
                <span>${status.isOpen ? t.open : t.closed}</span>
                <span style="opacity: 0.7; font-weight: normal; margin-left: 3px;"> ${status.text}</span>
            </div>

            <div class="card-tag">${center.typeName}</div>
            <img src="${center.image}" alt="${center.name}" class="card-image">
            <div class="card-content">
                <h3 class="card-title">${center.name}</h3>
                ${ratingStars}
                <div class="card-info">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${center.address}</span>
                </div>
                <div class="card-info">
                    <i class="fas fa-phone"></i>
                    <span>${center.phone}</span>
                </div>
                <!-- Smart Tags display -->
                <div style="display: flex; gap: 5px; flex-wrap: wrap; margin-top: 10px;">
                    ${center.features.includes('PS5') ? '<span style="font-size:0.75rem; background:#003087; padding:2px 8px; border-radius:10px;">PS5</span>' : ''}
                    ${center.features.includes('Food') ? '<span style="font-size:0.75rem; background:#d35400; padding:2px 8px; border-radius:10px;">Food</span>' : ''}
                    ${center.features.includes('24/7') ? '<span style="font-size:0.75rem; background:#16a085; padding:2px 8px; border-radius:10px;">24/7</span>' : ''}
                </div>

                <div class="card-actions">
                    <a href="${center.instagram}" target="_blank" class="btn-card btn-instagram">
                        <i class="fab fa-instagram"></i> Instagram
                    </a>
                    <a href="tel:${center.phone.replace(/[^0-9+]/g, '')}" class="btn-card btn-details">
                        <i class="fas fa-phone-alt"></i> Call
                    </a>
                </div>
            </div>
        `;
        centersGrid.appendChild(card);
    });

    // Update Map if visible
    updateMapMarkers(data);
}



function filterAndRender(searchTerm, filterType) {
    // Get checked smart filters
    const activeSmartFilters = Array.from(document.querySelectorAll('.smart-filter-checkbox input:checked'))
        .map(input => input.value);

    let user = getCurrentUser();
    let favorites = user ? (user.favorites || []) : [];

    const filtered = centersData.filter(center => {
        const matchesSearch = center.name.toLowerCase().includes(searchTerm) ||
            center.address.toLowerCase().includes(searchTerm);

        let matchesType = true;
        if (filterType === 'favorites') {
            matchesType = favorites.includes(center.id);
        } else if (filterType !== 'all') {
            matchesType = center.type === filterType;
        }

        // Smart Filters Logic
        // Center must have ALL selected smart features
        const matchesSmart = activeSmartFilters.every(f => center.features && center.features.includes(f));

        return matchesSearch && matchesType && matchesSmart;
    });

    renderCenters(filtered);
}

// Initial Data Load
if (typeof centersData !== 'undefined') {
    renderCenters(centersData);
}

// Events Listener
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        filterAndRender(searchTerm, activeFilter);
    });
}

if (filterBtns) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const searchTerm = searchInput.value.toLowerCase();
            const filterType = btn.dataset.filter;
            filterAndRender(searchTerm, filterType);
        });
    });
}

if (smartFilters) {
    smartFilters.forEach(cb => {
        cb.addEventListener('change', () => {
            const searchTerm = searchInput.value.toLowerCase();
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            filterAndRender(searchTerm, activeFilter);
        });
    });
}

/* --- Events Slider Logic --- */
function renderEvents() {
    const container = document.getElementById('eventsContainer');
    if (!container) return;

    // Load from LocalStorage or Default
    const storedEvents = JSON.parse(localStorage.getItem('gamezone_events'));
    const eventsToRender = storedEvents && storedEvents.length > 0 ? storedEvents : (typeof eventsData !== 'undefined' ? eventsData : []);

    if (eventsToRender.length === 0) {
        container.innerHTML = '<p style="color:var(--text-muted);">No upcoming events.</p>';
        return;
    }

    container.innerHTML = eventsToRender.map(event => `
        <div class="event-card">
            <div class="event-badge">${event.badge}</div>
            <h3 class="event-title">${event.title}</h3>
            <span class="event-date"><i class="far fa-calendar-alt"></i> ${event.date}</span>
            <p class="event-desc">${event.desc}</p>
            <div style="margin-top: 15px; font-size: 0.9rem; color: var(--text-muted);">
                <i class="fas fa-map-marker-alt"></i> ${event.place}
            </div>
        </div>
    `).join('');
}
renderEvents();


/* --- Map Logic (Leaflet) --- */
function initMap() {
    if (!document.getElementById('map')) return;

    // Center on Kyzylorda
    mapInstance = L.map('map').setView([44.848, 65.500], 13);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20
    }).addTo(mapInstance);

    // Initial markers
    updateMapMarkers(centersData);
}

function updateMapMarkers(data) {
    if (!mapInstance) return;

    // Clear existing
    mapMarkers.forEach(m => mapInstance.removeLayer(m));
    mapMarkers = [];

    data.forEach(center => {
        if (center.coordinates) {
            const marker = L.marker(center.coordinates)
                .addTo(mapInstance)
                .bindPopup(`<b>${center.name}</b><br>${center.address}`);
            mapMarkers.push(marker);
        }
    });
}

function setView(viewMode) {
    const grid = document.getElementById('centersGrid');
    const map = document.getElementById('centersMap');
    const btns = document.querySelectorAll('.toggle-view-btn');

    btns.forEach(b => b.classList.remove('active'));

    if (viewMode === 'grid') {
        grid.style.display = 'grid';
        map.style.display = 'none';
        btns[0].classList.add('active');
    } else {
        grid.style.display = 'none';
        map.style.display = 'block';
        btns[1].classList.add('active');
        if (!mapInstance) initMap();
        mapInstance.invalidateSize();
    }
}

/* --- Randomizer / Roulette --- */
function openRandomizer() {
    document.getElementById('randomizerModal').style.display = 'flex';
    document.getElementById('goToResultBtn').style.display = 'none';
    document.getElementById('randomResult').innerText = "Spinning...";
}

function closeRandomizer() {
    document.getElementById('randomizerModal').style.display = 'none';
}

function spinRoulette() {
    const wheel = document.getElementById('rouletteWheel');
    const resultText = document.getElementById('randomResult');
    const btn = document.getElementById('goToResultBtn');

    wheel.classList.add('spinning');
    resultText.innerText = "Selecting...";
    btn.style.display = 'none';

    setTimeout(() => {
        wheel.classList.remove('spinning');
        const randomCenter = centersData[Math.floor(Math.random() * centersData.length)];

        resultText.innerHTML = `You should go to: <br><strong style="font-size:1.5rem; color:var(--primary);">${randomCenter.name}</strong>`;

        btn.style.display = 'inline-block';
        btn.onclick = () => window.location.href = `detail.html?id=${randomCenter.id}`;

    }, 2000);
}

// Global Init
// Global Init
window.addEventListener('load', () => {
    updateUserLevel();

    // Check Auth
    const user = JSON.parse(localStorage.getItem('gamezone_user'));
    const userBadge = document.getElementById('userLevelBadge');
    const navContent = document.querySelector('.nav-content > div');

    if (!user) {
        // If no user, hide level badge and show Login button
        if (userBadge) userBadge.style.display = 'none';

        const loginBtn = document.createElement('a');
        loginBtn.href = 'login.html';
        loginBtn.className = 'cta-button';
        loginBtn.style.padding = '5px 15px';
        loginBtn.style.fontSize = '0.9rem';
        loginBtn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login';

        if (navContent) navContent.insertBefore(loginBtn, navContent.firstChild);
    } else {
        // If user exists, make sure badge is visible and clickable
        if (userBadge) {
            userBadge.style.display = 'flex';
            userBadge.onclick = () => window.location.href = 'profile.html';
        }
    }
});

/* --- Scroll Reveal Animation --- */
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px" // Removed negative margin to ensure visibility
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}, observerOptions);

// Function to init reveal elements
function initScrollReveal() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
}

// Run on load
// Run on DOMContentLoaded for faster execution
document.addEventListener('DOMContentLoaded', initScrollReveal);

// Fallback: Also run on load to catch any missed updates (idempotent since observer checks)
window.addEventListener('load', initScrollReveal);

