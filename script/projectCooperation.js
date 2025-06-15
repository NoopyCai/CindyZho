document.addEventListener('DOMContentLoaded', function () {
    const projectData = [
        {
            title: "專案一：智慧護理互動平台<br>合作單位：台灣透明玻璃公司<br>專案角色：使用者角度分析、可行性評估、概念應用設計",
            description: "此專案以醫護環境為情境， 運用透明玻璃顯示幕結合投影與AI互動技術， 提升護理人員工作效率與病患體驗。 設計中以「人」為核心，整合人-機-環的互動需求， 提出一套直觀、溫馨、便捷的互動平台概念。",
            mainImage: "/images/Quanzhou_01.png",
            galleryImages: [
                "/images/Quanzhou_02.png",
                "/images/Quanzhou_03.png"
            ],
            layoutType: "healthcare"
        },
        {
            title: "專案二：四季禮品系列<br>合作單位：泉州海峽兩岸工作坊<br>",
            description: "以中國四季名花為主題，結合花藝文化與禮品設計， 以花瓣造型延伸為茶杯及托盤，發展出一套代表四季平安的茶杯禮盒系列。包裝以抽拉式禮盒結合簍空花型的設計，並結合花卉的線條感做壓花設計。。",
            mainImage: "/images/gift_01.png",
            conceptImages: [
                "/images/gift_02.png",
            ],
            layoutType: "seasons"
        }
    ];

    let projectSwiper;

    function initProjectSwiper() {
        if (document.querySelector('.portfolioSwiper')) {
            projectSwiper = new Swiper('.portfolioSwiper', {
                slidesPerView: 1.8,
                spaceBetween: 30,
                loop: false,
                centeredSlides: true,
                grabCursor: true,
                initialSlide: 0,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 25,
                        centeredSlides: true,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                        centeredSlides: true,
                    }
                },
                on: {
                    init: function () {
                        updateProjectDetail(this.activeIndex);
                        updateActiveCard(this.activeIndex);
                    },
                    slideChange: function () {
                        updateProjectDetail(this.activeIndex);
                        updateActiveCard(this.activeIndex);
                    }
                }
            });
        }
    }

    function updateProjectDetail(index) {
        const data = projectData[index];
        const detailContent = document.getElementById('portfolioDetail');

        let layoutHTML = '';

        switch (data.layoutType) {
            case 'healthcare':
                layoutHTML = `
                    <div class="project-showcase layout-healthcare">
                        <div class="project-main-image">
                            <img src="${data.mainImage}" alt="${data.title}">
                        </div>
                        
                        <div class="project-info">
                            <div class="project-info-content">
                                <h3 class="project-title">${data.title}</h3>
                                <div class="project-description">${data.description}</div>
                            </div>
                        </div>
                        
                        <div class="project-gallery">
                            ${data.galleryImages.map(img => `
                                <div class="gallery-item">
                                    <img src="${img}" alt="${data.title}">
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;
                break;

            case 'seasons':
                layoutHTML = `
                    <div class="project-showcase layout-seasons">
                        <div class="project-header">
                            <div class="project-main-image">
                                <img src="${data.mainImage}" alt="${data.title}">
                            </div>
                            
                            <div class="project-info">
                                <h3 class="project-title">${data.title}</h3>
                                <div class="project-description">${data.description}</div>
                            </div>
                        </div>
                        
                        <div class="project-concept">
                            <div class="concept-gallery">
                                ${data.conceptImages.map(img => `
                                    <div class="gallery-item">
                                        <img src="${img}" alt="${data.title}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                break;

            default:
                layoutHTML = `
                    <div class="project-showcase">
                        <div class="project-info">
                            <h3 class="project-title">${data.title}</h3>
                            <div class="project-description">${data.description}</div>
                        </div>
                    </div>
                `;
        }

        detailContent.innerHTML = layoutHTML;
    }

    function updateActiveCard(activeIndex) {
        document.querySelectorAll('.portfolio-card').forEach((card, index) => {
            card.classList.toggle('active', index === activeIndex);
        });
    }

    function bindProjectEvents() {
        const projectCards = document.querySelectorAll('.portfolio-card');
        projectCards.forEach((card, index) => {
            card.addEventListener('click', function () {
                if (projectSwiper) {
                    projectSwiper.slideTo(index);
                }
                updateProjectDetail(index);
                updateActiveCard(index);
            });
        });
    }

    // 初始化
    setTimeout(() => {
        initProjectSwiper();
        bindProjectEvents();
        // 預設顯示第一個項目
        updateProjectDetail(0);
        updateActiveCard(0);
    }, 100);
});
