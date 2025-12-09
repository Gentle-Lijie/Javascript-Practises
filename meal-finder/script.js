/**
 * 食谱查找器 - Meal Finder
 * 
 * 功能说明：
 * - 根据关键词搜索食谱
 * - 显示搜索结果列表
 * - 点击食谱查看详细信息和配料
 * - 支持获取随机食谱
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（搜索框、提交按钮、随机按钮、食谱容器等）
 * 2. 实现searchMeal()函数 - 根据关键词搜索食谱
 * 3. 实现getMealById()函数 - 根据ID获取食谱详情
 * 4. 实现getRandomMeal()函数 - 获取随机食谱
 * 5. 实现addMealToDOM()函数 - 显示食谱详情
 * 6. 添加所有事件监听器
 */

// ==================== DOM 元素获取 ====================
const search = document.getElementById('search'),
  submit = document.getElementById('submit'),
  random = document.getElementById('random'),
  mealsEl = document.getElementById('meals'),
  resultHeading = document.getElementById('result-heading'),
  single_mealEl = document.getElementById('single-meal');

// ==================== 搜索函数 ====================

/**
 * 根据关键词搜索食谱
 * @param {Event} e - 表单提交事件
 */
function searchMeal(e) {
  // TODO: 实现食谱搜索
  // 1. 阻止表单默认提交
  // 2. 清空单个食谱显示
  // 3. 获取搜索词
  // 4. 使用fetch从API获取数据
  // 5. 显示搜索结果或无结果提示
  // 6. 清空搜索框
}

/**
 * 根据ID获取食谱详情
 * @param {string} mealID - 食谱ID
 */
function getMealById(mealID) {
  // TODO: 实现根据ID获取食谱
  // 调用addMealToDOM显示详情
}

/**
 * 获取随机食谱
 */
function getRandomMeal() {
  // TODO: 实现随机食谱
  // 1. 清空食谱列表和标题
  // 2. 从API获取随机食谱
  // 3. 调用addMealToDOM显示
}

// ==================== 显示函数 ====================

/**
 * 将食谱详情添加到DOM
 * 显示食谱名称、图片、分类、地区、说明和配料
 * @param {Object} meal - 食谱对象
 */
function addMealToDOM(meal) {
  // TODO: 实现食谱显示
  // 1. 遍历获取所有配料和用量（strIngredient1-20, strMeasure1-20）
  // 2. 创建HTML显示食谱信息
  // 3. 显示配料列表
}

// ==================== 事件监听器 ====================
// TODO: 表单提交事件 - 搜索食谱
// TODO: 随机按钮点击事件 - 获取随机食谱
// TODO: 食谱列表点击事件（事件委托）- 点击食谱查看详情
