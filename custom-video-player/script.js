/**
 * 自定义视频播放器 - Custom Video Player
 * 
 * 功能说明：
 * - 自定义播放/暂停按钮
 * - 自定义停止按钮
 * - 自定义进度条显示和控制
 * - 显示当前播放时间
 * 
 * 需要实现的功能：
 * 1. 获取DOM元素（视频、播放按钮、停止按钮、进度条、时间戳）
 * 2. 实现toggleVideoStatus()函数 - 切换播放/暂停状态
 * 3. 实现updatePlayIcon()函数 - 根据播放状态更新按钮图标
 * 4. 实现updateProgress()函数 - 更新进度条和时间显示
 * 5. 实现setVideoProgress()函数 - 根据进度条设置视频播放位置
 * 6. 实现stopVideo()函数 - 停止视频播放
 * 7. 添加所有事件监听器
 */

// ==================== DOM 元素获取 ====================
const video = document.getElementById('video');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const PlayIcon = document.getElementById('play');


// ==================== 视频控制函数 ====================

/**
 * 切换视频播放/暂停状态
 * 如果视频暂停则播放，否则暂停
 */
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  updatePlayIcon();
}

/**
 * 更新播放/暂停按钮图标
 * 根据视频当前状态显示对应图标
 */
function updatePlayIcon() {
  // TODO: 实现图标更新
  if (video.paused) {
    PlayIcon.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  }
  else {
    PlayIcon.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

/**
 * 更新进度条和时间戳显示
 * 计算当前播放进度百分比
 * 格式化显示分钟:秒钟
 */
function updateProgress() {
  // TODO: 实现进度更新
  if (!video.duration) {
    return;
  }
  progress.value = (video.currentTime / video.duration) * 100;
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }
  timestamp.innerHTML = `${mins}:${secs}`;
}

/**
 * 根据进度条位置设置视频播放时间
 */
function setVideoProgress() {
  video.currentTime = (+progress.value / 100) * video.duration;
  // TODO: 实现进度设置
}

/**
 * 停止视频播放
 * 将视频时间重置为0并暂停
 */
function stopVideo() {
  video.pause();
  video.currentTime = 0;
  updatePlayIcon();
  // TODO: 实现停止功能
}

// ==================== 事件监听器 ====================
// TODO: 视频点击事件 - 切换播放状态
// TODO: 视频暂停事件 - 更新图标
// TODO: 视频播放事件 - 更新图标
// TODO: 视频时间更新事件 - 更新进度
// TODO: 播放按钮点击事件 - 切换播放状态
// TODO: 停止按钮点击事件 - 停止视频
// TODO: 进度条改变事件 - 设置播放位置

updatePlayIcon();

video.onclick = toggleVideoStatus;
PlayIcon.onclick = toggleVideoStatus;
video.onpause = updatePlayIcon;
video.onplay = updatePlayIcon; // To handle play event by browser
video.ontimeupdate = updateProgress;
stop.onclick = stopVideo;
progress.onchange = setVideoProgress;

window.onkeydown = function (e) {
  if (e.code === 'Space') {
    toggleVideoStatus();
  }
  if (e.code === 'ArrowLeft') {
    video.currentTime -= 0.5;
  }
  if (e.code === 'ArrowRight') {
    video.currentTime += 0.5;
  }
}; // Handle space key to play/pause and left/right arrow to rewind/forward