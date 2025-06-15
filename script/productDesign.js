document.addEventListener('DOMContentLoaded', function () {
    const portfolioData = [
        {
            title: "對象年齡：3-8歲兒童｜結合：實體探索工具＋數位互動引導",
            subtitle: "",
            description: "主要使用者為 3 至 8 歲兒童，此階段的孩子感官發展迅速，對世界充滿好奇，適合「做中學」的學習方式。我們也訪談多位家長發現，在都市中缺乏安全的探索環境，孩子鮮少有機會主動參與、觀察與創造。因此，我們強調設計的趣味性、啟發性與參與感，希望讓孩子愛上探索，並在其中培養感官、思考與科技素養。",
            mainImage: "images/children_detail_p02.png",
            galleryImages: [
                "images/children_detail_p01.png",
            ],
            layoutType: "gallery-first",
            reverseContent: {
                title: "SENSO 兒童感官探索遊戲組",
                description: "SENSO 結合實體探索工具與螢幕互動裝置，引導兒童在戶外或生活空間中進行任務式探索。以任務的方式，鼓勵孩子用眼、耳、手、腳親身體驗，並將所觀察到的聲音、影像、觸感等回饋回數位裝置中，創造屬於自己的故事內容。目標是讓科技不再只是單向輸出的娛樂，而成為與真實世界對話的橋樑。",
            },
            thirdContent: {
                title: "SENSO 互動繪本介面設計",
                description: "為了讓孩子能自然地從「故事閱讀」到「真實探索」，我們設計了一款結合互動繪本與任務引導的介面，讓孩子在閱讀時，跟著任務引導，走向戶外觀察與體驗。整體設計強調簡潔明亮、視覺清晰、操作直覺，並結合語音與動態提示，適合3至8歲兒童使用。",
                image:"images/SENSO.png",
            }
        },
        {
            title: "CHILDLIKE 童趣多功能兒童座椅",
            subtitle: "",
            description: "從坐為出發點，建立如何坐的習慣，同時增加坐具的趣味設計來激發兒童的創造力，鼓勵他們在使用的過程中進行各種想像和遊戲。<br>CHILDLIKE是一款為幼稚園裡的小孩設計的多功能坐具，兼具學習與玩的功能，<br>更是促進兒童成長和發展的重要工具。它融合了安全性、舒適性和趣味性，<br>滿足不同情況下的需求，自由拆解與組裝，讓兒童在坐的過程中學習、互動和探索。",
            mainImage: "images/CHILDLIKE_main.png",
            galleryImages: [
                "images/CHILDLIKE_detail_01.png",
                "images/CHILDLIKE_detail_02.png",
                "images/CHILDLIKE_detail_03.png"
            ],
            features: [
                "模組化設計：孩子可自由拆解與組裝，增強互動樂趣",
                "多功能用途：可作為座椅、積木桌、畫板、遊戲沙桌",
                "安全材質：圓角處理與穩固結構，確保安全使用"
            ],
            layoutType: "image-left",
            reverseContent: null,
            thirdContent: null
        },
        {
            title: "Sore Reliefer 智能護腕",
            subtitle: "",
            description: "一款運用中醫治療舒緩肌肉疼痛、操作簡易且安全的保健產品，為長期受手部疾病困擾的患者考量的設計，內建溫度調節與按摩功能，有效舒緩手腕痠痛。設計一體化便攜式，不僅滿足使用需求，視覺上更是給人舒適感。",
            mainImage: "images/SORERELIEFER_main.png",
            galleryImages: [
                "images/SORERELIEFER_detail.png",
            ],
            features: [
                "智能溫控：具備溫度顯示與調節功能，貼合個人需求",
                "符合人體工學：環狀包覆設計，佩戴舒適",
                "操作簡便：一鍵開啟，多段模式調整"
            ],
            layoutType: "full-width",
            reverseContent: null,
            thirdContent: null
        }
    ];

    let portfolioSwiper;

    function initPortfolioSwiper() {
        if (document.querySelector('.portfolioSwiper')) {
            portfolioSwiper = new Swiper('.portfolioSwiper', {
                slidesPerView: 2.5,
                spaceBetween: 30,
                loop: false,
                centeredSlides: true,
                grabCursor: true,
                initialSlide: 1,
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
                        slidesPerView: 1.8,
                        spaceBetween: 25,
                        centeredSlides: true,
                    },
                    1024: {
                        slidesPerView: 2.5,
                        spaceBetween: 30,
                        centeredSlides: true,
                    },
                    1200: {
                        slidesPerView: 2.8,
                        spaceBetween: 40,
                        centeredSlides: true,
                    },
                },
                on: {
                    init: function () {
                        updatePortfolioDetail(this.activeIndex);
                        updateActiveCard(this.activeIndex);
                    },
                    slideChange: function () {
                        updatePortfolioDetail(this.activeIndex);
                        updateActiveCard(this.activeIndex);
                    }
                }
            });
        }
    }

    function updatePortfolioDetail(index) {
        const data = portfolioData[index];
        const detailContent = document.getElementById('portfolioDetail');

        let layoutHTML = '';

        switch (data.layoutType) {
            case 'gallery-first':
                // 版本一：圖片gallery在上方，主圖在下方
                layoutHTML = `
                    <div class="product-showcase layout-gallery-first">
                        <div class="product-content">
                            <div class="product-info reverse">
                                <div class="product-info-content">
                                    <h3 class="product-title">${data.reverseContent ? data.reverseContent.title : data.title}</h3>
                                    
                                    <div class="product-description">
                                        <div>${data.reverseContent ? data.reverseContent.description : data.description}</div>
                                    </div>
                                </div>
                                <div class="product-main-image">
                                    <img src="${data.galleryImages && data.galleryImages[0] ? data.galleryImages[0] : data.mainImage}" alt="${data.title}">
                                </div>
                            </div>
                            <div class="why-explore">
                                <img class="desktop-version" src="images/whyExplore.png" alt="">
                            </div>
                            <div class="why-explore-mobile mobile-version">
                                <img src="images/whyExplore_mobile-1.jpg" alt="">
                                <img src="images/whyExplore_mobile-2.jpg" alt="">
                                <img src="images/whyExplore_mobile-3.jpg" alt="">
                            </div>
                             <div class="product-info">
                                <div class="product-info-content">
                                    <h3 class="product-title">${data.title}</h3>
                                    <div class="product-description">
                                        <div>${data.description}</div>
                                    </div>
                                </div>
                                <div class="product-main-image">
                                    <img src="${data.mainImage}" alt="${data.title}">
                                </div>
                            </div>
                             <div class="product-info reverse">
                                <div class="product-info-content">
                                    <h3 class="product-title">${data.thirdContent ? data.thirdContent.title : (data.reverseContent ? data.reverseContent.title : data.title)}</h3>
                                    
                                    <div class="product-description">
                                        <div>${data.thirdContent ? data.thirdContent.description : (data.reverseContent ? data.reverseContent.description : data.description)}</div>
                                    </div>
                                    <a class="learn-more-btn">了解更多</a>
                                </div>
                                <div class="product-main-image">
                                    <img src="${data.thirdContent && data.thirdContent.image ? data.thirdContent.image : data.mainImage}" alt="${data.title}">
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'image-left':
                // 版本二：主圖在左側，內容在右側，gallery在底部
                layoutHTML = `
                    <div class="product-showcase layout-image-left">
                        <div class="product-images">
                            <div class="main-image">
                                <img src="${data.mainImage}" alt="${data.title}">
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <h2 class="product-title">${data.title}</h2>
                            
                            <div class="product-description">
                                <div>${data.description}</div>
                            </div>
                            
                            <div class="product-features">
                                <ul>
                                    ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="product-gallery-bottom">
                                ${data.galleryImages.map(img => `
                                    <div class="gallery-item">
                                        <img src="${img}" alt="${data.title}">
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
                break;

            case 'full-width':
                // 版本三：全寬主圖在頂部，內容在下方，gallery橫排
                layoutHTML = `
                    <div class="product-showcase layout-full-width">
                        <div class="product-hero-image">
                            <img src="${data.mainImage}" alt="${data.title}">
                        </div>
                        
                        <div class="product-content-section">
                            <div class="product-header">
                                <h2 class="product-title">${data.title}</h2>
                                <div class="product-description">
                                    <div>${data.description}</div>
                                </div>
                            </div>
                            
                            <div class="product-details">
                                <div class="product-features">
                                    <ul>
                                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                                    </ul>
                                </div>
                                
                                <div class="product-gallery-horizontal">
                                    ${data.galleryImages.map(img => `
                                        <div class="gallery-item">
                                            <img src="${img}" alt="${data.title}">
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                break;

            default:
                // 默認版本（原來的版本）
                layoutHTML = `
                    <div class="product-showcase">
                        <div class="product-images">
                            <div class="main-image">
                                <img src="${data.mainImage}" alt="${data.title}">
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <h2 class="product-title">${data.title}</h2>
                            
                            <div class="product-description">
                                <div>${data.description}</div>
                            </div>
                            
                            <div class="product-features">
                                <ul>
                                    ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                                </ul>
                            </div>
                            <div class="product-gallery">
                                ${data.galleryImages.map(img => `
                                    <div class="gallery-item">
                                        <img src="${img}" alt="${data.title}">
                                    </div>
                                `).join('')}
                            </div>
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

    function bindPortfolioEvents() {
        const portfolioCards = document.querySelectorAll('.portfolio-card');
        portfolioCards.forEach((card, index) => {
            card.addEventListener('click', function () {
                if (portfolioSwiper) {
                    portfolioSwiper.slideTo(index);
                }
                updatePortfolioDetail(index);
                updateActiveCard(index);
            });
        });
    }

    // 初始化
    setTimeout(() => {
        initPortfolioSwiper();
        bindPortfolioEvents();
        // 預設顯示中間項目（索引 1）
        updatePortfolioDetail(1);
        updateActiveCard(1);
    }, 100);
});