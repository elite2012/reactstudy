//UI-第一个组件-使用组件
function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }
  
  export default function Gallery() {
    return (
      <section>
        <h1>了不起的科学家</h1>
        <Profile />
        <Profile />
        <Profile />
      </section>
    );
  }
  