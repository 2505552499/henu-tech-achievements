// 成果数据
const achievementsData = [
    {
        id: 1,
        title: "钙钛矿太阳能电池高效率制备技术",
        leader: "李胜军",
        institution: "未来技术学院",
        field: "新能源材料",
        direction: "钙钛矿太阳能电池",
        description: "自主研发制备出高于商业化特性指标的核心材料：超纯超干磷化铟（纯度达99.994%）；高性能低温溶液；核心材料MAI；硫化材料；磷化甲基水滴法，可选择性分散定向相关剂。实现机性绿纳米颗粒小于5μm，硫化甲酯，磷化酰胺碱性在开发有机材料钙钛矿太阳能电池方面有重要意义。对有机性能影响较大的因素是湿度。本团队已实现99.5%以上的有机盐公开量产，可消耗太阳积约钙钛矿生产线量需求。",
        images: ["perovskite-1.jpg", "perovskite-2.jpg", "perovskite-3.jpg"],
        cooperation: ["技术开发", "技术转让", "作价入股"],
        contact: {
            project: { name: "李胜军", phone: "15194605886" },
            academic: { name: "张超", phone: "15737955421" }
        }
    },
    {
        id: 2,
        title: "全印刷成膜技术制备高质量钙钛矿薄膜",
        leader: "李胜军",
        institution: "未来技术学院",
        field: "新能源材料",
        direction: "3D打印制备工艺",
        description: "全印刷成膜技术，实现高质量钙钛矿薄膜的高温量制备。解决了大面积钙钛矿薄膜成膜性差的问题，同时，无预涂润先到工艺进一步减少组件性能损耗。目前本团队已搭建一条30*30cm的钙钛矿组件生产小试线，已初步通过组件生产工艺。全印刷组件制造过程条件用品质的黄金属电极及高质量空管溶液等。极大降低成本。同时，本工艺适合制备柔性组件，钙钛矿太阳能电池的应用场景，与硅唯电池实现成本势力。",
        processImage: "3d-printing-process.jpg",
        cooperation: ["技术开发", "技术转让", "作价入股"],
        contact: {
            project: { name: "李胜军", phone: "15194605886" },
            academic: { name: "张超", phone: "15737955421" }
        }
    }
];

// 更多成果数据（用于扩展到30个）
const additionalAchievements = [
    {
        id: 3,
        title: "高效率有机-无机杂化太阳能电池技术",
        leader: "王教授",
        institution: "化学化工学院",
        field: "新能源材料",
        direction: "有机太阳能电池",
        description: "开发了新型有机-无机杂化太阳能电池，光电转换效率达到18.5%，在同类产品中处于国际先进水平。该技术具有制备简单、成本低廉、可大面积制备等优势。",
        cooperation: ["技术开发", "产业化合作"],
        contact: {
            project: { name: "王教授", phone: "13800138000" },
            academic: { name: "李博士", phone: "13900139000" }
        }
    },
    {
        id: 4,
        title: "新型锂电池正极材料制备技术",
        leader: "张研究员",
        institution: "材料科学与工程学院",
        field: "储能材料",
        direction: "锂电池技术",
        description: "自主研发的新型锂电池正极材料，比容量达到280mAh/g，循环寿命超过2000次，在电动汽车和储能领域具有广阔应用前景。",
        cooperation: ["技术转让", "合作开发", "作价入股"],
        contact: {
            project: { name: "张研究员", phone: "13700137000" },
            academic: { name: "赵博士", phone: "13600136000" }
        }
    },
    {
        id: 5,
        title: "智能传感器芯片设计与制造",
        leader: "刘教授",
        institution: "电子信息学院",
        field: "电子信息",
        direction: "传感器技术",
        description: "开发了具有自主知识产权的智能传感器芯片，集成度高、功耗低、精度高，可广泛应用于物联网、智能制造等领域。",
        cooperation: ["技术开发", "产业化合作"],
        contact: {
            project: { name: "刘教授", phone: "13500135000" },
            academic: { name: "周博士", phone: "13400134000" }
        }
    }
];

// 当前显示的成果数量
let currentAchievementCount = 2;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    generateQRCodes();
    setupEventListeners();
    addLoadingAnimation();
});

// 生成二维码
function generateQRCodes() {
    // 为已存在的成果生成二维码
    [...achievementsData, ...additionalAchievements].forEach((achievement) => {
        const qrElement = document.getElementById(`qr-${achievement.id}`);
        if (qrElement && qrElement.children.length === 0) {
            // 生成指向详情页面的URL
            const detailUrl = `${window.location.origin}/achievement-${achievement.id}.html`;
            
            // 创建二维码
            QRCode.toCanvas(qrElement, detailUrl, {
                width: 64,
                height: 64,
                margin: 1,
                color: {
                    dark: '#333333',
                    light: '#FFFFFF'
                }
            }, function (error) {
                if (error) {
                    console.error('二维码生成失败:', error);
                    qrElement.innerHTML = '<div style="color: red; font-size: 12px;">二维码生成失败</div>';
                }
            });
        }
    });
}

// 设置事件监听器
function setupEventListeners() {
    // 为成果卡片添加点击效果
    const achievementCards = document.querySelectorAll('.achievement-card');
    achievementCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // 为图片添加点击放大效果
    const resultImages = document.querySelectorAll('.result-img, .process-img');
    resultImages.forEach(img => {
        img.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
}

// 加载更多成果
function loadMoreAchievements() {
    const achievementsGrid = document.querySelector('.achievements-grid');
    const loadMoreBtn = document.querySelector('.load-more button');
    
    // 显示加载状态
    loadMoreBtn.textContent = '加载中...';
    loadMoreBtn.disabled = true;
    
    setTimeout(() => {
        // 计算要加载的成果数量
        const remainingCount = Math.min(5, additionalAchievements.length - (currentAchievementCount - 2));
        
        for (let i = 0; i < remainingCount; i++) {
            const achievementIndex = currentAchievementCount - 2 + i;
            if (achievementIndex < additionalAchievements.length) {
                const achievement = additionalAchievements[achievementIndex];
                const achievementCard = createAchievementCard(achievement);
                achievementsGrid.appendChild(achievementCard);
                currentAchievementCount++;
            }
        }
        
        // 生成新添加的二维码
        generateQRCodes();
        
        // 重置按钮状态
        loadMoreBtn.textContent = '加载更多成果';
        loadMoreBtn.disabled = false;
        
        // 如果已经加载完所有成果，隐藏按钮
        if (currentAchievementCount >= 30) {
            document.querySelector('.load-more').style.display = 'none';
        }
        
        // 添加动画效果
        const newCards = achievementsGrid.querySelectorAll('.achievement-card:not(.loaded)');
        newCards.forEach((card, index) => {
            card.classList.add('loading');
            setTimeout(() => {
                card.classList.add('loaded');
            }, index * 100);
        });
        
    }, 1000);
}

// 创建成果卡片
function createAchievementCard(achievement) {
    const card = document.createElement('div');
    card.className = 'achievement-card';
    
    card.innerHTML = `
        <div class="achievement-header">
            <h2>${achievement.title}</h2>
            <div class="qr-code" id="qr-${achievement.id}"></div>
        </div>
        <div class="achievement-content">
            <div class="team-leader">
                <strong>团队负责人：</strong>${achievement.leader}
            </div>
            <div class="institution">
                <strong>所在学院：</strong>${achievement.institution}
            </div>
            <div class="research-field">
                <strong>涉及技术领域：</strong>${achievement.field}
            </div>
            <div class="main-direction">
                <strong>主要研究方向：</strong>${achievement.direction}
            </div>
            <div class="innovation-results">
                <h3>创新成果</h3>
                <p class="description">
                    ${achievement.description}
                </p>
            </div>
            <div class="cooperation">
                <strong>合作形式：</strong>
                <span class="cooperation-tags">
                    ${achievement.cooperation.map(coop => `<span class="tag">${coop}</span>`).join('')}
                </span>
            </div>
            <div class="contact-info">
                <div class="contact-row">
                    <span><strong>项目联系人：</strong>${achievement.contact.project.name}</span>
                    <span><strong>联系电话：</strong>${achievement.contact.project.phone}</span>
                </div>
                <div class="contact-row">
                    <span><strong>学科联系人：</strong>${achievement.contact.academic.name}</span>
                    <span><strong>联系电话：</strong>${achievement.contact.academic.phone}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

// 图片模态框
function openImageModal(src, alt) {
    // 创建模态框
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <img src="${src}" alt="${alt}" class="modal-image">
            <div class="modal-caption">${alt}</div>
        </div>
    `;
    
    // 添加样式
    modal.style.cssText = `
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.8);
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.cssText = `
        position: relative;
        max-width: 90%;
        max-height: 90%;
        text-align: center;
    `;
    
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.style.cssText = `
        position: absolute;
        top: -40px;
        right: 0;
        color: white;
        font-size: 2rem;
        cursor: pointer;
    `;
    
    const modalImage = modal.querySelector('.modal-image');
    modalImage.style.cssText = `
        max-width: 100%;
        max-height: 100%;
        border-radius: 8px;
    `;
    
    const caption = modal.querySelector('.modal-caption');
    caption.style.cssText = `
        color: white;
        margin-top: 1rem;
        font-size: 1.1rem;
    `;
    
    // 添加到页面
    document.body.appendChild(modal);
    
    // 绑定关闭事件
    closeBtn.onclick = () => modal.remove();
    modal.onclick = (e) => {
        if (e.target === modal) modal.remove();
    };
    
    // ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') modal.remove();
    });
}

// 添加加载动画
function addLoadingAnimation() {
    const cards = document.querySelectorAll('.achievement-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// 生成更多示例数据（补充到30个）
function generateMoreAchievements() {
    const fields = ["新能源", "人工智能", "生物医学", "材料科学", "环境工程", "信息技术"];
    const institutions = ["未来技术学院", "计算机与信息工程学院", "化学化工学院", "生命科学学院", "材料科学与工程学院"];
    const cooperationTypes = ["技术开发", "技术转让", "作价入股", "产业化合作", "联合研发"];
    
    for (let i = 6; i <= 30; i++) {
        const achievement = {
            id: i,
            title: `科技成果${i}：创新技术解决方案`,
            leader: `教授${i}`,
            institution: institutions[Math.floor(Math.random() * institutions.length)],
            field: fields[Math.floor(Math.random() * fields.length)],
            direction: `研究方向${i}`,
            description: `这是第${i}个科技成果的详细描述。该项目在相关领域取得了重要突破，具有重要的科学价值和应用前景。通过创新的技术路线和先进的实验方法，我们成功解决了行业内的关键技术难题。`,
            cooperation: cooperationTypes.slice(0, Math.floor(Math.random() * 3) + 2),
            contact: {
                project: { name: `联系人${i}`, phone: `1${Math.floor(Math.random() * 9000000000) + 1000000000}` },
                academic: { name: `学科联系人${i}`, phone: `1${Math.floor(Math.random() * 9000000000) + 1000000000}` }
            }
        };
        additionalAchievements.push(achievement);
    }
}

// 初始化时生成更多成果数据
generateMoreAchievements(); 