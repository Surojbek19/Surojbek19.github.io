import { desc, em } from "framer-motion/client";
import { title } from "process";

export const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects",
            experience: "Experience",
            contact: "Contact",
        },

        hero: {
            role: "Full-Stack Developer",
            intro: "Building scalable web applications, marketplaces, and business platforms with modern technologies including Next.js, NestJS, GraphQL, and MongoDB.",
            experience: "Years Experience",
            projects: "Projects",
            buttonProjects: "View Projects",
            buttonCV: "Download CV",
        },

        about: {
            title: "About Me",
            description1: "I am a Full-Stack Developer with 3 years of professional experience building modern web applications and digital platforms. My expertise includes React, Next.js, TypeScript, Node.js, NestJS, GraphQL, MongoDB, and Docker.",
            description2: "I enjoy transforming ideas into real products and creating user-focused experiences that are scalable, maintainable, and visually appealing. My goal is to build software that not only works efficiently but also delivers meaningful value to users.",
            experience: "Years Experience",
            projects: "CompletedProjects",
            fullStack: "Years FullStack",
            front: " Years Frontend",
            education: "Education",
            major1: "Financial Management",
            major2: "Business Administration",
            language: "Languages",
            uzbek: "Uzbek",
            russian: "Russian",
            english: "English",
            korean: "Korean",
            native: "Native",
            fluent: "Fluent",
            intermedieted: "Intermediate",
        },

        skills: {
            skills: "Skills",
        },

        projects: {
            title: "Projects",
            description1: "Vestra is a full-stack motorcycle marketplace platform designed to connect buyers and dealers through an intuitive user experience. The platform includes role-based authentication, advanced filtering, multilingual support, real-time communication, community features, and a complete dealer management system.",
            point1: "Role-Based Authentication",
            point2: "Dealer Vehicle Management",
            point3: "Dynamic Filtering System",
            point4: " Real-Time Chatting",
            point5: "Multilingual Support",
            description2: "EcoFlora is a modern e-commerce platform designed for plant enthusiasts. The platform provides a seamless shopping experience with product browsing, category management, user authentication, shopping cart functionality, and responsive design optimized for both desktop and mobile devices.",
            bullet1: "Product Catalog Management",
            bullet2: " Shopping Cart System",
            bullet3: "User Authentication and Authorization",
            bullet4: "Responsive Design",
            bullet5: "Product Categories & Search",
            title1: "Other Projects",
            description3: "A private experimental school combining IT education with project-based learning to develop creativity, problem-solving, and academic excellence",
            description4: "A transportation platform that streamlines daily driving operations with route planning, GPS navigation, and real-time updates.",
        },

        experience: {
            title: "Experience",
            description1: "Developed scalable web applications using Next.js, React, NestJS, GraphQL, and MongoDB. Built authentication systems, real-time chat, commenting features, advanced filtering, and role-based access control. Managed deployments using Docker, Nginx, VPS infrastructure, and CI/CD workflows while ensuring performance and cross-device compatibility.",
            description2: "Developed responsive web interfaces using React, Next.js, TypeScript, SCSS, and Material UI. Built advanced filtering systems, authentication flows, real-time notifications, and reusable UI components while integrating GraphQL and REST APIs.",
        },

        contact: {
            title: "Lets Work Together",
            description: "I'm always interested in discussing new projects, collaborations, and opportunities.",
            email: "Email",
            github: "GitHub",
            linkedin: "LinkedIn",
        }
    },

    ko: {
        nav: {
            home: "홈",
            about: "소개",
            skills: "기술",
            projects: "프로젝트",
            experience: "경력",
            contact: "연락처",
        },

        hero: {
            role: "Full-Stack Developer",
            intro: "Next.js, NestJS, GraphQL, MongoDB 등 최신 기술을 사용하여 확장 가능한 웹 애플리케이션, 마켓플레이스 및 비즈니스 플랫폼을 구축합니다.",
            experience: "년차 경험",
            projects: "프로젝트",
            buttonProjects: "프로젝트 보기",
            buttonCV: "이력서 다운로드",
        },

        about: {
            title: "소개",

            description1:
                "저는 현대적인 웹 애플리케이션과 디지털 플랫폼을 개발하는 3년 이상의 경력을 가진 풀스택 개발자입니다. React, Next.js, TypeScript, Node.js, NestJS, GraphQL, MongoDB, Docker를 활용한 개발 경험을 보유하고 있습니다.",

            description2:
                "아이디어를 실제 제품으로 구현하고, 확장 가능하며 유지보수가 용이한 사용자 중심의 경험을 만드는 것을 즐깁니다. 저의 목표는 효율적으로 동작할 뿐만 아니라 사용자에게 의미 있는 가치를 제공하는 소프트웨어를 개발하는 것입니다.",

            experience: "경력",
            projects: "완료한 프로젝트",
            fullStack: "풀스택 경력",
            front: "프론트엔드 경력",

            education: "학력",

            major1: "재무관리",
            major2: "경영학",

            language: "언어",

            uzbek: "우즈베크어",
            russian: "러시아어",
            english: "영어",
            korean: "한국어",

            native: "원어민",
            fluent: "유창함",
            intermedieted: "중급",
        },

        skills: {
            skills: "기술",
        },

        projects: {
            title: "프로젝트",

            description1:
                "Vestra는 구매자와 딜러를 연결하기 위해 개발된 풀스택 오토바이 마켓플레이스 플랫폼입니다. 역할 기반 인증 시스템, 고급 필터링 기능, 다국어 지원, 실시간 채팅, 커뮤니티 기능, 그리고 종합적인 딜러 관리 시스템을 제공합니다.",

            point1: "역할 기반 인증",
            point2: "딜러 차량 관리",
            point3: "동적 필터링 시스템",
            point4: "실시간 채팅",
            point5: "다국어 지원",

            description2:
                "EcoFlora는 식물을 사랑하는 사용자들을 위해 개발된 현대적인 전자상거래 플랫폼입니다. 상품 탐색, 카테고리 관리, 사용자 인증, 장바구니 기능, 그리고 데스크톱과 모바일 환경에 최적화된 반응형 디자인을 제공합니다.",

            bullet1: "상품 카탈로그 관리",
            bullet2: "장바구니 시스템",
            bullet3: "사용자 인증 및 권한 관리",
            bullet4: "반응형 디자인",
            bullet5: "상품 카테고리 및 검색",
            title1: "기타 프로젝트",
            description3: "IT 교육과 프로젝트 기반 학습을 결합한 사립 실험학교로, 학생들의 창의력, 문제 해결 능력, 그리고 학업적 성장을 지원하는 교육 플랫폼입니다.",
            description4: "경로 계획, GPS 내비게이션, 실시간 정보 제공을 통해 운송 업무의 효율성과 운전자 경험을 향상시키는 운송 지원 플랫폼입니다.",
        },

        experience: {
            title: "경력",

            description1:
                "Next.js, React, NestJS, GraphQL, MongoDB를 활용하여 확장 가능한 웹 애플리케이션을 개발했습니다. 인증 시스템, 실시간 채팅, 댓글 기능, 고급 필터링, 역할 기반 접근 제어(RBAC)를 구현했으며, Docker, Nginx, VPS 인프라 및 CI/CD 워크플로우를 활용한 배포와 운영을 담당했습니다. 또한 성능 최적화와 다양한 디바이스 환경에서의 호환성을 보장했습니다.",

            description2:
                "React, Next.js, TypeScript, SCSS, Material UI를 활용하여 반응형 웹 인터페이스를 개발했습니다. GraphQL 및 REST API를 연동하여 고급 필터링 시스템, 인증 프로세스, 실시간 알림 기능, 그리고 재사용 가능한 UI 컴포넌트를 구축했습니다.",
        },

        contact: {
            title: "연락하기",
            description:
                "새로운 프로젝트, 협업, 그리고 다양한 기회에 대해 언제든지 연락 주시기 바랍니다.",
            email: "이메일",
            github: "GitHub",
            linkedin: "LinkedIn",
        }

    },
};