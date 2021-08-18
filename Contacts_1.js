import { FaTimes } from 'react-icons/fa';

function List({ list, onDelete }) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Тelefon</th>
          </tr>
        </thead>
        <tbody>
          {list.map((contact) => (
            <tr className="directory" key={contact.id}>
              <td className="directory__item">{contact.name}</td>
              <td className="directory__item">{contact.phone}</td>
              <td>
                <FaTimes
                  style={{ color: 'red', cursor: 'pointer' }}
                  onClick={() => onDelete(contact.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;
