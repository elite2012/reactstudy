//这个 Gallery 组件包含两份个人资料，其中有一些非常相似的标签
//。从中提取一个 Profile 组件以减少重复。你需要选择要传递哪些 props。
import { getImageUrl } from './utils.js';
function profile({
    imageId,
    name,
    profession,
    awards,
    discovery,
    imageSize

}){
    return(
        <section className="profile">
     
            <h2>{name}</h2>
            <img
             className="avatar"
             src={getImageUrl(imageId)}
             alt={name}
             width={imageSize}
             height={imageSize}
             />
             <ul>
                <li><b>Profession:</b>{profession}</li>
                <li><b>Awards:{awards.length}</b>
                    ({awards.join(',')})
                </li>
             </ul>
             <li>
                <b>Discovered: </b>
                {discovery}
             </li>
        </section>
            
    );

}
export default function Gallery() {
  return (
    <div>
      <h1>Notable Scientists</h1>
      <section className="profile">
        <h2>Maria Skłodowska-Curie</h2>
        <img
          className="avatar"
          src={getImageUrl('szV5sdG')}
          alt="Maria Skłodowska-Curie"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            physicist and chemist
          </li>
          <li>
            <b>Awards: 4 </b> 
            (Nobel Prize in Physics, Nobel Prize in Chemistry, Davy Medal, Matteucci Medal)
          </li>
          <li>
            <b>Discovered: </b>
            polonium (element)
          </li>
        </ul>
      </section>
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
