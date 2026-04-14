document.addEventListener('DOMContentLoaded', () => {
    // Translations
    const translations = {
        ko: {
            page_title: "황순신의 오라클 DB 강의 - Oracle Database 전문 강의",
            logo: "Oracle DB 강의",
            nav_why: "왜 이 강의인가요?",
            nav_curriculum: "강의 내용",
            nav_recommend: "추천 대상",
            nav_contact: "문의하기",
            hero_h1: "Oracle Database 전문 강의",
            hero_h2: "황순신의 오라클 DB 강의",
            hero_p: "실무 중심의 아키텍처 학습, 성능 튜닝, 그리고 실제 장애 대응 역량을 키우는 현장형 커리큘럼을 제공합니다.",
            hero_btn_view: "강의 보기",
            hero_btn_contact: "문의하기",
            about_h2: "왜 이 강의인가요?",
            about_p: "입문자에서 실무자까지, 오라클 전문가가 되기 위한 최적의 로드맵",
            about_target_h3: "대상",
            about_target_p: "주니어 DBA, 개발자, 인프라 운영자",
            about_scope_h3: "범위",
            about_scope_p: "기초부터 SQL, 아키텍처, 튜닝, 장애 분석까지",
            about_method_h3: "방법",
            about_method_p: "핵심 이론 + 실무 실습 + 실제 사례 기반 학습",
            curr_h2: "주요 강의 내용",
            curr_card1_h3: "ORACLE 기초",
            curr_card1_li1: "오라클 아키텍처 이해",
            curr_card1_li2: "인스턴스 및 데이터 파일 관리",
            curr_card1_li3: "세그먼트 및 테이블스페이스",
            curr_card2_h3: "SQL & 성능 튜닝",
            curr_card2_li1: "실행 계획(Execution Plan) 분석",
            curr_card2_li2: "인덱스 전략 및 최적화",
            curr_card2_li3: "옵티마이저 힌트(Hints) 활용",
            curr_card3_h3: "RAC / ASM 운영",
            curr_card3_li1: "고가용성(HA) 환경 구성",
            curr_card3_li2: "RAC 아키텍처 및 장애 복구",
            curr_card3_li3: "ASM 스토리지 관리 실무",
            curr_card4_h3: "장애 분석 실무",
            curr_card4_li1: "주요 ORA 에러 케이스 분석",
            curr_card4_li2: "Trace 및 Log 파일 분석법",
            curr_card4_li3: "데이터 백업 및 긴급 복구 전략",
            recom_h2: "이런 분께 추천합니다",
            recom_li1: "오라클 데이터베이스의 기본기를 다지고 싶은 입문자",
            recom_li2: "SQL 튜닝 및 성능 최적화 역량을 키우고 싶은 개발자",
            recom_li3: "실제 장애 대응 및 트러블슈팅 경험이 필요한 DBA",
            recom_li4: "인프라 전반의 데이터베이스 운영 능력을 강화하고 싶은 관리자",
            footer_label_contact: "문의 안내",
            footer_label_resources: "기술 자료",
            footer_blog_text: "ORACLEINTERNAL 블로그",
            footer_desc: "Oracle Architecture / Tuning / Troubleshooting 전문 강의",
            copyright_text: "황순신의 오라클 DB 강의. All rights reserved."
        },
        en: {
            page_title: "SunShin Hwang's Oracle DB - Specialized Oracle Database Lectures",
            logo: "Oracle DB Lecture",
            nav_why: "Why this lecture?",
            nav_curriculum: "Curriculum",
            nav_recommend: "Who is it for?",
            nav_contact: "Contact",
            hero_h1: "Specialized Oracle Database Lectures",
            hero_h2: "SunShin Hwang's Oracle DB",
            hero_p: "Practical architecture learning, performance tuning, and hands-on curriculum to develop real-world troubleshooting skills.",
            hero_btn_view: "View Lectures",
            hero_btn_contact: "Contact",
            about_h2: "Why this lecture?",
            about_p: "The optimal roadmap for becoming an Oracle expert, from beginners to professionals.",
            about_target_h3: "Target",
            about_target_p: "Junior DBAs, Developers, IT Infrastructure Operators",
            about_scope_h3: "Scope",
            about_scope_p: "From basics to SQL, architecture, tuning, and troubleshooting",
            about_method_h3: "Method",
            about_method_p: "Core theory + Hands-on practice + Real-world case studies",
            curr_h2: "Core Curriculum",
            curr_card1_h3: "ORACLE Basics",
            curr_card1_li1: "Understanding Oracle Architecture",
            curr_card1_li2: "Instance and Data File Management",
            curr_card1_li3: "Segments and Tablespaces",
            curr_card2_h3: "SQL & Performance Tuning",
            curr_card2_li1: "Execution Plan Analysis",
            curr_card2_li2: "Index Strategy and Optimization",
            curr_card2_li3: "Optimizer Hints Utilization",
            curr_card3_h3: "RAC / ASM Operation",
            curr_card3_li1: "HA Environment Configuration",
            curr_card3_li2: "RAC Architecture & Disaster Recovery",
            curr_card3_li3: "ASM Storage Management Practice",
            curr_card4_h3: "Troubleshooting Practice",
            curr_card4_li1: "Major ORA Error Case Analysis",
            curr_card4_li2: "Trace and Log File Analysis",
            curr_card4_li3: "Data Backup & Emergency Recovery Strategy",
            recom_h2: "Recommended For",
            recom_li1: "Beginners wanting to build strong Oracle DB fundamentals",
            recom_li2: "Developers aiming to enhance SQL tuning and optimization skills",
            recom_li3: "DBAs needing real-world troubleshooting experience",
            recom_li4: "Managers wanting to strengthen overall infrastructure operation skills",
            footer_label_contact: "Inquiry",
            footer_label_resources: "Resources",
            footer_blog_text: "ORACLEINTERNAL Blog",
            footer_desc: "Professional lectures on Oracle Architecture / Tuning / Troubleshooting",
            copyright_text: "SunShin Hwang's Oracle DB Lecture. All rights reserved."
        }
    };

    function setLanguage(lang) {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (element.tagName === 'TITLE') {
                    document.title = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });

        // Toggle active button state
        document.getElementById('btn-ko').classList.toggle('active', lang === 'ko');
        document.getElementById('btn-en').classList.toggle('active', lang === 'en');
        
        // Update html lang attribute
        document.documentElement.lang = lang;
        
        // Save preference
        localStorage.setItem('preferred-lang', lang);
    }

    document.getElementById('btn-ko').addEventListener('click', () => setLanguage('ko'));
    document.getElementById('btn-en').addEventListener('click', () => setLanguage('en'));

    // Check for saved preference or browser language
    const savedLang = localStorage.getItem('preferred-lang');
    const browserLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
    setLanguage(savedLang || browserLang);

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Offset for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple scroll reveal effect
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});
