document.addEventListener('DOMContentLoaded', () => {

    // Observer para las animaciones de scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // Accesibilidad por teclado para los links
    const navLinksList = document.querySelectorAll('.nav-links a');
    navLinksList.forEach(link => {
        link.addEventListener('focus', () => {
            link.style.outline = '2px solid var(--secondary-color)';
            link.style.outlineOffset = '4px';
        });
        link.addEventListener('blur', () => {
            link.style.outline = 'none';
        });
    });

    // Palabras o frases que deben cambiar al cambiar el idioma
    const translations = {
        es: {
            header_subtitle: "Estudiante de Programación",
            nav_about: "Sobre mí",
            nav_skills: "Habilidades",
            nav_experience: "Experiencia",
            nav_education: "Educación",
            nav_projects: "Portfolio",
            nav_contact: "Contacto",
            about_title: "Sobre mí",
            about_desc: "Soy desarrollador y estudiante de segundo año de la Tecnicatura Universitaria en Programación (UTN Facultad Regional La Plata). Me apasiona crear soluciones de software eficientes y accesibles, con un fuerte enfoque en el desarrollo Frontend y Backend.",
            skills_title: "Habilidades Técnicas",
            exp_title: "Experiencia Laboral",
            exp_job1_title: "Desarrollador Independiente",
            exp_job1_desc: "Desarrollo y mantenimiento de aplicaciones web modernas, trabajando en base a requerimientos específicos de clientes y asegurando entregas de alta calidad.",
            exp_job2_title: "Empleado Administrativo",
            exp_job2_company: "Secretaría General de la Gobernación de la Provincia de Buenos Aires",
            exp_job2_desc: "Responsable de tareas administrativas, organización y gestión dentro del organismo, demostrando constancia y capacidad de adaptación.",
            present: "Actualidad",
            edu_title: "Estudios",
            edu_degree: "Tecnicatura Universitaria en Programación",
            edu_status: "Estudiante de segundo año (Desde",
            edu_degree_en: "Inglés - First Certificate",
            edu_inst_en: "LINKS - English Institute",
            proj_title: "Repositorios y Proyectos",
            proj_1_desc: "Proyecto orientado a la visualización de datos censales y educativos usando mapas de calor.",
            proj_2_desc: "Aplicación o sistema independiente. Desarrollo integral enfocado a la administración general de un negocio.",
            proj_3_desc: "Sistema de listado inmobiliario para la visualización y gestión de propiedades.",
            proj_4_desc: "Interfaz de usuario desarrollada para la gestión de un club ecuestre (estudiantes, caballos, clases).",
            proj_5_desc: "Lógica de servidor, base de datos y API para soportar la plataforma de gestión ecuestre HRS.",
            proj_6_desc: "Página de aterrizaje publicitaria diseñada para ofrecer los servicios del software HRS a los clientes.",
            proj_btn: "Ver Repositorio",
            contact_title: "Contacto",
            contact_name_label: "Nombre",
            contact_email_label: "Correo Electrónico",
            contact_msg_label: "Mensaje",
            contact_btn: "Enviar Mensaje",
            footer_text: "&copy; 2026 Matheu Santiago. Creado para la materia Programación 3 - TUP UTN La Plata."
        },
        en: {
            header_subtitle: "Programming Student",
            nav_about: "About Me",
            nav_skills: "Skills",
            nav_experience: "Experience",
            nav_education: "Education",
            nav_projects: "Portfolio",
            nav_contact: "Contact",
            about_title: "About Me",
            about_desc: "I am a developer and a sophomore student in the University Technician in Programming program (UTN Regional Faculty La Plata). I have a passion for creating efficient and accessible software solutions, with a strong focus on Frontend and Backend development.",
            skills_title: "Technical Skills",
            exp_title: "Work Experience",
            exp_job1_title: "Freelance Developer",
            exp_job1_desc: "Development and maintenance of modern web applications, working based on specific client requirements and ensuring high-quality functional deliveries.",
            exp_job2_title: "Administrative Employee",
            exp_job2_company: "General Secretariat of the Government of the Province of Buenos Aires",
            exp_job2_desc: "Responsible for administrative tasks, organization, and management within the government body, demonstrating consistency and adaptability.",
            present: "Present",
            edu_title: "Education",
            edu_degree: "University Technician in Programming",
            edu_status: "Sophomore Student (Since",
            edu_degree_en: "English - First Certificate",
            edu_inst_en: "LINKS - English Institute",
            proj_title: "Portfolio",
            proj_1_desc: "Project focused on the visualization of census and educational data using heat maps.",
            proj_2_desc: "Independent app or system. Full-stack development focused on solving logical business problems.",
            proj_3_desc: "Real estate listing system for visualizing and managing properties.",
            proj_4_desc: "User interface developed for the management of an equestrian club (students, horses, classes).",
            proj_5_desc: "Server logic, database, and API to support the HRS equestrian management platform.",
            proj_6_desc: "Advertising landing page designed to offer the HRS software services to clients.",
            proj_btn: "View Repository",
            contact_title: "Contact Me",
            contact_name_label: "Name",
            contact_email_label: "Email Address",
            contact_msg_label: "Message",
            contact_btn: "Send Message",
            footer_text: "&copy; 2026 Matheu Santiago. Created for the Programming 3 course - TUP UTN La Plata."
        }
    };

    const dElements = document.querySelectorAll('[data-i18n]');
    const btnEs = document.getElementById('lang-es');
    const btnEn = document.getElementById('lang-en');
    const htmlTag = document.getElementById('html-tag');

    function setLanguage(lang) {
        if (!translations[lang]) return;

        // Se muestran los textos en el idioma que se seleccionó
        dElements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Se actualiza el atributo lang en la etiqueta del HTML
        htmlTag.setAttribute('lang', lang);

        // Se actualiza el boton que determina el idioma
        if (lang === 'es') {
            btnEs.classList.add('active');
            btnEn.classList.remove('active');
        } else {
            btnEn.classList.add('active');
            btnEs.classList.remove('active');
        }

        // Guardamos el idioma en localStorage para que quede guardado
        localStorage.setItem('langPref', lang);
    }

    // Se detecta el click en los botones de idioma
    btnEs.addEventListener('click', () => setLanguage('es'));
    btnEn.addEventListener('click', () => setLanguage('en'));

    // Se detecta si ya tenía un idioma guardado al cargar la página
    const savedLang = localStorage.getItem('langPref');
    if (savedLang) {
        setLanguage(savedLang);
    }

    // Menú hamburguesa
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    function toggleMenu() {
        mainNav.classList.toggle('active');
        hamburgerBtn.classList.toggle('active');
        const isExpanded = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isExpanded);
    }

    hamburgerBtn.addEventListener('click', toggleMenu);

    // Cerramos el menú cuando el usuario hace click en un link
    navLinksList.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Temas
    const themeBtns = document.querySelectorAll('.theme-btn');
    const rootHtmlVar = document.documentElement;

    function setTheme(theme) {
        rootHtmlVar.setAttribute('data-theme', theme);
        localStorage.setItem('themePref', theme);

        themeBtns.forEach(btn => {
            if (btn.getAttribute('data-theme-btn') === theme) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    themeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            setTheme(btn.getAttribute('data-theme-btn'));
        });
    });

    const savedTheme = localStorage.getItem('themePref');
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    }

    // Ventana modal para las imágenes
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const closeModal = document.querySelector(".close-modal");
    const projectCards = document.querySelectorAll('.project-card.hover-img');

    projectCards.forEach(card => {
        card.addEventListener('click', function (e) {
            // Si tocan el botón del repo, no hacemos nada
            if (e.target.closest('.project-link')) return;

            const bgMap = this.querySelector('.project-bg img');
            if (bgMap) {
                modal.classList.add('show');
                modal.setAttribute('aria-hidden', 'false');
                modalImg.src = bgMap.src;
                captionText.innerText = bgMap.alt;
                document.body.style.overflow = 'hidden'; // Se bloquea el scroll con el modal abierto
            }
        });
    });

    // Modal de la foto de perfil
    const profilePic = document.getElementById("profile-picture");
    if (profilePic) {
        profilePic.style.cursor = 'pointer';
        profilePic.addEventListener('click', function () {
            modal.classList.add('show');
            modal.setAttribute('aria-hidden', 'false');
            modalImg.src = this.src;
            captionText.innerText = this.alt;
            document.body.style.overflow = 'hidden';
        });
    }

    // Función que cierra el modal
    const hideModal = () => {
        modal.classList.remove('show');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto'; // Se vuelve a activar el scroll normal
        setTimeout(() => { modalImg.src = ''; }, 300); // Se limpia el src de la foto
    };

    if (closeModal) closeModal.addEventListener('click', hideModal);

    // Click afuera del modal lo cierra
    if (modal) {
        modal.addEventListener('click', function (e) {
            if (e.target !== modalImg && e.target !== captionText) {
                hideModal();
            }
        });
    }

    // Tecla Escape cierra el modal
    document.addEventListener('keydown', function (event) {
        if (event.key === "Escape" && modal.classList.contains('show')) {
            hideModal();
        }
    });

    // Envío del formulario por AJAX (así no recarga nada)
    const contactForm = document.getElementById("my-contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", async function (event) {
            event.preventDefault(); // Captura la redirección por defecto de Formspree
            formStatus.innerText = "Enviando...";
            formStatus.style.color = "var(--text-muted)";

            const data = new FormData(event.target);
            try {
                const response = await fetch(event.target.action, {
                    method: contactForm.method,
                    body: data,
                    headers: { 'Accept': 'application/json' }
                });

                if (response.ok) {
                    formStatus.innerText = "¡Mensaje enviado exitosamente!";
                    formStatus.style.color = "#10b981";
                    contactForm.reset(); // Se limpia el formulario después de enviar
                    setTimeout(() => { formStatus.innerText = ""; }, 5000); // Se limpia el mensaje de exito a los 5 segundos
                } else {
                    formStatus.innerText = "Hubo un error al enviar el mensaje.";
                    formStatus.style.color = "#ef4444";
                }
            } catch (error) {
                formStatus.innerText = "Error de red. Intenta nuevamente.";
                formStatus.style.color = "#ef4444";
            }
        });
    }

    // Botón de volver al inicio
    const backToTopBtn = document.getElementById("back-to-top");
    if (backToTopBtn) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                backToTopBtn.classList.add("visible");
            } else {
                backToTopBtn.classList.remove("visible");
            }
        });

        backToTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
