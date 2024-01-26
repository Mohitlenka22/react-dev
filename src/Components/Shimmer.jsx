// shimmer ui is a representation of actual ui
// import { useId } from 'react';
const Shimmer = () => {
//   const  id = useId();
//   console.log(id);
  return (
    <div className='shimmer-container'>
      {Array(20)
        .fill("")
        .map((e, id) => (
          <div key={id} className="shimmer-card"></div>
        ))}
    </div>
  );
};
export default Shimmer;
