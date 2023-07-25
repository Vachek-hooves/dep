import ava from './photo.jpg';

export const Avatar = () => {
  return (
    <div>
      <img
        style={{ width: '40px', borderRadius: '5px' }}
        src={ava}
        alt="Slava"
      />
    </div>
  );
};
