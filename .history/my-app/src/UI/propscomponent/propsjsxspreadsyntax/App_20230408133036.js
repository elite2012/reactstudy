import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile(props) {
  return (
    <div>
      <Avatar {...props}
       
      />
      
    </div>
  );
}
