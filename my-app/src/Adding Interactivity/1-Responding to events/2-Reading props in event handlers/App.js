//在事件处理函数中读取 props
function AlertButton({ message, children }) {
    return (
      <button onClick={() => alert(message)}>
        {children}
      </button>
    );
  }
  
  export default function Toolbar() {
    return (
      <div>
        <AlertButton message="正在播放！">
          播放电影
        </AlertButton>
        <AlertButton message="正在上传！">
          上传图片
        </AlertButton>
      </div>
    );
  }
  