//在 children prop 中传递 JSX 代码 
//从下面的代码中提取一个 Card 组件，并使用 children prop 将不同的 JSX 传递给它：
function Card({ children }) {
    return (
      <div className="card">
        <div className="card-content">
          {children}
        </div>
      </div>
    );
  }
  
  export default function Profile() {
    return (
      <div>
        <Card>
          <h1>Photo</h1>
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={100}
            height={100}
          />
        </Card>
        <Card>
          <h1>About</h1>
          <p>Aklilu Lemma was a distinguished Ethiopian scientist who discovered a natural treatment to schistosomiasis.</p>
        </Card>
      </div>
    );
  }
  