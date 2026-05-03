// Splash screen handling
const splashScreen = document.getElementById('splashScreen');
const splashInput = document.getElementById('splashInput');

function closeSplashScreen() {
    if (splashScreen) {
        splashScreen.classList.add('hidden');
    }
}

if (splashInput) {
    splashInput.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const inputValue = splashInput.value.trim();
            if (inputValue) {
                closeSplashScreen();
            }
        }
    });
    
    // Focus input when page loads
    window.addEventListener('load', () => {
        splashInput.focus();
    });
}

// Music control
const musicBtn = document.getElementById('musicBtn');
const musicPlayer = document.getElementById('musicPlayer');
const musicFrame = document.getElementById('musicFrame');
let isMusicPlaying = false;

const songId = '1UYuD_UUoFY';
const autoplayMusicSrc = `https://www.youtube-nocookie.com/embed/${songId}?autoplay=1&loop=1&playlist=${songId}&rel=0`;

// Random birthday messages
const birthdayMessages = [
    'سنة جديدة تحمل لك كل الخير والسعادة',
    'تستاهلي أجمل أيام السنة',
    'في يومك هذا نتمنى لك حياة مليئة بالفرح',
    'أنتِ أحلى من كل الهدايا',
    'كل سنة وأنتِ بألف خير',
    'يومك هذا يوم استثنائي مثل ما أنتِ استثنائية',
    'الحياة أجمل معك',
    'تستحقي كل الحب والاحترام',
    'أتمنى تكون هذه السنة أفضل سنة في حياتك',
    'مع كل خفقة قلب تحملين فرحة جديدة'
];

// Display random message
function displayRandomMessage() {
    const messageEl = document.querySelector('.random-message');
    if (!messageEl) {
        return;
    }
    const randomMessage = birthdayMessages[Math.floor(Math.random() * birthdayMessages.length)];
    messageEl.textContent = randomMessage;
}

displayRandomMessage();
setInterval(displayRandomMessage, 4500);

musicBtn.addEventListener('click', () => {
    if (isMusicPlaying) {
        musicFrame.src = 'about:blank';
        musicBtn.classList.remove('playing');
        isMusicPlaying = false;
    } else {
        musicFrame.src = autoplayMusicSrc;
        musicBtn.classList.add('playing');
        isMusicPlaying = true;
    }
});

window.addEventListener('load', () => {
    musicFrame.src = autoplayMusicSrc;
    musicBtn.classList.add('playing');
    isMusicPlaying = true;
});

// Create floating particles
function createParticles() {
    // Particles disabled
}

createParticles();

const photoPopup = document.getElementById('photoPopup');
const photoPopupMessage = document.getElementById('photoPopupMessage');
const photoPopupClose = document.getElementById('photoPopupClose');

const photoMessages = [
    'هنا اتولدت اجمل بنوته في الكوون',
    'مشوفتش ارق وارقي منك في حياتي',
    'طبعا طبعا عارفين الصورة دي لذيذة ليه',
    'كنتي الذ واحده فقويسنا كلها كده كده💗',
    'الحاجة الوحيده اللي طلعت بيها من التدريب اني صورت البنوته القمر دي الصورة العسولة دي',
    'نهودة واكيت بنت في الوجود مع بعض ينهار ابيض على الحلاوة',
    'طب والله اجمل واشيك من لبس الفورمال كده كده',
    'ايه يولاا الدريسات الصيفية التحفة مووت دي هه؟',
    'اوففف ايه الخريجة العسولة دي ؛ عمتا كنتي عسولة مووت وانتي بتناقشي',
    'لما كانت بنتنا طالبة جامعية وبتقعد ع سلالم الكلية',
    ' اوفففف ده النغووم حلت الصورة والله تخيلي بقى "كان يوم عسول اوي عموما"',
    ' يوميات سمسمة وصورها التحفة والاوت فيت الاتحف بتاعتها',
    'حزلقوميات كيمو والياسووو',
    'الا قوليلي ايه الثلاثي اللذيذ مووت ده',
    'معيدتنا والكبيرة بتاعتنا والله احنا من غيرك ولا حاااااجة يستت انتي',
    'الولد اللذيذ مووت واخته المدلله والاقرب لقلبه انا عارفة',
    'كلاكيت تاني مرة للنغوم والياسو والله ليا الشرف اني اتصور مع حتة الاثار دي',
    'الياسو اما كانت لسه طالبة ثانوية بس اقولك احلى طالبة ثانوية برضه هه',
    'صورة عائلية للفيفوريت فاميلي اللي بموت فيها واحد واحد',
    'ايه يولاا الحلاوة دي حتى صورك ف الغابات حلوة ايه يعم علمنا اي حااجة',
    'الكيوت وهي جمب بانر الاطراف الصناعية عقبال ما تبقي جمب بانر شركتك يستت انتي',
    'صورة عائلية ثلاثية من غير الولد كيكو احسن احسن',
    'لا دي عروسة البحر طالعه تتصور وراجعه البحر تاني على طوول',
];

function openPhotoPopup(index) {
    if (!photoPopup || !photoPopupMessage) {
        return;
    }

    const message = photoMessages[index % photoMessages.length];
    photoPopupMessage.textContent = message;
    photoPopup.classList.add('active');
    photoPopup.setAttribute('aria-hidden', 'false');
}

function closePhotoPopup() {
    if (!photoPopup) {
        return;
    }

    photoPopup.classList.remove('active');
    photoPopup.setAttribute('aria-hidden', 'true');
}

photoPopupClose.addEventListener('click', closePhotoPopup);
photoPopup.addEventListener('click', (event) => {
    if (event.target === photoPopup) {
        closePhotoPopup();
    }
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closePhotoPopup();
    }
});

// Load gallery images from the local images folder
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');

    const imagePaths = [
        'images/1.jpg',
        'images/2.jpg',
        'images/3.jpg',
        'images/4.jpg',
        'images/5.jpg',
        'images/6.jpg',
        'images/7.jpg',
        'images/8.jpg',
        'images/9.jpg',
        'images/10.jpg',
        'images/11.jpg',
        'images/12.jpg',
        'images/13.jpg',
        'images/14.jpg',
        'images/15.jpg',
        'images/16.jpg',
        'images/17.jpg',
        'images/18.jpg',
        'images/19.jpg',
        'images/20.jpg',
        'images/21.jpg',
        'images/22.jpg',
        'images/23.jpg'
    ];

    galleryGrid.innerHTML = '';

    imagePaths.forEach((imagePath, index) => {
        const card = document.createElement('div');
        card.classList.add('gallery-card');

        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Birthday photo ${index + 1}`;
        img.loading = 'eager';
        card.style.cursor = 'pointer';
        card.addEventListener('click', () => openPhotoPopup(index));
        img.onerror = () => {
            card.innerHTML = '';
            card.classList.add('gallery-placeholder');
            card.addEventListener('click', () => openPhotoPopup(index));

            const placeholder = document.createElement('p');
            placeholder.textContent = `الصورة ${index + 1} غير متاحة`;
            card.appendChild(placeholder);
        };

        card.appendChild(img);
        galleryGrid.appendChild(card);
    });
}
// Load gallery on page load
window.addEventListener('load', loadGallery);

// Add smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
