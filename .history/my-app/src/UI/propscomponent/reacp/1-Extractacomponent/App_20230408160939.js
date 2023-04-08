//这个 Gallery 组件包含两份个人资料，其中有一些非常相似的标签
//。从中提取一个 Profile 组件以减少重复。你需要选择要传递哪些 props。
import { getImageUrl } from './utils.js';
function Profile({
    imageId,
    name,
    profession,
    discovery,
    awards,
    imageSize = 70

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
      <profile
        imageId="szV5sdG"
        name = "Maria Skłodowska-Curie"
        profession = "  physicist and chemist"
        discovery = "polonium (element)"
        awards={[
            'Nobel Prize in Physics',
            'Nobel Prize in Chemistry',
            'Davy Medal',
            'Matteucci Medal'
          ]}
       
      />
       <profile
        imageId='YfeOqp2'
        name='Katsuko Saruhashi'
        profession='geochemist'
        discovery="a method for measuring carbon dioxide in seawater"
        awards={[
          'Miyake Prize for geochemistry',
          'Tanaka Prize'
        ]}
      />
     
    </div>
  );
}
