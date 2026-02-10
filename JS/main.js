// JavaScript to populate the HTML content

document.addEventListener('DOMContentLoaded', function() {
    // Top contact bar
    document.getElementById('top-contact-bar').innerHTML = `
        <div class="contact-left">
            <span class="contact-title">
                <span class="ideal-highlight">IDEAL</span> Curățătorie Chimică & Spălătorie-Orhei
            </span>
            <span class="contact-slogan">Curățenie la standarde <b>IDEAL</b>e</span>
        </div>
        <div class="contact-right">
            <span class="contact-icon">📞</span>
            <div class="contact-details">
                <span class="program">luni-vineri: 8:00-17:00<br>sâmbătă-duminică: 8:00-14:00</span>
                <span class="phone-number">068082425</span>
            </div>
        </div>
    `;

    // Main navbar
    document.getElementById('main-navbar').innerHTML = `
        <nav class="main-nav">
            <div class="nav-logo">
                <span class="clean">Ideal</span>
            </div>
            <ul class="nav-links">
                <li><a class="active" href="acasa.html">Acasă</a></li>
                <li><a href="despre.html">Despre</a></li>
                <li><a href="servicii.html">Servicii</a></li>
                <li><a href="galerie.html">Galerie</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
            <div class="burger-menu" id="burgerMenu">
                <i class="fas fa-bars"></i>
            </div>
        </nav>
    `;

    // Mobile menu
    document.getElementById('mobileMenu').innerHTML = `
        <ul class="mobile-nav-links">
            <li><a class="active" href="acasa.html">Acasă</a></li>
            <li><a href="despre.html">Despre</a></li>
            <li><a href="servicii.html">Servicii</a></li>
            <li><a href="galerie.html">Galerie</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    `;

    // Hero section
    document.getElementById('hero').innerHTML = `
        <div class="hero-flex">
            <div class="hero-content">
                <h1>Servicii moderne de spălătorie, curățătorie, ozonare si călcare</h1>
                <p class="hero-desc">
                    Bine ai venit la Spălătoria IDEAL din Orhei - locul unde hainele, încălțămintea și textilele tale primesc toată atenția și grija pe care o merită.<br>
                    Oferim servicii profesionale de curățare chimică, spălare, călcare și igienizare, adaptate fiecărui tip de material.
                </p>
                <div class="hero-buttons">
                    <a href="servicii.html" class="btn-primary">🔍 Află detalii</a>
                    <a href="contact.html#contact-form" class="btn-secondary">📝 Contactează-ne</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="img/galerie4.jpg" alt="Spălătorie modernă" />
            </div>
        </div>
    `;

    // Text container
    document.getElementById('text-container').innerHTML = `
        <h2>De ce să alegi Spălătoria Ideal?</h2>
        <p>✔️ Rapiditate, profesionalism și respect pentru mediu</p>
        <p>✔️ Haine impecabil curate, fără chimicale dure</p>
        <p>✔️ Servicii complete, de la curățare până la retușuri</p>
    `;

    // Servicii section
    document.getElementById('servicii').innerHTML = `
        <div class="container">
            <h2 class="titlu-servicii">Serviciile Noastre</h2>
            <div class="grid-servicii">
                <div class="serviciu-box">
                    <img src="img/iron.png" alt="Călcat haine">
                    <h3>Calcătorie haine</h3>
                    <p>Finisaj profesional pentru fiecare articol, cu rezultate impecabile și rapide. Hainele tale vor fi gata de purtat, perfect netezite.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/incaltaminte.png" alt="Curățare încălțăminte">
                    <h3>Curățare & vopsire încălțăminte</h3>
                    <p>Redăm aspectul nou pantofilor și adidașilor tăi, prin curățare profundă și vopsire profesională, indiferent de material.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/geanta.png" alt="Curățare genți">
                    <h3>Curățare & vopsire genți</h3>
                    <p>Gențile tale își recapătă culoarea și forma inițială, cu tratamente speciale adaptate fiecărui tip de piele sau material.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/perna.png" alt="Curățare perne">
                    <h3>Curățare perne & schimb husă</h3>
                    <p>Igienizare completă a pernelor și schimbarea huselor uzate, pentru un somn mai curat și sănătos.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/pat.png" alt="Spălare pături">
                    <h3>Spălare pături & pilote</h3>
                    <p>Curățare eficientă a păturilor groase și pilotelor, păstrând textura moale și prospețimea acestora.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/sacou.png" alt="Curățare chimică haine">
                    <h3>Curățare chimică haine</h3>
                    <p>Îndepărtăm petele dificile și mirosurile neplăcute cu soluții ecologice, sigure pentru țesături și piele.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/draperii.png" alt="Spălare draperii">
                    <h3>Spălare & călcare draperii</h3>
                    <p>Reîmprospătăm draperiile și perdelele prin spălare delicată și finisare profesională, fără cute.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/ozonare.png" alt="Ozonare">
                    <h3>Ozonare & dezinfectare</h3>
                    <p>Eliminăm bacteriile și alergenii prin ozon, fără reziduuri chimice – igienizare completă și naturală.</p>
                </div>
                <div class="serviciu-box">
                    <img src="img/lengerie.png" alt="Lenjerie hotel">
                    <h3>Spălare lenjerii horeca</h3>
                    <p>Servicii profesionale de spălare și întreținere pentru lenjerii din hoteluri și restaurante, cu livrare rapidă.</p>
                </div>
            </div>
        </div>
    `;

    // Gallery
    document.getElementById('gallery').innerHTML = `
        <img src="img/gallery1.jpg" alt="Mașini moderne" />
        <img src="img/gallery2.jpg" alt="Curățenie profesională" />
        <img src="img/gallery3.jpg" alt="Rezultate impecabile" />
    `;

    // Detalii contact
    document.getElementById('detalii-contact').innerHTML = `
        <div class="dcw-col">
            <h3>DETALII CONTACT</h3>
            <div class="dcw-item">
                <i class="fa fa-phone"></i>
                <div>
                    <span>Contact</span><br>
                    <a href="tel:068082425">068 082 425</a>
                </div>
            </div>
            <div class="dcw-item">
                <i class="fa fa-map-marker-alt"></i>
                <div>
                    <span>Adresă</span><br>
                    Strada Piatra Neamț 1A<br>Orhei, Moldova
                </div>
            </div>
            <div class="dcw-social">
                <a href="https://facebook.com/people/Spălătoria-Ideal-Orhei/61557622030278/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com/spalatorie.orhei/" target="_blank"><i class="fab fa-instagram"></i></a>
                <a href="https://m.me/spalatorie.orhei" target="_blank"><i class="fab fa-facebook-messenger"></i></a>
            </div>
        </div>
        <div class="dcw-col">
            <h3>SERVICII</h3>
            <ul>
                <li>Spălătorie – Curățătorie</li>
                <li>Spălătorie industrială</li>
                <li>Curățenie profesională</li>
                <li>Servicii rapide & eco</li>
            </ul>
        </div>
        <div class="dcw-col">
            <h3>LEGAL</h3>
            <ul>
                <li><a href="#">Politica de Confidențialitate</a></li>
                <li><a href="#">Politica Cookies</a></li>
                <li><a href="#">ANPC</a></li>
            </ul>
        </div>
    `;

    // Footer icons
    document.getElementById('footer-icons').innerHTML = `
        <a href="contact.html#contact-form" title="Contact prin email">
            <img src="img/mailIcon.png" alt="Mail" />
        </a>
        <a href="https://www.facebook.com/people/Sp%C4%83l%C4%83toria-Ideal-Orhei/61557622030278/" target="_blank" title="Facebook">
            <img src="img/facebookIcon.png" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/spalatorie.orhei/" target="_blank" title="Instagram">
            <img src="img/instagram.png" alt="Instagram" />
        </a>
        <a href="https://m.me/spalatorie.orhei" target="_blank" title="Messenger">
            <img src="img/messengerIcon.png" alt="Messenger" />
        </a>
        <a href="contact.html#contact-form" title="Apel telefonic">
            <img src="img/TelefonIcon.png" alt="Telefon" />
        </a>
    `;
});