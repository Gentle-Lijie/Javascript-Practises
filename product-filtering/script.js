/**
 * 产品筛选应用 - Product Filtering
 * 
 * 功能说明：
 * - 显示产品列表
 * - 按类别复选框筛选产品
 * - 按搜索关键词筛选产品
 * - 添加到购物车功能
 * - 显示购物车数量
 * 
 * 需要实现的功能：
 * 1. 定义产品数据数组（包含名称、图片URL、类型、价格）
 * 2. 获取DOM元素（产品容器、复选框、搜索框、购物车按钮等）
 * 3. 实现createProductElement()函数 - 创建产品卡片元素
 * 4. 实现addToCart()函数 - 添加/移除购物车
 * 5. 实现filterProducts()函数 - 根据搜索和类别筛选产品
 * 6. 添加所有事件监听器
 */

// ==================== 产品数据 ====================
// TODO: 定义产品数组，每个产品包含：
// - name: 产品名称
// - url: 图片路径
// - type: 产品类型（games/smartphones/cameras/televisions）
// - price: 价格
const products = [
  // 在此添加产品数据
];

// ==================== DOM 元素获取 ====================
const productsWrapperEl = document.getElementById('products-wrapper');
const checkEls = document.querySelectorAll('.check');
const filtersContainer = document.getElementById('filters-container');
const searchInput = document.getElementById('search');
const cartButton = document.getElementById('cartButton');
const cartCount = document.getElementById('cartCount');

// ==================== 状态变量 ====================
// 购物车商品数量
let cartItemCount = 0;

// 存储产品DOM元素
const productsEls = [];

// ==================== 初始化产品显示 ====================
// TODO: 遍历产品数组，创建产品元素并添加到DOM

// ==================== 事件监听器绑定 ====================
// TODO: 筛选器变化事件
// TODO: 搜索输入事件

// ==================== 产品创建函数 ====================

/**
 * 创建产品卡片元素
 * @param {Object} product - 产品对象
 * @returns {HTMLElement} 产品元素
 */
function createProductElement(product) {
  // TODO: 实现产品元素创建
  // 1. 创建div元素
  // 2. 设置类名和内部HTML
  // 3. 添加图片、名称、价格
  // 4. 添加"添加到购物车"按钮
  // 5. 为按钮添加点击事件
}

/**
 * 切换添加/移除购物车
 * @param {Event} e - 点击事件
 */
function addToCart(e) {
  // TODO: 实现购物车切换
  // 1. 检查是否已添加（通过added类）
  // 2. 切换按钮文字和样式
  // 3. 更新购物车数量
}

/**
 * 根据搜索词和类别筛选产品
 * 显示或隐藏产品元素
 */
function filterProducts() {
  // TODO: 实现产品筛选
  // 1. 获取搜索词
  // 2. 获取选中的类别
  // 3. 遍历产品，判断是否匹配
  // 4. 显示或隐藏产品元素
}
