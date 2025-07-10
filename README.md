# 河南大学科技创新团队成果展示网站

这是一个基于参考网站 `http://114.216.3.75:39097/kjcgzyzh/achievement-show?id=807` 设计的静态科技成果展示网站，专门用于展示河南大学科技创新团队的30个科技成果。

## 🌟 主要功能

- **响应式设计**：适配桌面、平板和手机等各种设备
- **二维码展示**：每个成果都有专属二维码，扫描可查看详情
- **分页加载**：支持动态加载更多成果，提升用户体验
- **详情页面**：每个成果都有独立的详情展示页面
- **现代化UI**：美观的渐变设计和动画效果

## 📁 文件结构

```
project/
├── index.html              # 主页面（成果列表）
├── styles.css              # 样式文件
├── script.js               # JavaScript功能文件
├── achievement-1.html      # 成果1详情页
├── achievement-2.html      # 成果2详情页
├── achievement-3.html      # 成果3详情页（自动生成）
├── ...                     # 更多成果详情页
├── achievement-30.html     # 成果30详情页（自动生成）
└── README.md               # 项目说明文档
```

## 🚀 快速开始

### 1. 本地运行

1. 下载所有文件到本地目录
2. 使用浏览器直接打开 `index.html` 文件
3. 或者使用本地服务器运行：

```bash
# 使用Python
python -m http.server 8000

# 使用Node.js (需要安装http-server)
npx http-server

# 使用PHP
php -S localhost:8000
```

### 2. 部署到GitHub Pages（推荐）

#### 方法一：直接上传
1. 在GitHub上创建新仓库（建议命名：`henu-tech-achievements`）
2. 将所有文件上传到仓库
3. 在仓库设置中启用GitHub Pages
4. 选择部署源为"GitHub Actions"

#### 方法二：使用Git命令行
```bash
# 克隆仓库
git clone https://github.com/你的用户名/henu-tech-achievements.git
cd henu-tech-achievements

# 添加文件
git add .
git commit -m "Initial commit"
git push origin main
```

#### 自动部署配置
本项目已包含 `.github/workflows/deploy.yml` 文件，推送代码后会自动部署到GitHub Pages。

**访问地址**：`https://你的用户名.github.io/henu-tech-achievements/`

### 3. 其他部署选项

#### 腾讯云CloudBase
- 免费5GB流量/月
- 国内访问速度快
- 支持自定义域名

#### Netlify
- 免费100GB流量/月
- 全球CDN加速
- 拖拽部署

#### Vercel
- 无流量限制
- 全球边缘网络
- 从GitHub自动部署

## 📱 功能说明

### 主页面功能
- **成果展示**：以卡片形式展示科技成果信息
- **二维码**：每个成果卡片右上角显示二维码
- **加载更多**：点击按钮可加载更多成果（最多30个）
- **响应式布局**：自动适配不同屏幕尺寸

### 成果详情页
- **完整信息**：展示成果的详细信息
- **团队介绍**：包含团队负责人和联系方式
- **技术指标**：具体的技术参数和优势
- **合作方式**：技术转让、开发合作等选项

### 二维码功能
- 每个成果的二维码指向对应的详情页面
- 支持手机扫描直接访问
- URL格式：`[您的域名]/achievement-[成果ID].html`

## 🛠️ 定制化修改

### 修改成果数据
在 `script.js` 文件中找到 `achievementsData` 和 `additionalAchievements` 数组，按照以下格式添加或修改成果信息：

```javascript
{
    id: 1,
    title: "成果标题",
    leader: "负责人姓名",
    institution: "所在学院",
    field: "技术领域",
    direction: "研究方向",
    description: "详细描述...",
    cooperation: ["合作方式1", "合作方式2"],
    contact: {
        project: { name: "联系人", phone: "电话" },
        academic: { name: "学科联系人", phone: "电话" }
    }
}
```

### 修改样式
- 编辑 `styles.css` 文件可以修改网站外观
- 主要颜色变量在文件顶部定义
- 支持自定义渐变色、字体、间距等

### 添加新的详情页
1. 复制 `achievement-1.html` 文件
2. 重命名为 `achievement-[新ID].html`
3. 修改页面内容和标题
4. 在 `script.js` 中添加对应的数据项

## 🎨 技术特点

- **纯静态网站**：无需数据库，部署简单
- **现代CSS**：使用Grid和Flexbox布局
- **原生JavaScript**：无依赖的轻量级实现
- **QR码生成**：使用qrcode.js库动态生成二维码
- **渐进增强**：基础功能在所有浏览器中都能正常工作

## 📞 联系方式

如需技术支持或定制开发，请联系：

- **项目联系人**：李胜军
- **联系电话**：15194605886
- **学科联系人**：张超
- **联系电话**：15737955421

## 📄 许可证

本项目基于河南大学科技创新团队的实际成果展示需求开发，仅供学术和科研用途使用。

## 🔄 更新日志

- **v1.0.0**：初始版本，包含基础展示功能
- **v1.1.0**：添加二维码功能和详情页面
- **v1.2.0**：优化响应式设计和动画效果

---

**注意**：请确保在部署前测试所有功能，特别是二维码扫描功能需要在实际部署环境中验证URL的正确性。 