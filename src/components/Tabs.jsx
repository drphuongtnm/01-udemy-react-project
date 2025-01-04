export default function Tabs({ children, button, ButtonContainer = "menu" }) {
  // const ButtonContainer = buttonContainer; // phãi ghi hoa chữ cái đầu

  return (
    <>
      {/* Custom container */}
      <ButtonContainer>{button}</ButtonContainer>
      {children}
    </>
  );
}
