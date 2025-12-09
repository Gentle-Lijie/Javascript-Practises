/**
 * 音乐播放器 - Music Player
 * 
 * 功能说明：
 * - 播放/暂停音乐
 * - 上一首/下一首切换
 * - 显示播放进度条
 * - 点击进度条跳转播放位置
 * - 显示当前时间和总时长
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（播放器容器、按钮、音频、进度条、标题、封面等）
 * 2. 实现loadSong()函数 - 加载歌曲信息
 * 3. 实现playSong()函数 - 播放歌曲
 * 4. 实现pauseSong()函数 - 暂停歌曲
 * 5. 实现prevSong()函数 - 切换到上一首
 * 6. 实现nextSong()函数 - 切换到下一首
 * 7. 实现updateProgress()函数 - 更新进度条
 * 8. 实现setProgress()函数 - 点击设置播放位置
 * 9. 实现DurTime()函数 - 更新时间显示
 * 10. 添加所有事件监听器
 */

// ==================== DOM 元素获取 ====================
const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');
const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

// ==================== 歌曲数据 ====================
// 歌曲标题数组（与music和images文件夹中的文件名对应）
const songs = ['hey', 'summer', 'ukulele'];

// 当前歌曲索引
let songIndex = 2;

// ==================== 初始化 ====================
// TODO: 加载初始歌曲

// ==================== 歌曲控制函数 ====================

/**
 * 加载歌曲信息
 * 更新标题、音频源和封面图
 * @param {string} song - 歌曲名称
 */
function loadSong(song) {
  // TODO: 实现歌曲加载
}

/**
 * 播放歌曲
 * 添加play类，更改按钮图标为暂停
 */
function playSong() {
  // TODO: 实现播放功能
}

/**
 * 暂停歌曲
 * 移除play类，更改按钮图标为播放
 */
function pauseSong() {
  // TODO: 实现暂停功能
}

/**
 * 切换到上一首歌曲
 * 如果是第一首则循环到最后一首
 */
function prevSong() {
  // TODO: 实现上一首
}

/**
 * 切换到下一首歌曲
 * 如果是最后一首则循环到第一首
 */
function nextSong() {
  // TODO: 实现下一首
}

// ==================== 进度条函数 ====================

/**
 * 更新进度条
 * 根据当前播放时间计算进度百分比
 * @param {Event} e - timeupdate事件
 */
function updateProgress(e) {
  // TODO: 实现进度更新
}

/**
 * 点击进度条设置播放位置
 * @param {Event} e - 点击事件
 */
function setProgress(e) {
  // TODO: 实现点击跳转
}

/**
 * 更新当前时间和总时长显示
 * 格式化为 MM:SS
 * @param {Event} e - timeupdate事件
 */
function DurTime(e) {
  // TODO: 实现时间显示
}

// ==================== 事件监听器 ====================

// TODO: 播放/暂停按钮点击事件
// TODO: 上一首按钮点击事件
// TODO: 下一首按钮点击事件
// TODO: 音频时间更新事件 - 更新进度条
// TODO: 进度条点击事件 - 跳转播放位置
// TODO: 歌曲结束事件 - 自动下一首
// TODO: 音频时间更新事件 - 更新时间显示
