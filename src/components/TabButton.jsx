// Cách 1 (tương ứng với cách 1 bên Examples.js)
// function TabButton({ children, onSelect, isSelected }) {
//   return (
//     <li>
//       <button className={isSelected ? "active" : ""} onClick={onSelect}>
//         {children}
//       </button>
//     </li>
//   );
// }
function TabButton({ children, isSelected, ...props }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} {...props}>
        {children}
      </button>
    </li>
  );
}
export default TabButton;
