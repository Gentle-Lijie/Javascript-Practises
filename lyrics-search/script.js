/**
 * 歌词搜索应用 - Lyrics Search
 * 
 * 功能说明：
 * - 根据歌曲或歌手名称搜索歌词
 * - 显示搜索结果列表
 * - 点击获取歌词按钮查看完整歌词
 * - 支持分页浏览搜索结果
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（表单、搜索框、结果容器、分页按钮容器）
 * 2. 实现searchSongs()函数 - 从API搜索歌曲
 * 3. 实现showData()函数 - 显示搜索结果列表
 * 4. 实现getMoreSongs()函数 - 获取上一页/下一页结果
 * 5. 实现getLyrics()函数 - 获取指定歌曲的歌词
 * 6. 添加表单提交事件监听器
 * 7. 添加歌词按钮点击事件监听器（事件委托）
 */

// ==================== DOM 元素获取 ====================
const form = document.getElementById('form');
const search = document.getElementById('search');
const result = document.getElementById('result');
const more = document.getElementById('more');

// ==================== API配置 ====================
const apiURL = 'https://api.lyrics.ovh';

// ==================== 搜索函数 ====================

/**
 * 根据搜索词搜索歌曲
 * @param {string} term - 搜索关键词
 */
async function searchSongs(term) {
  // TODO: 实现歌曲搜索
  // 使用fetch从API获取数据
  // 调用showData显示结果
}

/**
 * 在DOM中显示搜索结果
 * 显示歌手名称、歌曲标题和获取歌词按钮
 * @param {Object} data - 搜索结果数据
 */
function showData(data) {
  // TODO: 实现结果显示
  // 1. 创建歌曲列表HTML
  // 2. 为每首歌添加"获取歌词"按钮
  // 3. 如果有上一页/下一页，显示分页按钮
}

/**
 * 获取更多歌曲（上一页/下一页）
 * @param {string} url - 分页URL
 */
async function getMoreSongs(url) {
  // TODO: 实现分页获取
}

/**
 * 获取指定歌曲的歌词
 * @param {string} artist - 歌手名称
 * @param {string} songTitle - 歌曲标题
 */
async function getLyrics(artist, songTitle) {
  // TODO: 实现歌词获取
  // 1. 从API获取歌词
  // 2. 处理换行符显示
  // 3. 显示歌词内容
}

// ==================== 事件监听器 ====================
// TODO: 表单提交事件 - 阻止默认提交，获取搜索词并搜索

// TODO: 结果容器点击事件（事件委托）
// 检测点击的是否为"获取歌词"按钮
// 获取按钮上的data-artist和data-songtitle属性
// 调用getLyrics函数
