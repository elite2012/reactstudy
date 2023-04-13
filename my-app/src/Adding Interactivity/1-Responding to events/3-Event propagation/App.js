//事件处理函数还将捕获任何来自子组件的事件。通常，我们会说事件会沿着树向上“冒泡”或“传播”：它从事件发生的地方开始，然后沿着树向上传播。
export default function Toolbar() {
    return (
      <div className="Toolbar" onClick={() => {
        alert('你点击了 toolbar ！');
      }}>
        <button onClick={() => alert('正在播放！')}>
          播放电影
        </button>
        <button onClick={() => alert('正在上传！')}>
          上传图片
        </button>
      </div>
    );
  }
  